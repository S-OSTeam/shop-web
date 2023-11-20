import { styled } from '@mui/material';
import '../../../scss/variables/_variables.scss';

export const CommonStyles = styled('div')(
    ({ theme }) =>
        `
        commonStyle: {
        '*': {
            listStyleType: 'none',
        },
        '&': {
            height: '50px',
            nav: {
                width: '1200px',
                height: '50px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'orange',
            },
        },
        // nav > a.logo
        '.nav-logo': {
            height: '100%',
            '.context': {
                fontWeight: 600,
            },
        },
        // nav > list-menu 메뉴
        '.list-menu': {
            display: 'flex',
            height: '100%',
        },
        '.list-menu > li': {
            position: 'relative',
            height: '100%',
        },
        '.header-li': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        '.list-menu > li > a': {
            padding: '15px',
            height: '100%',
            boxSizing: 'border-box',
        },
        '.li-context': {
            display: 'block',
            padding: '5px 10px',
        },
        // depth
        '.nav-bar-wrapper': {
            display: 'none',
            position: 'absolute',
            left: 0,
            top: '100%',
            whiteSpace: 'nowrap',
        },
        '.nav-bar-wrapper ul': {
            display: 'block',
            position: 'relative',
            padding: '0 15px',
            width: 'fit-content',
            backgroundColor: '#eeeeee',
        },
        // hover
        '.list-menu > li:hover': {
            '.nav-bar-wrapper': {
                display: 'block',
            },

        },
        '.nav-bar-wrapper li': {
            display: 'block',
        },
        'depth-li': {},
        '.depth-context': {},
    },
    `,
);
