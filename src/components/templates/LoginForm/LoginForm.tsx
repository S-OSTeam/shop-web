import React from 'react';
import LoginOrganisms from '@components/organisms/login/login/Login';
import SocialLogin from '@components/organisms/login/social/SocialLogin';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import { Box } from '@mui/material';

const LoginForm = () => {
    const isInMobile = useDomSizeCheckHook(768);
    return (
        <Box>
            {isInMobile ? (
                <Box>
                    <SocialLogin />
                    <LoginOrganisms />
                </Box>
            ) : (
                <Box>
                    <LoginOrganisms />
                    <SocialLogin />
                </Box>
            )}
        </Box>
    );
};

export default LoginForm;
