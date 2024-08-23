import React, { useState, useCallback } from 'react';
import { Box, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Text from '@components/atoms/text/Text';
import { Input } from '@components/atoms/input/Input';
import SaveId from '@components/organisms/login/saveId/SaveId';
import Button from '@components/atoms/button/Button';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';

import useGraphQL from '@hooks/useGraphQL';
import { setCookie } from '@util/CookieUtil';
import { Login } from '@api/apollo/gql/mutations/LoginMutation.gql';
import clsN from 'classnames';
import style from './style/style.module.scss';

const LoginOrganisms = () => {
    const isInMobile = useDomSizeCheckHook(768);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        pwd: '',
        userId: '',
        sns: 'NORMAL',
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, refetch: login } = useGraphQL({
        query: Login,
        type: 'mutation',
        request: { ...formData },
        option: { 'Authorization-mac': '2C-6D-C1-87-E0-B5' },
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            userId: event.target.value.toString(),
        });
    };

    const handleInputPwdChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            pwd: event.target.value.toString(),
        });
    };

    const handleSignUp = () => {
        navigate('/signup');
    };

    const handleFormSubmit = useCallback(
        async (event: React.FormEvent) => {
            event.preventDefault();

            const response = await login();

            const { accessToken, refreshToken } = response.data.login;
            setCookie('accessToken', accessToken, { path: '/' });
            setCookie('refreshToken', refreshToken, { path: '/' });
        },
        [login, navigate],
    );

    return (
        <div>
            {isInMobile ? (
                <Box className={clsN(`${style['mobile-login-wrapper']}`)}>
                    <Box className={clsN(`${style['mobile-login-wrapper__title']}`)}>
                        <Divider variant="middle" textAlign="center">
                            또는
                        </Divider>
                    </Box>
                    <Box className={clsN(`${style['mobile-login-wrapper__input-wrapper']}`)}>
                        <Input
                            inputVal={formData.userId}
                            className={clsN(`${style['mobile-login-wrapper__input-wrapper__input-id']}`)}
                            placeholder="아이디"
                            variant="standard"
                            onChange={handleInputChange}
                        />
                        <Input
                            inputVal={formData.pwd}
                            className={clsN(`${style['mobile-login-wrapper__input-wrapper__input-pwd']}`)}
                            placeholder="비밀번호"
                            variant="standard"
                            type="password"
                            onChange={handleInputPwdChange}
                        />
                    </Box>
                    <Box className={clsN(`${style['mobile-login-wrapper__btn-wrapper']}`)}>
                        <Button
                            className={clsN(`${style['mobile-login-wrapper__btn-wrapper__signup-btn']}`)}
                            variant="outlined"
                            onClick={handleSignUp}
                        >
                            회원가입
                        </Button>
                        <Button
                            className={clsN(`${style['mobile-login-wrapper__btn-wrapper__login-btn']}`)}
                            variant="outlined"
                            onClick={handleFormSubmit}
                        >
                            로그인
                        </Button>
                    </Box>
                </Box>
            ) : (
                <Box className={clsN(`${style['login-wrapper']}`)}>
                    <Text
                        text="로그인"
                        variant="subtitle1"
                        className={clsN(`${style['login-wrapper__title']}`)}
                        align="center"
                    />
                    <Input
                        inputVal={formData.userId}
                        className={clsN(`${style['login-wrapper__input-id']}`)}
                        placeholder="아이디"
                        variant="standard"
                        onChange={handleInputChange}
                    />
                    <Input
                        inputVal={formData.pwd}
                        className={clsN(`${style['login-wrapper__input-pwd']}`)}
                        placeholder="비밀번호"
                        variant="standard"
                        type="password"
                        onChange={handleInputPwdChange}
                    />
                    <SaveId className={clsN(`${style['login-wrapper__save-id']}`)} />
                    <Button
                        className={clsN(`${style['login-wrapper__login-btn']}`)}
                        aria-label="Button label"
                        onClick={handleFormSubmit}
                    >
                        로그인
                    </Button>
                    <Box className={clsN(`${style['login-wrapper__btn-wrapper']}`)}>
                        <Button
                            className={clsN(`${style['login-wrapper__btn-wrapper__signup-btn']}`)}
                            variant="outlined"
                            onClick={handleSignUp}
                        >
                            회원가입
                        </Button>
                        <Button className={clsN(`${style['login-wrapper__btn-wrapper__find-btn']}`)} variant="outlined">
                            아이디 / 비밀번호 찾기
                        </Button>
                    </Box>
                </Box>
            )}
        </div>
    );
};

export default LoginOrganisms;
