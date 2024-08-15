import React, { useEffect, useState } from 'react';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import { useNavigate } from 'react-router-dom';
import { Box, Divider, FormControl, Radio, RadioGroup, TextField } from '@mui/material';
import Form from '@components/organisms/signup/form/Form';
import clsN from 'classnames';
import { FormDataInterface } from '@interface/FormDataInterface';
import CheckboxWithText from '@molecules/checkbox/checkboxWithText/CheckboxWithText';
import Button from '@atoms/button/Button';
import Text from '@components/atoms/text/Text';
import Modal from '@molecules/modal/Modal';
import useGraphQL from '@hooks/useGraphQL';
import { SIGN_UP } from '@api/apollo/gql/mutations/LoginMutation.gql';
import style from './style/style.module.scss';

const SignUpTemplate = () => {
    const isInMobile = useDomSizeCheckHook(768);
    const [name, setName] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [value, setValue] = useState(false);
    const [checkBox, setCheckBox] = useState(false);
    const [authModalOpen, setAuthModalOpen] = useState(false);

    const [nameError, setNameError] = useState('');
    const [birthDayError, setBirthDayError] = useState('');

    const navigate = useNavigate();

    const checkboxTexts = ['선택적 SNS 광고 동의 여부', '기타 고객정보 영리적 사용 등', '기타 등등'];
    const [signUpData, setSignUpData] = useState<FormDataInterface>({
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

    const { data, refetch } = useGraphQL({
        query: SIGN_UP,
        type: 'mutation',
        request: {
            ...signUpData,
        },
        option: {
            'Authorization-mac': '2C-6D-C1-87-E0-B5',
        },
    });

    useEffect(() => {
        setSignUpData({
            userId: signUpData.userId,
            pwd: signUpData.pwd,
            confirmPwd: signUpData.confirmPwd,
            sex: value,
            birthday: new Date(birthDay),
            zipcode: '',
            address1: '',
            address2: '',
            address3: '',
            address4: '',
            email: signUpData.email,
            phone: '',
            receiveMail: checkBox,
            snsId: signUpData.email,
            sns: 'NORMAL',
            userName: name,
        });
    }, [value, checkBox]);

    const validateName = (name: string) => {
        if (name.trim() === '') {
            setNameError('이름을 입력해주세요.');
            return false;
        }
        setNameError('');
        return true;
    };

    const validateBirthDay = (birthDay: string) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(birthDay)) {
            setBirthDayError('생년월일을 올바른 형식으로 입력해주세요. (예: 1900-01-01)');
            return false;
        }
        setBirthDayError('');
        return true;
    };

    const handleFormDataOnclick = (formData: FormDataInterface) => {
        console.log(formData);
        console.log(data);
        setSignUpData({
            userId: formData.userId,
            pwd: formData.pwd,
            confirmPwd: formData.confirmPwd,
            sex: value,
            birthday: new Date(),
            zipcode: '',
            address1: '',
            address2: '',
            address3: '',
            address4: '',
            email: formData.email,
            phone: '',
            receiveMail: checkBox,
            snsId: formData.email,
            sns: 'NORMAL',
            userName: name,
        });
    };

    const onNameHandle = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setName(event.target.value);
        validateName(event.target.value);
    };

    const onBirthHandle = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBirthDay(event.target.value);
        validateBirthDay(event.target.value);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '남성') {
            setValue(true);
        } else {
            setValue(false);
        }
    };

    const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckBox(e.target.checked);
    };

    const signUpHandler = () => {
        const isNameValid = validateName(name);
        const isBirthDayValid = validateBirthDay(birthDay);

        if (isNameValid && isBirthDayValid) {
            refetch().then(() => {
                setAuthModalOpen(true);
            });
        } else {
            alert('입력한 정보를 확인해주세요.');
        }
    };

    const handleModalClose = () => {
        setAuthModalOpen(false);
        navigate('/');
    };

    return (
        <Box>
            {isInMobile ? (
                <Box className={clsN(`${style['mobile-wrapper']}`)}>
                    <Text
                        text="회원가입 "
                        variant="subtitle1"
                        align="center"
                        className={clsN(`${style['mobile-wrapper__title']}`)}
                    />
                    <Form formInfo={handleFormDataOnclick} />
                    <Box className={clsN(`${style['authentication-wrapper']}`)}>
                        <TextField
                            label="성 함"
                            className={clsN(`${style['authentication-wrapper__name']}`)}
                            id="outlined-required"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="홍 길 동"
                            onChange={onNameHandle}
                            error={!!nameError}
                            helperText={nameError}
                        />
                        <TextField
                            label="생년월일"
                            className={clsN(`${style['authentication-wrapper__birth']}`)}
                            id="outlined-required"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="1900-00-00"
                            onChange={onBirthHandle}
                            error={!!birthDayError}
                            helperText={birthDayError}
                        />
                    </Box>
                    <Box className={clsN(`${style['gender-wrapper']}`)}>
                        <Divider
                            className={clsN(`${style['gender-wrapper__divider']}`)}
                            variant="middle"
                            textAlign="left"
                        >
                            성별
                        </Divider>
                        <FormControl className={clsN(`${style['gender-wrapper__form-control']}`)}>
                            <RadioGroup
                                onChange={handleChange}
                                className={clsN(`${style['gender-wrapper__radio-group']}`)}
                            >
                                <Radio value="남성" aria-label="Male" />
                                남성
                                <Radio value="여성" aria-label="Female" />
                                여성
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box className={clsN(style['agreements-wrapper'])}>
                        <Divider
                            variant="middle"
                            textAlign="center"
                            className={clsN(style['agreements-wrapper__divider'])}
                        >
                            동의사항
                        </Divider>
                        <Box className={clsN(style['agreements-wrapper__checkbox-wrapper'])}>
                            {checkboxTexts.map((text) => (
                                <CheckboxWithText
                                    onChange={handleCheckBox}
                                    value={checkBox}
                                    key={text}
                                    className={clsN(style['agreements-wrapper__checkbox-wrapper__checkbox'])}
                                    text={text}
                                />
                            ))}
                        </Box>
                    </Box>
                    <Box className={clsN(`${style['template-wrapper']}`)}>
                        <Button className={clsN(`${style['template-wrapper__btn']}`)} onClick={signUpHandler}>
                            회원가입
                        </Button>
                    </Box>
                    <Modal open={authModalOpen} onClose={handleModalClose}>
                        <Box className={clsN(`${style['template-wrapper__modal']}`)}>
                            <h2>회원가입이 성공하였습니다!</h2>
                            <Button onClick={handleModalClose}>닫기</Button>
                        </Box>
                    </Modal>
                </Box>
            ) : (
                <Box className={clsN(`${style['pc-wrapper']}`)}>
                    <Text
                        text="회원가입 "
                        variant="subtitle1"
                        align="center"
                        className={clsN(`${style['mobile-wrapper__title']}`)}
                    />
                    <Form formInfo={handleFormDataOnclick} />
                    <Box className={clsN(`${style['authentication-wrapper']}`)}>
                        <TextField
                            label="성 함"
                            className={clsN(`${style['authentication-wrapper__name']}`)}
                            id="outlined-required"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="홍 길 동"
                            onChange={onNameHandle}
                            error={!!nameError}
                            helperText={nameError}
                        />
                        <TextField
                            label="생년월일"
                            className={clsN(`${style['authentication-wrapper__birth']}`)}
                            id="outlined-required"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="1900-00-00"
                            onChange={onBirthHandle}
                            error={!!birthDayError}
                            helperText={birthDayError}
                        />
                    </Box>
                    <Box className={clsN(`${style['gender-wrapper']}`)}>
                        <Divider
                            className={clsN(`${style['gender-wrapper__divider']}`)}
                            variant="middle"
                            textAlign="left"
                        >
                            성별
                        </Divider>
                        <FormControl className={clsN(`${style['gender-wrapper__form-control']}`)}>
                            <RadioGroup
                                onChange={handleChange}
                                className={clsN(`${style['gender-wrapper__radio-group']}`)}
                            >
                                <Radio value="남성" aria-label="Male" />
                                남성
                                <Radio value="여성" aria-label="Female" />
                                여성
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box className={clsN(style['agreements-wrapper'])}>
                        <Divider
                            variant="middle"
                            textAlign="center"
                            className={clsN(style['agreements-wrapper__divider'])}
                        >
                            동의사항
                        </Divider>
                        <Box className={clsN(style['agreements-wrapper__checkbox-wrapper'])}>
                            {checkboxTexts.map((text) => (
                                <CheckboxWithText
                                    onChange={handleCheckBox}
                                    value={checkBox}
                                    key={text}
                                    className={clsN(style['agreements-wrapper__checkbox-wrapper__checkbox'])}
                                    text={text}
                                />
                            ))}
                        </Box>
                    </Box>
                    <Box className={clsN(`${style['template-wrapper']}`)}>
                        <Button className={clsN(`${style['template-wrapper__btn']}`)} onClick={signUpHandler}>
                            회원가입
                        </Button>
                    </Box>
                    <Modal open={authModalOpen} onClose={handleModalClose}>
                        <Box className={clsN(`${style['template-wrapper__modal']}`)}>
                            <h2>회원가입이 성공하였습니다!</h2>
                            <Button onClick={handleModalClose}>닫기</Button>
                        </Box>
                    </Modal>
                </Box>
            )}
        </Box>
    );
};

export default SignUpTemplate;
