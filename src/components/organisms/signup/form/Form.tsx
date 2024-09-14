/* eslint-disable*/
import React, { useState, useEffect, useCallback } from 'react';
import Modal from '@components/molecules/modal/Modal';
import { Box, Divider, TextField, FormHelperText } from '@mui/material';
import clsN from 'classnames';
import Button from '@components/atoms/button/Button';
import style from './style/style.module.scss';
import useGraphQL from '@hooks/useGraphQL';
import { CHECK_VERIFY_CODE_BY, SEND_VERIFY_CODE_REQUEST } from '@api/apollo/gql/mutations/LoginMutation.gql';
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
        sns: 'NAVER',
        userName: '',
    });

    const [timeLeft, setTimeLeft] = useState(150);
    const [authData, setAuthData] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [emailModalOpen, setEmailModalOpen] = useState(false);
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [authErrorModalOpen, setAuthErrorModalOpen] = useState(false); // 인증 오류 모달 상태 추가
    const [emptyCodeModalOpen, setEmptyCodeModalOpen] = useState(false); // 인증번호가 비어있을 때 사용할 Modal 상태 추가
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
        query: CHECK_VERIFY_CODE_BY,
        type: 'mutation',
        request: {
            email: formData.email,
            verifyCode: formData.zipcode,
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
        const regex = /^[a-z]+[a-z0-9]{5,20}$/;
        if (!regex.test(userId)) {
            setErrors((prev) => ({ ...prev, userId: '아이디는 5-20자의 영문, 숫자가 가능합니다.' }));
            setValidity((prev) => ({ ...prev, userId: false }));
            return false;
        }
        setErrors((prev) => ({ ...prev, userId: '' }));
        setValidity((prev) => ({ ...prev, userId: true }));
        return true;
    };

    const validatePassword = (pwd: string) => {
        const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\()\-_+=]).{8,20}$/;
        if (!regex.test(pwd)) {
            setErrors((prev) => ({
                ...prev,
                pwd: '비밀번호는 8이상 20이하이며, 영문자와 숫자, 특수문자를 포함해야 합니다.',
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
        const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,}$/;

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
        if (!authData) {
            setEmptyCodeModalOpen(true); // 인증번호가 비어있을 때 모달을 표시
            return;
        }

        if (
            validateUserId(formData.userId) &&
            validatePassword(formData.pwd) &&
            validateConfirmPwd(formData.confirmPwd) &&
            validateEmail(formData.email) &&
            authData
        ) {
            sendCheckRefetch()
                .then(() => {
                    setAuthModalOpen(true);
                    formInfo(formData);
                })
                .catch(() => {
                    setAuthErrorModalOpen(true);
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
            maxLength: 20,
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
            maxLength: 20,
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
            maxLength: 20,
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
            maxLength: 30,
        },
    ];

    return (
        <Box className={clsN(`${style['form-wrapper']}`)}>
            {textFieldsData.map((textField) => (
                <Box className={clsN(`${style['form-wrapper__outer']}`)} key={textField.id}>
                    <TextField
                        label={textField.label}
                        id={textField.id}
                        className={clsN(textField.className)}
                        type={textField.type}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder={textField.placeholder}
                        error={!!textField.error && !textField.valid}
                        inputProps={{
                            maxLength: textField.maxLength,
                        }}
                        onChange={(e) => {
                            if (e.target.value.length <= textField.maxLength) {
                                setFormData((prevFormData) => ({
                                    ...prevFormData,
                                    [textField.inputData]: e.target.value,
                                }));
                                textField.validate(e.target.value);
                            }
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
                    <p>제출양식을 확인하고</p>
                    <p>다시 입력해주세요</p>
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
                    placeholder="000000"
                    value={formData.zipcode}
                    inputProps={{
                        style: { height: '1rem' },
                        maxLength: 6,
                    }}
                    onChange={(e) => {
                        const newZipcode = e.target.value;
                        setFormData((prevFormData) => ({
                            ...prevFormData,
                            zipcode: newZipcode,
                        }));
                        setAuthData(newZipcode);
                    }}
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

                <Modal open={authErrorModalOpen} onClose={() => setAuthErrorModalOpen(false)}>
                    <Box className={clsN(`${style['form-wrapper__modal']}`)}>
                        <h2>유효하지 않은 인증 코드입니다.</h2>
                        <Button onClick={() => setAuthErrorModalOpen(false)}>닫기</Button>
                    </Box>
                </Modal>

                {/* 인증번호 비어있을 때 표시할 Modal */}
                <Modal open={emptyCodeModalOpen} onClose={() => setEmptyCodeModalOpen(false)}>
                    <Box className={clsN(`${style['form-wrapper__modal']}`)}>
                        <h2>인증번호를 입력해주세요.</h2>
                        <Button onClick={() => setEmptyCodeModalOpen(false)}>닫기</Button>
                    </Box>
                </Modal>
            </Box>
            <Divider className={clsN(`${style['form-wrapper__divider']}`)} orientation="horizontal" variant="middle" />
        </Box>
    );
};

export default Form;
