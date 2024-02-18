import React from 'react';
import MobileLogin from '@components/organisms/login/login/MobileLogin';
import MobileSocialLogin from '@components/organisms/login/social/MobileSocialLogin';

const MobileLoginForm = () => {
    return (
        <>
            <MobileSocialLogin />
            <MobileLogin />
        </>
    );
};

export default MobileLoginForm;
