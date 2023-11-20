import { createTheme, styled } from '@mui/material';
import '../../../scss/variables/_variables.scss';
import { blue, common } from '@mui/material/colors';
import { theme } from '../../../styles';


// theme
export const customNavTheme = createTheme({
    palette:{
        primary:{
            main: blue['200'],
            contrastText: common.white,
        },

    },
    components:{

    }

});
export const MyNavComponent = styled('div')(({theme})=>
    theme.unstable_sx({
        color: 'primary.contrastText',
        backgroundColor: 'primary.main',
        display: 'block',
        height: '60px',
        width: '1200px',
        margin: '0 auto',
    }),
    ({
        backgroundColor: blue[300],
        [theme.breakpoints.down('desktop')]:{
            background: blue[400],
            width: '1024px',
        },
        [theme.breakpoints.down('laptop')]:{
            background: blue[500],
            width: '960px',
        },
        [theme.breakpoints.down('tablet')]:{
            background: blue[600],
            width: '780px',
        },
        [theme.breakpoints.down('mobile')]:{
            background: blue[700],
            width: '460px',
        },

    })
);
