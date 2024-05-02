/* eslint-disable*/
import React, { useState, useEffect } from 'react';
// import { useRecoilState } from 'recoil';
import { Box, Divider, TextField } from '@mui/material';
import axios from 'axios';
// import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import clsN from 'classnames';

import Button from '@components/atoms/button/Button';
import style from './style/style.module.scss';

const Form = () => {
    // const isInMobile = useDomSizeCheckHook(768);

    const BaseUrl = 'https://deamhome.synology.me';
    const [timeLeft, setTimeLeft] = useState(150);
    const [formData, setFormData] = useState({
        id: '',
        pwd: '',
        email: '',
    });
    const [authData, setAuthData] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [timeLeft]);
    const renderTimer = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleEmailSend = async () => {
        axios
            .post(`${BaseUrl}/auth/mail`, { email: formData.email })
            .then((response) => {
                console.log('Email Send Response:', response.data);
            })
            .catch((error) => {
                console.error('Email Send Error:', error);
            });
    };
    const handleAuthConfirm = () => {
        axios
            .post(`${BaseUrl}/auth/code`, { authCode: authData, email: formData.email })
            .then((response) => {
                if (response.status === 200) {
                    alert('이메일 인증이 완료되었습니다.');
                } else {
                    console.log('Auth Confirmation Pending');
                }
            })
            .catch((error) => {
                console.error('Auth Send Error:', error);
            });
    };
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
                    onChange={(e) => setFormData({ ...formData, [textField.id]: e.target.value })}
                />
            ))}

            <Button className={clsN(`${style['form-wrapper__email-authentication-btn']}`)} onClick={handleEmailSend}>
                이메일 인증
            </Button>
            <Divider className={clsN(`${style['form-wrapper__divider']}`)} orientation="horizontal" variant="middle" />
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
                        style: { height: '1rem' }, // input 요소에만 적용
                    }}
                    onChange={(e) => setAuthData(e.target.value)}
                />
                <Box className={clsN(`${style['authentication-wrapper__timer']}`)}> {renderTimer()}</Box>
                <Button className={clsN(`${style['authentication-wrapper__btn']}`)} onClick={handleAuthConfirm}>
                    인증
                </Button>
            </Box>
            <Divider className={clsN(`${style['form-wrapper__divider']}`)} orientation="horizontal" variant="middle" />
        </Box>
    );
};

export default Form;
