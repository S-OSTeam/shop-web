/* eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { signUpState } from '@recoil/atoms/signup/signupAtom';
import { signupValidationState } from '@recoil/atoms/signup/signupValidationAtom';
import { useSignUpMutation } from '@hooks/signup/useSignUpMutation';
import Modal from '@molecules/modal/Modal';
import { FormDataInterface } from '@interface/signup/FormDataInterface';
import Button from '@atoms/button/Button';
import { Box, Divider, TextField, InputAdornment } from '@mui/material';
import clsN from 'classnames';
import style from './style/style.module.scss';

interface FormProps {
    formInfo: (formData: FormDataInterface) => void;
}

const AccountInfoForm = ({ formInfo }: FormProps) => {
    const [signUpData, setSignUpData] = useRecoilState(signUpState);
    const { checkDuplicateUser, sendEmailVerification, checkEmailVerification } = useSignUpMutation();

    const {
        register,
        watch,
        setValue,
        formState: { errors, isValid },
    } = useForm({
        mode: 'onChange',
        defaultValues: signUpData,
    });
    const [modalState, setModalState] = useState({
        emailSent: false,
        emailFailed: false,
        authSuccess: false,
        authFailed: false,
        duplicateCheckSuccess: false,
        duplicateCheckFailed: false,
        emptyZipcode: false,
    });
    const watchPassword = watch('pwd');
    const watchUserId = watch('userId');
    const watchEmail = watch('email');
    const watchZipcode = watch('zipcode');
    const [timeLeft, setTimeLeft] = useState(0);
    const [signUpValidationState, setSignUpValidationState] = useRecoilState(signupValidationState);

    useEffect(() => {
        setSignUpValidationState((prev) => ({
            ...prev,
            isAccountValid: isValid,
        }));

        console.log(signUpValidationState);
    }, [isValid, setSignUpValidationState]);

    useEffect(() => {
        let timer: number;
        if (timeLeft > 0) {
            timer = window.setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        }
        return () => clearTimeout(timer);
    }, [timeLeft]);

    const handleCheckEmail = async (data: any) => {
        try {
            await checkEmailVerification();
            setTimeLeft(0);
            setModalState({ ...modalState, authSuccess: true });
            formInfo(data);
        } catch (error) {
            setModalState({ ...modalState, authFailed: true });
        }
    };

    const handleEmailSend = async () => {
        try {
            await sendEmailVerification();

            setModalState((prev) => ({ ...prev, emailSent: true }));
            setTimeLeft(180);
        } catch (error) {
            setModalState((prev) => ({ ...prev, emailFailed: true }));
        }
    };

    const handleDuplicateCheck = async () => {
        try {
            const response = await checkDuplicateUser();

            if (response.data.checkDuplicateUser === false) {
                setModalState((prev) => ({ ...prev, duplicateCheckSuccess: true }));
            } else {
                setModalState((prev) => ({ ...prev, duplicateCheckFailed: true }));
            }
        } catch (error) {
            setModalState((prev) => ({ ...prev, duplicateCheckFailed: true }));
        }
    };

    const renderTimer = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleInputChange = (field: keyof typeof signUpData) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSignUpData((prev) => ({ ...prev, [field]: value }));
        setValue(field as keyof FormDataInterface, value, { shouldValidate: true, shouldDirty: true });
    };

    return (
        <Box className={clsN(`${style['form-wrapper']}`)}>
            <Box className={clsN(`${style['form-wrapper__outer']}`)}>
                <Box className={clsN(`${style['form-wrapper__outer__display']}`)}>
                    <TextField
                        label="아이디"
                        className={clsN(`${style['form-wrapper__id']}`)}
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ maxLength: 20 }}
                        {...register('userId', {
                            required: '아이디는 필수 입력 항목입니다.',
                            pattern: {
                                value: /^[a-z]+[a-z0-9]{5,20}$/,
                                message: '아이디는 5-20자의 영문, 숫자가 가능합니다.',
                            },
                            onChange: handleInputChange('userId'),
                        })}
                        error={!!errors.userId}
                        helperText={errors.userId?.message}
                    />
                    <Button
                        onClick={handleDuplicateCheck}
                        className={clsN(`${style['form-wrapper__outer__display__btn']}`)}
                        disabled={!!errors.userId || !watchUserId}
                    >
                        중복체크
                    </Button>
                </Box>

                <TextField
                    className={clsN(`${style['form-wrapper__pwd']}`)}
                    label="비밀번호"
                    type="password"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        maxLength: 20,
                    }}
                    {...register('pwd', {
                        required: '비밀번호는 필수 입력 항목입니다.',
                        pattern: {
                            value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\()\\-_+=]).{8,20}$/,
                            message: '비밀번호는 8-20자이며, 영문자, 숫자, 특수문자를 포함해야 합니다.',
                        },
                        onChange: handleInputChange('pwd'),
                    })}
                    error={!!errors.pwd}
                    helperText={errors.pwd?.message}
                />

                <TextField
                    className={clsN(`${style['form-wrapper__pwd']}`)}
                    label="비밀번호 확인"
                    type="password"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        maxLength: 20,
                    }}
                    {...register('confirmPwd', {
                        required: '비밀번호 확인은 필수 입력 항목입니다.',
                        validate: (value) => value === watchPassword || '비밀번호가 일치하지 않습니다.',
                        onChange: handleInputChange('confirmPwd'),
                    })}
                    error={!!errors.confirmPwd}
                    helperText={errors.confirmPwd?.message}
                />
                <Box className={clsN(`${style['form-wrapper__outer__display']}`)}>
                    <TextField
                        className={clsN(`${style['form-wrapper__email']}`)}
                        label="이메일"
                        type="email"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            maxLength: 50,
                        }}
                        {...register('email', {
                            required: '이메일은 필수 입력 항목입니다.',
                            pattern: {
                                value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,}$/,
                                message: '유효한 이메일 주소를 입력해주세요.',
                            },
                            onChange: handleInputChange('email'),
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                    <Button
                        onClick={handleEmailSend}
                        className={clsN(`${style['form-wrapper__outer__display__btn']}`)}
                        disabled={!!errors.email || !watchEmail}
                    >
                        전송
                    </Button>
                </Box>
                <Divider className={clsN(`${style['form-wrapper__divider']}`)}></Divider>
                <Box className={clsN(`${style['form-wrapper__outer__display']}`)}>
                    <TextField
                        className={clsN(`${style['form-wrapper__id']}`)}
                        label="인증번호"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            maxLength: 6,
                        }}
                        {...register('zipcode', {
                            required: '인증번호를 입력해주세요.',
                            onChange: handleInputChange('zipcode'),
                        })}
                        error={!!errors.zipcode}
                        helperText={errors.zipcode?.message}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    {timeLeft > 0 ? <span>{renderTimer()}</span> : null}
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        onClick={handleCheckEmail}
                        className={clsN(`${style['form-wrapper__outer__display__btn']}`)}
                        disabled={!!errors.zipcode || !watchZipcode}
                    >
                        인증
                    </Button>
                </Box>
                <Divider className={clsN(`${style['form-wrapper__divider']}`)}></Divider>
            </Box>

            <Modal
                open={modalState.emailSent}
                onClose={() => setModalState({ ...modalState, emailSent: false })}
                title="이메일 전송 완료"
            >
                <p>인증 이메일이 발송되었습니다.</p>
            </Modal>

            <Modal
                open={modalState.emailFailed}
                onClose={() => setModalState({ ...modalState, emailFailed: false })}
                title="이메일 전송 실패"
            >
                <p>이메일 전송에 실패했습니다. 다시 시도해주세요.</p>
            </Modal>

            <Modal
                open={modalState.authSuccess}
                onClose={() => setModalState({ ...modalState, authSuccess: false })}
                title="인증 완료"
            >
                <p>이메일 인증이 성공적으로 완료되었습니다!</p>
            </Modal>

            <Modal
                open={modalState.authFailed}
                onClose={() => setModalState({ ...modalState, authFailed: false })}
                title="인증 실패"
            >
                <p>이메일 인증에 실패했습니다. 다시 시도해주세요.</p>
            </Modal>
            <Modal
                open={modalState.duplicateCheckSuccess}
                onClose={() => setModalState((prev) => ({ ...prev, duplicateCheckSuccess: false }))}
                title="아이디 사용 가능"
            >
                <p>해당 아이디를 사용할 수 있습니다.</p>
            </Modal>
        </Box>
    );
};

export default AccountInfoForm;
