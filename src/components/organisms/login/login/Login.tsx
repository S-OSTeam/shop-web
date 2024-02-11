import React, { useState } from 'react';
import { Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import Text from '@components/atoms/text/Text';
import Input from '@components/atoms/input/Input';
import SaveId from '@components/molecules/checkbox/saveId/SaveId';
import Button from '@components/atoms/button/Button';
// import axios from 'axios';
import clsN from 'classnames';
import style from './style/style.module.scss';

const Login = () => {
    const [formData, setFormData] = useState({
        id: '',
        pwd: '',
    });
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
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
        <Box className={clsN(`${style['login-wrapper']}`)}>
            <Text
                text="로그인"
                variant="subtitle1"
                className={clsN(`${style['login-wrapper__title']}`)}
                align="center"
            />
            <Input
                className={clsN(`${style['login-wrapper__input-id']}`)}
                placeholder="아이디"
                variant="standard"
                onChange={handleInputChange}
            />
            <Input
                className={clsN(`${style['login-wrapper__input-pwd']}`)}
                placeholder="비밀번호"
                variant="standard"
                type="password"
                onChange={handleInputChange}
            />
            <SaveId />
            <Button className={clsN(`${style['login-wrapper__login-btn']}`)} aria-label="Button label">
                로그인
            </Button>
            <Box className={clsN(`${style['login-wrapper__btn-wrapper']}`)}>
                <Button className={clsN(`${style['login-wrapper__btn-wrapper__signup-btn']}`)} variant="outlined">
                    회원가입
                </Button>
                <Button className={clsN(`${style['login-wrapper__btn-wrapper__find-btn']}`)} variant="outlined">
                    아이디 / 비밀번호 찾기
                </Button>
            </Box>
        </Box>
    );
};

export default Login;
