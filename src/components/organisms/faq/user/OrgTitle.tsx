import React from 'react';
import { Box } from '@mui/material';
import Text from '../../../atoms/text/Text';

export const OrgTitle = () => {
    return (
        <Box
            className='area-faq-title'
            component='div'
        >
            <Text text='또 터졌나요?' className='' variant='h1' />
            <Text text='또 뭔 짓거리를 하신 겁니까' className='subtitle1' variant='subtitle1' />
            <Text text='문의해보세요' className='subtitle2' variant='subtitle2' />
        </Box>
    );
};