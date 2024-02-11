import React, { useState } from 'react';
import Text from '@components/atoms/text/Text';
import Input from '@components/atoms/input/Input';
import Button from '@components/atoms/button/Button';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import clsN from 'classnames';
import style from './style/style.module.scss';

const Login = () => {
    const isInMobile = useDomSizeCheckHook(768);

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

    return (
        <div>
            {isInMobile ? (
                <Box className={clsN(`${style['mobile-login-wrapper']}`)}>
                    <Box className={clsN(`${style['mobile-login-wrapper__title']}`)}>
                        <Divider variant="middle" textAlign="center">
                            또는
                        </Divider>
                    </Box>
                    <Box className={clsN(`${style['mobile-login-wrapper__btn-wrapper']}`)}>
                        <Button
                            className={clsN(`${style['mobile-login-wrapper__btn-wrapper__signup-btn']}`)}
                            variant="outlined"
                        >
                            회원가입
                        </Button>
                        <Button
                            className={clsN(`${style['mobile-login-wrapper__btn-wrapper__login-btn']}`)}
                            variant="outlined"
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
                        onChange={handleInputChange}
                    />
                    <SaveId className={clsN(`${style['login-wrapper__save-id']}`)} />
                    <Button className={clsN(`${style['login-wrapper__login-btn']}`)} aria-label="Button label">
                        로그인
                    </Button>
                    <Box className={clsN(`${style['login-wrapper__btn-wrapper']}`)}>
                        <Button
                            className={clsN(`${style['login-wrapper__btn-wrapper__signup-btn']}`)}
                            variant="outlined"
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

export default Login;
