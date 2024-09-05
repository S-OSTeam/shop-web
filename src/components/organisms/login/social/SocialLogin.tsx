/* eslint-disable*/
import React, { useEffect, useRef, useState } from 'react';
import { Box, Divider } from '@mui/material';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import { KAKAO_LOGIN, NAVER_LOGIN, SIGN_UP_REQUEST } from '@api/apollo/gql/mutations/LoginMutation.gql';
import useGraphQL from '@hooks/useGraphQL';
import Button from '@atoms/button/Button';
import Text from '@components/atoms/text/Text';
import ImgTextButton from '@components/molecules/button/imgTextButton/ImgTextButton';
import CustomIcon from '@components/atoms/source/icon/customIcon/CustomIcon';
import { useLocation } from 'react-router-dom';
import clsN from 'classnames';
import style from './style/style.module.scss';

const SocialLogin = () => {
    const isInMobile = useDomSizeCheckHook(768);
    const location = useLocation();
    const [naverState, setNaverState] = useState('');
    const [naverCode, setNaverCode] = useState('');
    const naverRef = useRef<HTMLDivElement>(null);
    const socialPlatforms = [
        { name: 'naver', text: '네이버 로그인' },
        { name: 'kakao', text: '카카오 로그인' },
        { name: 'google', text: '구글 로그인' },
    ];

    const { refetch: naverLogin } = useGraphQL({
        query: SIGN_UP_REQUEST,
        type: 'mutation',
        request: {
            userId: '',
            pwd: '',
            confirmPwd: '',
            zipcode: '',
            address1: '',
            email: '',
            snsCode: naverCode,
            sns: 'NAVER',
            userName: '',
        },
        option: { 'Authorization-mac': '2C-6D-C1-87-E0-B5' },
    });

    const { data: kakaoData, refetch: kakaoLogin } = useGraphQL({
        query: KAKAO_LOGIN,
        type: 'mutation',
        request: { state: '', code: '' },
        option: { 'Authorization-mac': '2C-6D-C1-87-E0-B5' },
    });

    const myNaverCodeURL = `https://nid.naver.com/oauth2.0/authorize?client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent('http://localhost:3000/signup')}&state=${encodeURIComponent(process.env.REACT_APP_NAVER_STATE ?? '')}`;

    useEffect(() => {
        const snsCode = new URL(window.location.href).searchParams.get('code');

        if (snsCode) {
            setNaverCode(snsCode);
        }
    }, []);

    const handleNaverLogin = () => {
        localStorage.setItem('state', Math.random().toString());
        window.location.href = myNaverCodeURL;
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
                    </Box>
                )}
            </Box>
        </div>
    );
};

export default SocialLogin;
