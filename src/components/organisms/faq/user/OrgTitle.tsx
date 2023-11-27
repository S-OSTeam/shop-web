import React from 'react';
import { Box } from '@mui/material';
import { Heading } from '../../../molecules/heading/Heading';

export const OrgTitle = () => {
    return (
        <Box
            className='area-faq-title'
            component='div'
        >
            <Heading
                text='또 터졌나요?'
                type='h1'/>
            <Heading
                text='또 뭔 짓거리를 하신 겁니까'
                type='subtitle1'
                className='subtitle1'
            />
            <Heading
                text='문의해보세요'
                type='subtitle2'
                className='subtitle2'
            />
        </Box>
    );
};