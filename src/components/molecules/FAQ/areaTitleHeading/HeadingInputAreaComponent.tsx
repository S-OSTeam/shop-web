import React from 'react';
import { Box, TypographyProps } from '@mui/material';
import HeadingComponent from '../../../atoms/heading/Heading';

export interface MyHeadingProps {
    summery : string;
    className : string;
    tagType: TypographyProps['variant'];
}
/*
https://dev.to/minhchi1509/how-to-customize-colors-in-dark-and-light-modes-in-material-ui-1j5c?utm_source=oneoneone
*/
declare module "@mui/material/styles"{
    interface PaletteOptions{
        ".primaryTitle": string
    }
}

export const HeadingTagComponent = ({...props}:MyHeadingProps) => {
    return (
        <Box
            sx={{
                'h1':{
                    fontSize: '28px'
                },
                'h2':{
                    fontSize: '24px'
                },
                'h3':{
                    fontSize: '18px'
                },
                'h4':{
                    fontSize: '16px'
                }
            }}
        >
            <HeadingComponent
                variant={props.tagType}
                className={props.className}
                title={props.summery}
            />
        </Box>
    );
};
