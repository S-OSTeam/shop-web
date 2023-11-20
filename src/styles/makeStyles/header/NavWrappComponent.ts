import React from 'react';
import { createTheme, styled } from '@mui/material';
import '../../scss/variables/_variables.scss';
export const customTheme = createTheme({
    // 색상
    palette:{
        primary:{
            main: 'var(--primary-color)',
            contrastText: 'white',
        },
    },
});

const MyThemeComponent = styled('div')(({theme})=>
    theme.unstable_sx({
        color: 'primary.contrastText',
        backgroundColor: 'primary.main',
        width: 'var(--breakpoint-desktop)',
        margin: '0 auto',

    })
)