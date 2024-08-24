/* eslint-disable*/
import React, { useEffect, useRef, useState } from 'react';
import { Box, Divider } from '@mui/material';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import { KAKAO_LOGIN, NAVER_LOGIN } from '@api/apollo/gql/mutations/LoginMutation.gql';
import useGraphQL from '@hooks/useGraphQL';
import Button from '@atoms/button/Button';
import Text from '@components/atoms/text/Text';
import ImgTextButton from '@components/molecules/button/imgTextButton/ImgTextButton';
import CustomIcon from '@components/atoms/source/icon/customIcon/CustomIcon';
import { useLocation } from 'react-router-dom';
import clsN from 'classnames';
import style from './style/style.module.scss';

declare global {
    interface Window {
        naver: any;
    }
}

const SocialLogin = () => {
    const isInMobile = useDomSizeCheckHook(768);
    const location = useLocation();

    const socialPlatforms = [
        { name: 'naver', text: '네이버 로그인' },
        { name: 'kakao', text: '카카오 로그인' },
        { name: 'google', text: '구글 로그인' },
    ];

    const STATE = 'false';

    const { refetch: naverLogin } = useGraphQL({
        query: NAVER_LOGIN,
        type: 'mutation',
        request: { STATE, code: '' },
        option: { 'Authorization-mac': '2C-6D-C1-87-E0-B5' },
    });

    const { data: kakaoData, refetch: kakaoLogin } = useGraphQL({
        query: KAKAO_LOGIN,
        type: 'mutation',
        request: { STATE, code: '' },
        option: { 'Authorization-mac': '2C-6D-C1-87-E0-B5' },
    });

    const naverRef = useRef<HTMLDivElement>(null);
    const [user, setUser] = useState(null);
    const myNaverLogin = new window.naver.LoginWithNaverId({
        clientId: `${process.env.REACT_APP_NAVER_CLIENT_ID}`,
        callbackUrl: 'http://localhost:3000/login',
        isPopup: false,
        loginButton: { color: 'green', type: 1, height: '45' },
        callbackHandle: true,
    });
    const getNaverUser = async () => {
        await myNaverLogin.getLoginStatus((status: any) => {
            console.log(`로그인?: ${status}`);
            if (status) {
                setUser({ ...myNaverLogin.user });
                console.log(myNaverLogin);
                console.log(myNaverLogin.user.name);
                console.log(myNaverLogin.user.email);
            }
        });
    };

    const initNaverLogin = () => {
        myNaverLogin.init();
        const code = new URLSearchParams(location.search);

        console.log(code);
        getNaverUser();
    };

    const handleNaverCallback = () => {};

    useEffect(() => {
        initNaverLogin();
        handleNaverCallback();
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

    const naverLogout = () => {
        // localStorage.removeItem('com.naver.nid.access_token');
        const accessToken = localStorage.getItem('com.naver.nid.access_token');
        console.log(accessToken);
        // window.location.reload();
    };

    const REST_KEY = `${process.env.REACT_APP_KAKAO_CLIENT_KEY}`;
    const redirect_uri = 'http://localhost:3000/login';
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_KEY}&redirect_uri=${redirect_uri}&response_type=code`;

    const handleKakaoLogin = () => {
        window.location.href = kakaoURL;
        const code = new URL(window.location.href).searchParams.get('code');
        console.log(code);
        kakaoLogin({
            variables: {
                request: {
                    code,
                    state: true,
                },
            },
        })
            .then((response) => {
                console.log('Kakao Login Success:', response.data);
            })
            .catch((error) => {
                console.error('Kakao Login Error:', error);
            });
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
                        <Box>
                            <Button onClick={naverLogout}>로그아웃</Button>
                        </Box>
                    </Box>
                )}
            </Box>
        </div>
    );
};

export default SocialLogin;
