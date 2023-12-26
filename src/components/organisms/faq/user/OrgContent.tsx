import React from 'react';
// import { Box } from '@mui/material';
import Text from '../../../atoms/text/Text';

interface MyProps {
    isOpen: boolean;
}

export const OrgContent = ({ isOpen }: MyProps) => {
    return (
        <div className='faq-sub-title-wrapper'>
            {isOpen &&
            <>
                <Text text='궁금하신 사항이 있나요?' className='main-title' variant='h2' />
                <Text text='빠르게 답변해 드리겠습니다.' className='subtitle2' variant='subtitle2' />
            </>}
        </div>
    );
};
