import React from 'react';
import MobileLogin from '@components/organisms/login/login/MobileLogin';
import MobileSocialLogin from '@components/organisms/login/social/MobileSocialLogin';

const MobileLoginForm = () => {
    return (
        <>
            {/* logo componet 생성후 추가 예정 */}
            <MobileSocialLogin />
            <MobileLogin />
        </>
    );
};

export default MobileLoginForm;
