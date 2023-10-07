import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
// import { ThemeProvider } from '@mui/material';
import { AppRouter } from './routes/AppRouter';
// import { theme } from './pages/FAQ/FaqPage';
const App = () => {

    return (
        // <ThemeProvider theme={theme}>
            <RecoilRoot>
                <AppRouter />
            </RecoilRoot>
        // </ThemeProvider>
    );
};

export default App;
