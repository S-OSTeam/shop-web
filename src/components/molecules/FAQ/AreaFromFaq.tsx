import React from 'react';
import { Box } from '@mui/material';
import { HeadingTagComponent } from './areaTitleHeading/HeadingInputAreaComponent';


/* 부모에게 불리언 전달받기 */
export const AreaTitleFaq = () => {
    return (
        <Box>
            <HeadingTagComponent tagType='h1' summery='또 터졌나요?' className='primaryTitle' />
            <HeadingTagComponent tagType='h2' summery='또 뭔 짓거리를 하신 겁니까?' className='secondaryTitle' />
            <HeadingTagComponent tagType='h3' summery='문의해보세요' className='secondaryTitle' />
        </Box>
    );

};