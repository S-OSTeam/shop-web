import React from 'react';
import { RecoilRoot } from 'recoil';
import { styled, ThemeProvider} from '@mui/material';
import { green, purple, red } from '@mui/material/colors';
import { theme } from './styles/styles';
import { AppRouter } from './routes/AppRouter';
import './App.css';
import './styles/scss/Default.scss';

const Responsive = styled('div')(({theme})=>({
    [theme.breakpoints.up('mobile')]:{
        color: green[500],
    },
    [theme.breakpoints.up('tablet')]:{
        color: purple[500],
    },
    [theme.breakpoints.up('desktop')]:{
        color: red[500],
    },
}));

export const App = () => {
    // const [w, setW] = React.useState(window.innerWidth);
    //
    // React.useEffect(()=>{
    //     const handleResize = () => {
    //         setW(window.innerWidth);
    //     };
    //     window.addEventListener('resize', handleResize);
    //     return()=>{
    //         window.removeEventListener('resize',handleResize);
    //     };
    // },[]);

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
