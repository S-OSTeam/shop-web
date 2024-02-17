import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import LoginForm from '@components/templates/LoginForm/LoginForm';
import MobileLoginPage from './MobileLoginPage';
// import LinearProgress from '@atoms/progress/LinesrProgress/LinearProgress';

const LoginPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return <Box component="div">{isMobile ? <MobileLoginPage /> : <LoginForm />}</Box>;
};

export default LoginPage;
