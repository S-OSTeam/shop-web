import React from 'react';
import Login from '@components/organisms/login/login/Login';
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
                    <Login />
                </Box>
            ) : (
                <Box>
                    <Login />
                    <SocialLogin />
                </Box>
            )}
        </Box>
    );
};

export default LoginForm;
