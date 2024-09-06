/* eslint-disable*/
import React, { useEffect, useRef, useState } from 'react';
import { Box, Divider } from '@mui/material';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import { useLocation } from 'react-router-dom';
import { SIGN_UP_REQUEST, LOGIN_REQUEST } from '@api/apollo/gql/mutations/LoginMutation.gql';
import useGraphQL from '@hooks/useGraphQL';
import Button from '@atoms/button/Button';
import Text from '@components/atoms/text/Text';
import ImgTextButton from '@components/molecules/button/imgTextButton/ImgTextButton';
import CustomIcon from '@components/atoms/source/icon/customIcon/CustomIcon';
import clsN from 'classnames';
import style from './style/style.module.scss';

const SocialLogin = () => {
    const isInMobile = useDomSizeCheckHook(768);
    const location = useLocation();
    const [naverCode, setNaverCode] = useState<string | null>('');
    const naverRef = useRef<HTMLDivElement>(null);
    const socialPlatforms = [
        { name: 'naver', text: '네이버 로그인' },
        { name: 'kakao', text: '카카오 로그인' },
        { name: 'google', text: '구글 로그인' },
    ];

    const { refetch: naverLogin } = useGraphQL({
        query: LOGIN_REQUEST,
        type: 'mutation',
        request: {
            pwd: '',
            userId: '',
            email: '',
            snsCode: '',
            sns: 'NAVER',
        },
        option: { 'Authorization-mac': '2C-6D-C1-87-E0-B5' },
    });

    const { refetch: naverSignUp } = useGraphQL({
        query: SIGN_UP_REQUEST,
        type: 'mutation',
        request: {
            userId: '',
            pwd: '',
            confirmPwd: '',
            zipcode: '',
            address1: '',
            email: '',
            sns: 'NAVER',
            userName: '',
        },
        option: { 'Authorization-mac': '2C-6D-C1-87-E0-B5' },
    });

    const myNaverCodeURL = `https://nid.naver.com/oauth2.0/authorize?client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000/login&state=${process.env.REACT_APP_NAVER_STATE}`;

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const codeParam = queryParams.get('code');
        setNaverCode(codeParam);
    }, [location.search]);

    const handleNaverLogin = () => {
        const width = 500;
        const height = 600;
        const left = window.screenX + (window.innerWidth - width) / 2;
        const top = window.screenY + (window.innerHeight - height) / 2;

        const loginPopup = window.open(
            myNaverCodeURL,
            'Naver Login',
            `width=${width},height=${height},left=${left},top=${top}`,
        );
        if (loginPopup && !loginPopup.closed) {
            loginPopup.close();
        }
        document.location.href = 'http://naver.com';
        console.log(loginPopup);
    };

    const handleKakaoLogin = () => {
        console.log('KakaoLogin is clicked!');
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
