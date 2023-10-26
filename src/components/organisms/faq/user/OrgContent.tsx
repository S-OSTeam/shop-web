import React from 'react';
// import { Box } from '@mui/material';
import { Heading } from '../../../molecules/FAQ_0_1/heading/Heading';

interface MyProps {
    isOpen: boolean;
}

export const OrgContent = ({ isOpen }: MyProps) => {
    return (
        <div className='faq-sub-title-wrapper'>
            {isOpen &&
            <>
                <Heading text='궁금하신 사항이 있나요?' type='h2' className='main-title' />
                <Heading text='빠르게 답변해 드리겠습니다.' type='subtitle2' className='subtitle2'/>
            </>}
        </div>
    );
};
