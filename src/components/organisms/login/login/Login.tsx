import React, { useState } from 'react';
import { Box, Divider } from '@mui/material';
import Text from '@components/atoms/text/Text';
import { Input } from '@components/atoms/input/Input';
import SaveId from '@components/organisms/login/saveId/SaveId';
import Button from '@components/atoms/button/Button';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import clsN from 'classnames';
import style from './style/style.module.scss';

interface LoginOrganismsProps {
    handleFormSubmit: (item: { pwd: string; userId: string; sns: string }) => void;
    handleSignUp: () => void;
}

const LoginOrganisms = ({ handleFormSubmit, handleSignUp }: LoginOrganismsProps) => {
    const isInMobile = useDomSizeCheckHook(768);

    const [formData, setFormData] = useState({
        pwd: '',
        userId: '',
        sns: 'NORMAL',
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
                            onClick={() => handleFormSubmit && handleFormSubmit(formData)}
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
                        onClick={() => handleFormSubmit && handleFormSubmit(formData)}
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
