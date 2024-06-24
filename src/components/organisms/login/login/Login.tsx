import React, { useState } from 'react';
import { Box, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Text from '@components/atoms/text/Text';
import Input from '@components/atoms/input/Input';
import SaveId from '@components/organisms/login/saveId/SaveId';
import Button from '@components/atoms/button/Button';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import { LoginFormDataInterface } from '@interface/LoginFormDataInterface';
import useGraphQL from '@hooks/useGraphQL';
import { setCookie } from '@util/CookieUtil';
import { Login } from '@api/apollo/gql/mutations/LoginMutation.gql';
import clsN from 'classnames';
import style from './style/style.module.scss';

const LoginOrganisms = () => {
    const isInMobile = useDomSizeCheckHook(768);
    const navigate = useNavigate();

    const [formData, setFormData] = useState<LoginFormDataInterface>({
        pwd: '',
        userId: '',
        email: '',
        snsId: '',
        sns: '',
    });

    const { data, gql: login } = useGraphQL({
        query: Login,
        type: 'mutation',
        request: {
            ...formData,
        },
        option: {
            context: {
                headers: {
                    'Authorization-mac': '2C-6D-C1-87-E0-B5',
                },
            },
        },
    });

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setFormData({
            ...formData,
            userId: event.target.value.toString(),
        });
    };

    const handleInputPwdChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setFormData({
            ...formData,
            pwd: event.target.value.toString(),
        });
    };

    const handleSignUp = () => {
        navigate('/signup');
    };

    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await login().then();
            console.log('Login success :', response.data);

            const { accessToken, refreshToken } = response.data.login;
            setCookie('accessToken', accessToken, { path: '/' });
            setCookie('refreshToken', refreshToken, { path: '/' });
            console.log(data);
        } catch (error) {
            console.error('login error:', error);
        }
    };

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
                            className={clsN(`${style['mobile-login-wrapper__input-wrapper__input-id']}`)}
                            placeholder="아이디"
                            variant="standard"
                            onChange={handleInputChange}
                        />
                        <Input
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
