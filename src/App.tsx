import React from 'react';
import { RecoilRoot } from 'recoil';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './themes';
import { AppRouter } from './routes/AppRouter';
// import { ThemeProvider } from '@mui/material';
import './App.css';

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <RecoilRoot>
                <AppRouter />
            </RecoilRoot>
        </ThemeProvider>
    );
};
