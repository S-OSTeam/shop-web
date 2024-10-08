/* eslint-disable*/
import React, { useState, useEffect } from 'react';
import Modal from '@components/molecules/modal/Modal';
import { Box, Divider, TextField } from '@mui/material';
import clsN from 'classnames';
import Button from '@components/atoms/button/Button';
import style from './style/style.module.scss';
import useGraphQL from '@hooks/useGraphQL';
import { SEND_VERIFY_CODE_REQUEST } from '@api/apollo/gql/mutations/LoginMutation.gql';
import { FormDataInterface } from '@interface/FormDataInterface';

interface FormProps {
    formInfo: (formData: FormDataInterface) => void;
}

const Form = ({ formInfo }: FormProps) => {
    const [formData, setFormData] = useState<FormDataInterface>({
        userId: '',
        pwd: '',
        confirmPwd: '',
        sex: false,
        birthday: new Date(),
        zipcode: '',
        address1: '',
        address2: '',
        address3: '',
        address4: '',
        email: '',
        phone: '',
        receiveMail: true,
        snsId: '',
        sns: 'NORMAL',
        userName: '',
    });

    const [timeLeft, setTimeLeft] = useState(150);

    const [authData, setAuthData] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [emailModalOpen, setEmailModalOpen] = useState(false);
    const [authModalOpen, setAuthModalOpen] = useState(false);

    const { data: sendMail, refetch: sendMailRefetch } = useGraphQL({
        query: SEND_VERIFY_CODE_REQUEST,
        type: 'mutation',
        request: {
            email: formData.email,
            verifyType: 'SIGNUP',
        },
        option: {
            'Authorization-mac': '2C-6D-C1-87-E0-B5',
        },
    });

    const { data: sendCheck, refetch: sendCheckRefetch } = useGraphQL({
        query: SEND_VERIFY_CODE_REQUEST,
        type: 'mutation',
        request: {
            email: formData.email,
            verifyType: 'SIGNUP',
        },
        option: {
            'Authorization-mac': '2C-6D-C1-87-E0-B5',
        },
    });

    useEffect(() => {
        let timer: number;
        if (isAuthenticated && timeLeft > 0) {
            timer = window.setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [timeLeft, isAuthenticated]);

    const renderTimer = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleEmailSend = async () => {
        setEmailModalOpen(true); // 이메일 모달을 위한 상태 사용
        if (formData.email !== '') {
            sendMailRefetch().then();
        }
    };
    const handleAuthConfirm = () => {
        sendCheckRefetch().then(() => {
            setAuthModalOpen(true);
            formInfo(formData);
        });
        // console.log(sendCheck);
    };
    const textFieldsData = [
        {
            label: '아이디',
            className: style['form-wrapper__id'],
            id: 'outlined-required',
            placeholder: '아이디',
            inputData: 'userId',
        },
        {
            label: '비밀번호',
            className: style['form-wrapper__pwd'],
            id: 'outlined-password-input',
            type: 'password',
            placeholder: '*******',
            inputData: 'pwd',
        },
        {
            label: '비밀번호 확인',
            className: style['form-wrapper__pwd-confirm'],
            id: 'outlined-password-input',
            type: 'password',
            placeholder: '*******',
            inputData: 'confirmPwd',
        },
        {
            label: '이메일',
            className: style['form-wrapper__email'],
            id: 'outlined-email-input',
            type: 'email',
            placeholder: 'userid@email.com',
            inputData: 'email',
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
                    onChange={(e) => {
                        setFormData((prevFormData) => ({
                            ...prevFormData,
                            [textField.inputData]: e.target.value,
                        }));
                    }}
                />
            ))}

            <Button className={clsN(`${style['form-wrapper__email-authentication-btn']}`)} onClick={handleEmailSend}>
                이메일 인증
            </Button>

            <Modal open={emailModalOpen} onClose={() => setEmailModalOpen(false)}>
                <Box className={clsN(`${style['form-wrapper__modal']}`)}>
                    <h2>이메일 전송 완료</h2>
                    <p>인증 이메일이 발송되었습니다. 받은 이메일을 확인하세요.</p>
                    <Button onClick={() => setEmailModalOpen(false)}>닫기</Button>
                </Box>
            </Modal>

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
                        style: { height: '1rem' },
                    }}
                    onChange={(e) => setAuthData(e.target.value)}
                />
                {isAuthenticated && (
                    <Box className={clsN(`${style['authentication-wrapper__timer']}`)}> {renderTimer()}</Box>
                )}
                <Button className={clsN(`${style['authentication-wrapper__btn']}`)} onClick={handleAuthConfirm}>
                    인증
                </Button>

                <Modal open={authModalOpen} onClose={() => setAuthModalOpen(false)}>
                    <Box className={clsN(`${style['form-wrapper__modal']}`)}>
                        <h2>인증이 완료되었습니다!</h2>
                        <Button onClick={() => setAuthModalOpen(false)}>닫기</Button>
                    </Box>
                </Modal>
            </Box>
            <Divider className={clsN(`${style['form-wrapper__divider']}`)} orientation="horizontal" variant="middle" />
        </Box>
    );
};

export default Form;
