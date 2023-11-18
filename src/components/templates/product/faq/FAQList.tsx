import React from 'react';
import { Box, Stack } from '@mui/material';
import { FAQData } from '../../../../util/GlobalTest';
import TextCustom from '../../../atoms/text/TextCustom';

interface FAQListProps {
    faq: FAQData[];
}

const FAQList = ({ faq }: FAQListProps) => {
    const faqStatus = (status: boolean) => {
        if (status) return '답변완료';
        return '답변예정';
    };

    return (
        <Box className="faqList">
            <Box className="ListData">
                <Stack className="faqHeader" direction="row">
                    <TextCustom className="statusTitle" content="답변상태" align="center" />
                    <TextCustom className="faqTitle" content="제목" align="center" />
                    <TextCustom className="writeTitle" content="작성자" align="center" />
                    <TextCustom className="registerTitle" content="등록일" align="center" />
                </Stack>
                {faq.map((faqData) => (
                    <Stack className="faqHeader faqDetail" direction="row">
                        <TextCustom className="statusTitle" content={faqStatus(faqData.status)} align="center" />
                        <TextCustom className="faqTitle" content={faqData.faqTitle} align="center" />
                        <TextCustom className="writeTitle" content={faqData.writer} align="center" />
                        <TextCustom className="registerTitle" content={faqData.registerDate} align="center" />
                    </Stack>
                ))}
            </Box>
        </Box>
    );
};
export default FAQList;
