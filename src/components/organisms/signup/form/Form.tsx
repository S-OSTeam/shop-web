// eslint-disable

import React from 'react';
import { Box, Divider, TextField } from '@mui/material';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import clsN from 'classnames';
import Button from '@components/atoms/button/Button';
import style from './style/style.module.scss';

const Form = () => {
    const isInMobile = useDomSizeCheckHook(768);

    const textFieldsData = [
        { label: '아이디', className: style['form-wrapper__id'], id: 'outlined-required', placeholder: '아이디' },
        {
            label: '비밀번호',
            className: style['form-wrapper__pwd'],
            id: 'outlined-password-input',
            type: 'password',
            placeholder: '*******',
        },
        {
            label: '이메일',
            className: style['form-wrapper__email'],
            id: 'outlined-email-input',
            type: 'email',
            placeholder: 'userid@email.com',
        },
    ];

    return (
        <div>
            {isInMobile ? (
                <Box className={clsN(`${style['form-wrapper']}`)}>
                    {textFieldsData.map((textField) => (
                        <TextField
                            key={textField.id}
                            label={textField.label}
                            className={clsN(textField.className)}
                            id={textField.id}
                            type={textField.type}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder={textField.placeholder}
                        />
                    ))}

                    <Button className={clsN(`${style['form-wrapper__email-authentication-btn']}`)}>이메일 인증</Button>
                    <Divider
                        className={clsN(`${style['form-wrapper__divider']}`)}
                        orientation="horizontal"
                        variant="middle"
                    />

                    <Box className={clsN(`${style['authentication-wrapper']}`)}>
                        <TextField
                            label="인증번호"
                            className={clsN(`${style['authentication-wrapper__name']}`)}
                            id="outlined-required"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="0000"
                            inputProps={{
                                style: { height: '10px' }, // input 요소에만 적용
                            }}
                        />
                        <Button className={clsN(`${style['authentication-wrapper__btn']}`)}>인증</Button>
                    </Box>
                    <Divider
                        className={clsN(`${style['form-wrapper__divider']}`)}
                        orientation="horizontal"
                        variant="middle"
                    />
                </Box>
            ) : (
                <Box>helloPC</Box>
            )}
        </div>
    );
};

export default Form;
