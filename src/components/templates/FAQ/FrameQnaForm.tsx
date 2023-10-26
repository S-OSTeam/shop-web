import React from 'react';
import { Box } from '@mui/material';
import { Heading } from '../../molecules/FAQ_0_1/heading/Heading';
import { TContainer } from '../../organisms/faq/table/TContainer';
import { THead } from '../../organisms/faq/table/head/THead';
import { TBody } from '../../organisms/faq/table/body/TBody';


const FrameQnaForm = () => {
    return(
        <Box
            component='div'
            className='qna-wrapper'
        >
            <Box
                component='div'
            >
                <Heading text='Q&A' type='h1' className='qna-heading' />
                <Heading
                    text='궁금하신 점이 있으신가요?'
                    type='subtitle1'
                    className='faq-g-heading'
                />
            </Box>
            <TContainer
                table_label='문의 테이블'
            >
                <THead />
                <TBody />
            </TContainer>
        </Box>
    );
}

export default FrameQnaForm;