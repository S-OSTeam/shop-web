import React from 'react';
import { Box } from '@mui/material';
import ImageButton from '@components/molecules/button/imageButton/ImageButton';

import clsN from 'classnames';
import style from './style/style.module.scss';

const SocialLogin = () => {
    return (
        <Box className={clsN(`${style['social-login-wrapper']}`)}>
            <ImageButton imgPath="../../../../asset/image/icons/GoogleIcon.svg" alt="" />
        </Box>
    );
};

export default SocialLogin;
