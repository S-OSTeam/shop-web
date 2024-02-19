import React from 'react';
import { Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import Button from '@components/atoms/button/Button';
// import axios from 'axios';
import clsN from 'classnames';
import DividerWithText from '@components/molecules/divider/dividerWithText/DividerWithText';
import style from './style/style.module.scss';

const MobileLogin = () => {
    // const handleLogin = async () => {
    //     console.log('Login Data:', formData);
    //     try {
    //         const response = await axios.post(`${BaseUrl}/user/login`, formData);
    //         console.log(response);
    //         if (response.status === 200) {
    //             const { accessToken, refreshToken } = response.data;

    //             setCookie('accessToken', `${accessToken}`, {
    //                 path: '/',
    //                 sameSite: 'strict',
    //             });

    //             setCookie('refreshToken', `${refreshToken}`, {
    //                 path: '/',
    //                 sameSite: 'strict',
    //             });
    //             console.log('Login Success');
    //             navigate('/phone');
    //         }
    //     } catch (error) {
    //         console.error('Login Error:', error);
    //     }
    // };
    // const navigate = useNavigate();

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
