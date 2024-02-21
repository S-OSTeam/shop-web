import React from 'react';
import { Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import Button from '@components/atoms/button/Button';
// import axios from 'axios';
import clsN from 'classnames';
import DividerWithText from '@components/molecules/divider/dividerWithText/DividerWithText';
import style from './style/style.module.scss';

const MobileLogin = () => {
    return (
        <Box className={clsN(`${style['mobile-login-wrapper']}`)}>
            <Box className={clsN(`${style['mobile-login-wrapper__title']}`)}>
                <DividerWithText
                    text="또는"
                    variant="h6"
                    align="center"
                    className={clsN(`${style['mobile-login-wrapper__text']}`)}
                >
                    또는
                </DividerWithText>
            </Box>
            <Box className={clsN(`${style['mobile-login-wrapper__btn-wrapper']}`)}>
                <Button
                    className={clsN(`${style['mobile-login-wrapper__btn-wrapper__signup-btn']}`)}
                    variant="outlined"
                >
                    회원가입
                </Button>
                <Button className={clsN(`${style['mobile-login-wrapper__btn-wrapper__login-btn']}`)} variant="outlined">
                    로그인
                </Button>
            </Box>
        </Box>
    );
};

export default MobileLogin;
