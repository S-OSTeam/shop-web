import React, { useState } from 'react';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import { Box } from '@mui/material';
import Authentication from '@components/organisms/signup/authentication/Authentication';
import Text from '@components/atoms/text/Text';
import Form from '@components/organisms/signup/form/Form';
import Agreements from '@components/organisms/signup/agreements/Agreements';
import Gender from '@components/organisms/signup/gender/Gender';
import Button from '@components/atoms/button/Button';
import clsN from 'classnames';
import { FormDataInterface } from '@interface/FormDataInterface';
import style from './style/style.module.scss';

const SignUpForm = () => {
    const isInMobile = useDomSizeCheckHook(768);
    const [signUpData, setSignUpData] = useState<FormDataInterface>();
    const handleFormDataOnclick = (formData: FormDataInterface) => {
        console.log(formData);
        setSignUpData({
            userId: formData.userId,
            pwd: formData.pwd,
            confirmPwd: formData.confirmPwd,
            sex: false,
            birthday: new Date(),
            zipcode: '',
            address1: '',
            address2: '',
            address3: '',
            address4: '',
            email: formData.email,
            phone: '',
            receiveMail: true,
            snsId: formData.email,
            sns: 'NORMAL',
            userName: '',
        });
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
                    <Authentication />
                    <Gender />
                    <Agreements />
                    <Box className={clsN(`${style['template-wrapper']}`)}>
                        <Button className={clsN(`${style['template-wrapper__btn']}`)}>회원가입</Button>
                    </Box>
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
                    <Authentication />
                    <Gender />
                    <Agreements />
                    <Box className={clsN(`${style['template-wrapper']}`)}>
                        <Button className={clsN(`${style['template-wrapper__btn']}`)}>회원가입</Button>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default SignUpForm;
