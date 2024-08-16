/* eslint-disable*/
import React, { useState, useEffect, useCallback } from 'react';
import Modal from '@components/molecules/modal/Modal';
import { Box, Divider, TextField, FormHelperText } from '@mui/material';
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
    const [errorModalOpen, setErrorModalOpen] = useState(false);

    const [errors, setErrors] = useState({
        userId: '',
        pwd: '',
        confirmPwd: '',
        email: '',
    });

    const [validity, setValidity] = useState({
        userId: false,
        pwd: false,
        confirmPwd: false,
        email: false,
    });

    const { refetch: sendMailRefetch } = useGraphQL({
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

    const { refetch: sendCheckRefetch } = useGraphQL({
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

    const validateUserId = (userId: string) => {
        const regex = /^[a-zA-Z0-9_]{4,20}$/;
        if (!regex.test(userId)) {
            setErrors((prev) => ({ ...prev, userId: '아이디는 4-20자의 영문, 숫자가 가능합니다.' }));
            setValidity((prev) => ({ ...prev, userId: false }));
            return false;
        }
        setErrors((prev) => ({ ...prev, userId: '' }));
        setValidity((prev) => ({ ...prev, userId: true }));
        return true;
    };

    const validatePassword = (pwd: string) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!regex.test(pwd)) {
            setErrors((prev) => ({
                ...prev,
                pwd: '비밀번호는 최소 6자이며, 문자와 숫자, 특수문자를 포함해야 합니다.',
            }));
            setValidity((prev) => ({ ...prev, pwd: false }));
            return false;
        }
        setErrors((prev) => ({ ...prev, pwd: '' }));
        setValidity((prev) => ({ ...prev, pwd: true }));
        return true;
    };

    const validateConfirmPwd = (confirmPwd: string) => {
        if (confirmPwd !== formData.pwd) {
            setErrors((prev) => ({ ...prev, confirmPwd: '비밀번호가 일치하지 않습니다.' }));
            setValidity((prev) => ({ ...prev, confirmPwd: false }));
            return false;
        }
        setErrors((prev) => ({ ...prev, confirmPwd: '' }));
        setValidity((prev) => ({ ...prev, confirmPwd: true }));
        return true;
    };

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 형식 확인
        if (!regex.test(email)) {
            setErrors((prev) => ({ ...prev, email: '유효한 이메일 주소를 입력해주세요.' }));
            setValidity((prev) => ({ ...prev, email: false }));
            return false;
        }
        setErrors((prev) => ({ ...prev, email: '' }));
        setValidity((prev) => ({ ...prev, email: true }));
        return true;
    };

    const handleEmailSend = useCallback(async () => {
        if (validateEmail(formData.email)) {
            setEmailModalOpen(true);
            await sendMailRefetch();
        } else {
            setErrorModalOpen(true);
        }
    }, [formData.email, sendMailRefetch]);

    const handleAuthConfirm = () => {
        if (
            validateUserId(formData.userId) &&
            validatePassword(formData.pwd) &&
            validateConfirmPwd(formData.confirmPwd) &&
            validateEmail(formData.email) &&
            authData
        ) {
            sendCheckRefetch().then(() => {
                setAuthModalOpen(true);
                formInfo(formData);
            });
        } else {
            setErrorModalOpen(true);
        }
    };

    const textFieldsData = [
        {
            label: '아이디',
            className: style['form-wrapper__id'],
            id: 'outlined-required',
            placeholder: '아이디',
            inputData: 'userId',
            validate: validateUserId,
            error: errors.userId,
            valid: validity.userId,
        },
        {
            label: '비밀번호',
            className: style['form-wrapper__pwd'],
            id: 'outlined-password-input',
            type: 'password',
            placeholder: '*******',
            inputData: 'pwd',
            validate: validatePassword,
            error: errors.pwd,
            valid: validity.pwd,
        },
        {
            label: '비밀번호 확인',
            className: style['form-wrapper__pwd-confirm'],
            id: 'outlined-password-input',
            type: 'password',
            placeholder: '*******',
            inputData: 'confirmPwd',
            validate: validateConfirmPwd,
            error: errors.confirmPwd,
            valid: validity.confirmPwd,
        },
        {
            label: '이메일',
            className: style['form-wrapper__email'],
            id: 'outlined-email-input',
            type: 'email',
            placeholder: 'userid@email.com',
            inputData: 'email',
            validate: validateEmail,
            error: errors.email,
            valid: validity.email,
        },
    ];

    return (
        <Box className={clsN(`${style['form-wrapper']}`)}>
            {textFieldsData.map((textField) => (
                <Box className={clsN(`${style['form-wrapper__outer']}`)}>
                    <TextField
                        key={textField.id}
                        label={textField.label}
                        id={textField.id}
                        className={clsN(textField.className)}
                        type={textField.type}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder={textField.placeholder}
                        error={!!textField.error && !textField.valid}
                        onChange={(e) => {
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [textField.inputData]: e.target.value,
                            }));
                            textField.validate(e.target.value);
                        }}
                    />
                    <FormHelperText
                        error={!!textField.error && !textField.valid}
                        style={{ color: textField.valid ? 'green' : 'red' }}
                    >
                        {textField.valid ? '유효한 입력입니다.' : textField.error}
                    </FormHelperText>
                </Box>
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

            <Modal open={errorModalOpen} onClose={() => setErrorModalOpen(false)}>
                <Box className={clsN(`${style['form-wrapper__modal']}`)}>
                    <h2>제출양식을 확인하고 다시 입력해주세요</h2>
                    <Button onClick={() => setErrorModalOpen(false)}>닫기</Button>
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
