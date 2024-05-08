import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false; // removes the `xs` breakpoint
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true; // adds the `mobile` breakpoint
        tablet: true;
        laptop: true;
        desktop: true;
    }
}

export const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 768,
            tablet: 1024,
            laptop: 1200,
            desktop: 1400,
        },
    },
});
