import React from 'react';
import { Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import Text from '@components/atoms/text/Text';
import Button from '@components/atoms/button/Button';
// import axios from 'axios';
import clsN from 'classnames';
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
            <Text
                text="또는"
                variant="subtitle2"
                className={clsN(`${style['mobile-login-wrapper__title']}`)}
                align="center"
            />

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
