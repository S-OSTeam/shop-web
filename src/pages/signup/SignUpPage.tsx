import React from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { getCookie } from '@util/CookieUtil';
import SignUpTemplate from '@templates/signup/SignUpTemplate';
import { useSignUp } from '@hooks/signup/useSignUp';

const SignUpPage = () => {
    const location = useLocation();
    const snsValue = location.state?.sns || 'NORMAL';
    const snsToken = snsValue === 'NAVER' || snsValue === 'KAKAO' ? getCookie('snsToken') : '';
    
    const {
        authModalOpen,
        errorModalOpen,
        isButtonEnabled,
        handleAccountInfo,
        handleUserInfo,
        handleAgreementChange,
        signUpHandler,
        closeAuthModal,
        closeErrorModal
    } = useSignUp(snsToken);

    return (
        <Box component="div">
            <SignUpTemplate 
                authModalOpen={authModalOpen}
                errorModalOpen={errorModalOpen}
                isButtonEnabled={isButtonEnabled}
                onAccountInfoSubmit={handleAccountInfo}
                onUserInfoSubmit={handleUserInfo}
                onAgreementChange={handleAgreementChange}
                onSignUp={signUpHandler}
                onCloseAuthModal={closeAuthModal}
                onCloseErrorModal={closeErrorModal}
            />
        </Box>
    );
};

export default SignUpPage;
