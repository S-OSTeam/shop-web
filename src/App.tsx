import React from 'react';
import { RecoilRoot } from 'recoil';
import { styled, ThemeProvider} from '@mui/material';
import { theme } from './styles/styles';
import { AppRouter } from './routes/AppRouter';
import './App.css';
import './styles/scss/Default.scss';


const Responsive = styled('div')(({theme})=>({
    [theme.breakpoints.up('mobile')]:{

    },
    [theme.breakpoints.up('tablet')]:{

    },
    [theme.breakpoints.up('desktop')]:{

    },
}));

export const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <RecoilRoot>
                <Responsive>
                    <AppRouter />
                </Responsive>
            </RecoilRoot>
        </ThemeProvider>
    );
};
