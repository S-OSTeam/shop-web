import React from 'react';
import { Box } from '@mui/material';
import ButtonCustom from '../../../atoms/button/ButtonCustom';
import TextCustom from '../../../atoms/text/TextCustom';

const FAQLink = () => {
    return (
        <Box className="faqLink">
            <ButtonCustom>
                <TextCustom content="자주 묻는 질문 & 답변" />
            </ButtonCustom>
        </Box>
    );
};

export default FAQLink;
