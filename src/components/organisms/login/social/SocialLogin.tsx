import React from 'react';
import { Box } from '@mui/material';
import { ReactComponent as GoogleIcon } from '@asset/image/icons/GoogleIcon.svg';
import { ReactComponent as NaverIcon } from '@asset/image/icons/NaverIcon.svg';
import { ReactComponent as KakaoIcon } from '@asset/image/icons/KakaoIcon.svg';
import Text from '@components/atoms/text/Text';
import ImageButton from '@components/molecules/button/imageButton/ImageButton';
import clsN from 'classnames';
import style from './style/style.module.scss';

const SocialLogin = () => {
    return (
        <Box className={clsN(`${style['social-login-wrapper']}`)}>
            <Text
                text="간편 로그인 "
                variant="subtitle1"
                className={clsN(`${style['social-login-wrapper__title']}`)}
                align="center"
            />
            <Box className={clsN(`${style['social-login-wrapper__icon-wrapper']}`)}>
                <ImageButton className={clsN(style.btn)}>
                    <NaverIcon className={clsN(`${style['social-login-wrapper__naver-icon']}`)} />
                </ImageButton>
                <ImageButton className={clsN(style.btn)}>
                    <KakaoIcon className={clsN(`${style['social-login-wrapper__kakao-icon']}`)} />
                </ImageButton>
                <ImageButton className={clsN(style.btn)}>
                    <GoogleIcon className={clsN(`${style['social-login-wrapper__google-icon']}`)} />
                </ImageButton>
            </Box>
        </Box>
    );
};

export default SocialLogin;
