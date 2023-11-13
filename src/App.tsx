import React from 'react';
import { RecoilRoot } from 'recoil';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './themes';
import { AppRouter } from './routes/AppRouter';
import './App.css';
import './styles/scss/Default.scss';

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RecoilRoot>
                <AppRouter />
            </RecoilRoot>
        </ThemeProvider>
    );
};
