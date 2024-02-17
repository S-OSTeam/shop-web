import React from 'react';
import { Box } from '@mui/material';
import { ReactComponent as GoogleLogin } from '@asset/image/social/GoogleLogin.svg';
import { ReactComponent as NaverLogin } from '@asset/image/social/NaverLogin.svg';
import { ReactComponent as KakaoLogin } from '@asset/image/social/KakaoLogin.svg';
import Text from '@components/atoms/text/Text';
import ImageButton from '@components/molecules/button/imageButton/ImageButton';
import clsN from 'classnames';
import style from './style/style.module.scss';

const MobileSocialLogin = () => {
    return (
        <Box className={clsN(`${style['mobile-social-login-wrapper']}`)}>
            <Text
                text="간편 로그인 "
                variant="subtitle1"
                className={clsN(`${style['mobile-social-login-wrapper__title']}`)}
                align="center"
            />
            <Box className={clsN(`${style['mobile-social-login-wrapper__social-wrapper']}`)}>
                <ImageButton className={clsN(style.btn)}>
                    <NaverLogin className={clsN(`${style['mobile-social-login-wrapper__naver-login']}`)} />
                </ImageButton>
                <ImageButton className={clsN(style.btn)}>
                    <KakaoLogin className={clsN(`${style['mobile-social-login-wrapper__kakao-login']}`)} />
                </ImageButton>
                <ImageButton className={clsN(style.btn)}>
                    <GoogleLogin className={clsN(`${style['mobile-social-login-wrapper__google-login']}`)} />
                </ImageButton>
            </Box>
        </Box>
    );
};

export default MobileSocialLogin;
