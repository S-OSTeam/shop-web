/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import { Box, Divider, FormControl, Radio, RadioGroup, TextField } from '@mui/material';
import Form from '@components/organisms/signup/form/Form';
import clsN from 'classnames';
import { FormDataInterface } from '@interface/FormDataInterface';
import CheckboxWithText from '@molecules/checkbox/checkboxWithText/CheckboxWithText';
import Button from '@atoms/button/Button';
import Text from '@components/atoms/text/Text';
import style from './style/style.module.scss';
import useGraphQL from '@hooks/useGraphQL';
import { SIGN_UP } from '@api/apollo/gql/mutations/LoginMutation.gql';

const SignUpTemplate = () => {
    const isInMobile = useDomSizeCheckHook(768);
    const [name, setName] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [value, setValue] = useState(false);
    const [checkBox, setCheckBox] = useState(false);
    const checkboxTexts = ['선택적 SNS 광고 동의 여부', '기타 고객정보 영리적 사용 등', '기타 등등'];
    const [request, setSignUpData] = useState<FormDataInterface>({
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
        snsid: '',
        sns: 'NORMAL',
        userName: '',
    });

    const { data, refetch } = useGraphQL({
        query: SIGN_UP,
        type: 'mutation',
        request: {
            request,
        },
        option: {
            'Authorization-mac': '2C-6D-C1-87-E0-B5',
        },
    });

    useEffect(() => {
        setSignUpData({
            userId: request.userId,
            pwd: request.pwd,
            confirmPwd: request.confirmPwd,
            sex: value,
            birthday: new Date(birthDay),
            zipcode: '',
            address1: '',
            address2: '',
            address3: '',
            address4: '',
            email: request.email,
            phone: '',
            receiveMail: checkBox,
            snsid: request.email,
            sns: 'NORMAL',
            userName: name,
        });
    }, [value, checkBox]);

    const handleFormDataOnclick = (formData: FormDataInterface) => {
        console.log(formData);

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
            snsid: formData.email,
            sns: 'NORMAL',
            userName: name,
        });
    };

    const onNameHandle = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setName(event.target.value);
    };

    const onBirthHandle = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBirthDay(event.target.value);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '남성') {
            setValue(true);
            console.log(value);
        } else setValue(false);
    };

    const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckBox(e.target.checked);
        console.log(e.target.checked);
    };
    const signUpHandler = () => {
        refetch().then();
    };

    return (
        <Box>
            {isInMobile ? (
                <Box>
                    <Box className={clsN(`${style['mobile-wrapper']}`)}>
                        <Text
                            text="회원가입 "
                            variant="subtitle1"
                            align="center"
                            className={clsN(`${style['mobile-wrapper__title']}`)}
                        />
                        <Form formInfo={handleFormDataOnclick} />
                    </Box>
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
                        />
                        <TextField
                            label="생년월일"
                            className={clsN(`${style['authentication-wrapper__birth']}`)}
                            id="outlined-required"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="1900.00.00"
                            onChange={onBirthHandle}
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
                </Box>
            ) : (
                <Box>
                    <Box className={clsN(`${style['pc-wrapper']}`)}>
                        <Text
                            text="회원가입 "
                            variant="subtitle1"
                            align="center"
                            className={clsN(`${style['mobile-wrapper__title']}`)}
                        />
                        <Form formInfo={handleFormDataOnclick} />
                    </Box>
                    <Box className={clsN(`${style['authentication-wrapper']}`)}>
                        <TextField
                            label="성 함"
                            className={clsN(`${style['authentication-wrapper__name']}`)}
                            id="outlined-required"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="홍 길 동"
                            onChange={() => setName}
                        />
                        <TextField
                            label="생년월일"
                            className={clsN(`${style['authentication-wrapper__birth']}`)}
                            id="outlined-required"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="1900.00.00"
                            onChange={() => setBirthDay}
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
                                <Radio value="여성" aria-label="Female" defaultChecked={false} />
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
                                    value={checkBox}
                                    onChange={handleCheckBox}
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
                </Box>
            )}
        </Box>
    );
};

export default SignUpTemplate;
