import React from 'react';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import { Box } from '@mui/material';
import Authentication from '@components/organisms/signup/authentication/Authentication';
import Text from '@components/atoms/text/Text';
import Form from '@components/organisms/signup/form/Form';
import Agreements from '@components/organisms/signup/agreements/Agreements';
import Gender from '@components/organisms/signup/gender/Gender';
import Button from '@components/atoms/button/Button';
import clsN from 'classnames';
import style from './style/style.module.scss';

const SignUpForm = () => {
    const isInMobile = useDomSizeCheckHook(768);
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
                    <Form />
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
                    <Form />
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
