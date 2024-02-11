import React from 'react';
import Login from '@components/organisms/login/login/Login';
import SocialLogin from '@components/organisms/login/social/SocialLogin';

const LoginForm = () => {
    return (
        <>
            <Login />
            <SocialLogin />
        </>
    );
};

export default LoginForm;
