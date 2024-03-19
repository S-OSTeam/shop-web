import React from 'react';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import { Box } from '@mui/material';
import Authentication from '@components/organisms/signup/authentication/Authentication';
import Text from '@components/atoms/text/Text';
import Form from '@components/organisms/signup/form/Form';
import Agreements from '@components/organisms/signup/agreements/Agreements';
import Gender from '@components/organisms/signup/gender/Gender';

const SignUpForm = () => {
    const isInMobile = useDomSizeCheckHook(768);
    return (
        <Box>
            {isInMobile ? (
                <Box>
                    <Text text="회원가입 " variant="subtitle1" align="center" />
                    <Form />
                    <Authentication />
                    <Gender />
                    <Agreements />
                </Box>
            ) : (
                <Box>pc회원가입</Box>
            )}
        </Box>
    );
};

export default SignUpForm;
