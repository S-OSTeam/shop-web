/* eslint-disable*/
import React, { useEffect, useRef } from 'react';
import { Box, Divider } from '@mui/material';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import { KAKAO_LOGIN } from '@api/apollo/gql/mutations/LoginMutation.gql';
import useGraphQL from '@hooks/useGraphQL';
import Button from '@atoms/button/Button';
import Text from '@components/atoms/text/Text';
import ImgTextButton from '@components/molecules/button/imgTextButton/ImgTextButton';
import CustomIcon from '@components/atoms/source/icon/customIcon/CustomIcon';
import clsN from 'classnames';
import style from './style/style.module.scss';
import { useLocation } from 'react-router-dom';

declare global {
    interface Window {
        naver: any;
    }
}

const SocialLogin = () => {
    const isInMobile = useDomSizeCheckHook(768);
    const REDIRECT_URI = '/login';
    const socialPlatforms = [
        { name: 'naver', text: '네이버 로그인' },
        { name: 'kakao', text: '카카오 로그인' },
        { name: 'google', text: '구글 로그인' },
    ];

    const STATE = 'false';
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const { data: kakaoData, refetch: kakaoLogin } = useGraphQL({
        query: KAKAO_LOGIN,
        type: 'mutation',
        request: { STATE, code: '' },
        option: { 'Authorization-mac': '2C-6D-C1-87-E0-B5' },
    });
    const naverRef = useRef<HTMLDivElement>(null);

    const initNaverLogin = () => {
        const naverLogin = new window.naver.LoginWithNaverId({
            clientId: `${process.env.REACT_APP_NAVER_CLIENT_ID}`,
            callbackUrl: 'http://localhost:3000/login',
            isPopup: true,
            loginButton: { color: 'green', type: 1, height: '45' },
            callbackHandle: true,
        });

        naverLogin.init();
    };

    const userAccessToken = () => {
        window.location.href.includes('access_token') && getToken();
    };

    const getToken = () => {
        const token = window.location.href.split('=')[1].split('&')[0];
        console.log(token);
    };

    useEffect(() => {
        initNaverLogin();
        userAccessToken();
    }, []);

    const handleNaverLogin = () => {
        if (naverRef.current) {
            const loginButton = naverRef.current.querySelector('a#naverIdLogin_loginButton') as HTMLAnchorElement;
            if (loginButton) {
                loginButton.click();
            } else {
                console.error('Naver login button not found');
            }
        }
    };

    const handleKakaoLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
        const code = new URL(window.location.href).searchParams.get('code');
        const state = new URL(window.location.href).searchParams.get('state');
        if (code && state === STATE) {
            console.log('Received Naver code:', code);
            console.log('Received Naver state:', state);
            console.log(kakaoData);
            kakaoLogin({
                variables: {
                    request: {
                        code,
                        state,
                    },
                },
            })
                .then((response) => {
                    console.log('Success:', response.data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };

    const handleGoogleLogin = () => {
        console.log('GoogleLogin is clicked!');
    };

    const getPlatformHandler = (platformName: string) => {
        switch (platformName) {
            case 'naver':
                return handleNaverLogin;
            case 'kakao':
                return handleKakaoLogin;
            case 'google':
                return handleGoogleLogin;
            default:
                return undefined;
        }
    };

    return (
        <div>
            <Box className={clsN(`${style['social-login-wrapper']}`)}>
                {isInMobile && (
                    <Box className={clsN(`${style['mobile-social-login-wrapper']}`)}>
                        <Box className={clsN(`${style['mobile-social-login-wrapper__title']}`)}>
                            <Divider variant="middle" textAlign="center">
                                간편 로그인
                            </Divider>
                        </Box>

                        <Box className={clsN(`${style['mobile-social-login-wrapper__social-wrapper']}`)}>
                            <div ref={naverRef} id="naverIdLogin" style={{ display: 'none' }}></div>

                            {socialPlatforms.map((platform) => (
                                <ImgTextButton
                                    key={platform.name}
                                    className={clsN(
                                        `${style['mobile-social-login-wrapper__social-wrapper__btn']}`,
                                        `${style[`mobile-social-login-wrapper__social-wrapper__${platform.name}-btn`]}`,
                                    )}
                                    img={
                                        <CustomIcon
                                            name={platform.name}
                                            className={clsN(
                                                `${
                                                    style[
                                                        `mobile-social-login-wrapper__social-wrapper__${platform.name}-btn__${platform.name}-login`
                                                    ]
                                                }`,
                                            )}
                                        />
                                    }
                                    text={platform.text}
                                    onClick={getPlatformHandler(platform.name)}
                                />
                            ))}
                        </Box>
                    </Box>
                )}

                {!isInMobile && (
                    <Box>
                        <Text
                            text="간편 로그인 "
                            variant="subtitle1"
                            className={clsN(`${style['social-login-wrapper__title']}`)}
                            align="center"
                        />

                        <Box className={clsN(`${style['social-login-wrapper__icon-wrapper']}`)}>
                            <div ref={naverRef} id="naverIdLogin" style={{ display: 'none' }}></div>

                            {socialPlatforms.map((platform) => (
                                <Button
                                    key={platform.name}
                                    className={clsN(style.btn)}
                                    onClick={getPlatformHandler(platform.name)}
                                >
                                    <CustomIcon
                                        name={platform.name}
                                        className={clsN(`${style[`social-login-wrapper__${platform.name}-icon`]}`)}
                                    />
                                </Button>
                            ))}
                        </Box>
                    </Box>
                )}
            </Box>
        </div>
    );
};

export default SocialLogin;
