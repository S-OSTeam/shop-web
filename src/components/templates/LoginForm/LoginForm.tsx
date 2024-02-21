import React from 'react';
import Login from '@components/organisms/login/login/Login';
import SocialLogin from '@components/organisms/login/social/SocialLogin';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';

const LoginForm = () => {
    const isInMobile = useDomSizeCheckHook(768);
    return (
        <div>
            {isInMobile ? (
                <>
                    <SocialLogin />
                    <Login />
                </>
            ) : (
                <>
                    <Login />
                    <SocialLogin />
                </>
            )}
        </div>
    );
};

export default LoginForm;
