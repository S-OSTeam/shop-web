/* eslint-disable */
import React, { Fragment } from 'react';
import { FrameQnaTemplate } from '../../components/templates/FAQ/FrameQnaTemplate';
import { Box } from '@mui/material';
import Header from '../../components/templates/header/Header';
import '../../styles/scss/QnaStyles.scss';

export interface myTableInterfaceProps {
    thContext: string[];
    showOpt: boolean;
    // select remote 영역
    menuItems: string[];
}

export const PageQna = () => {
    const th = ['답변상태', '제목', '닉네임', '작성일'];
    // 답변상태 답변완료 답변대기
    const selectMenuItems = ['답변현황', '답변완료', '답변대기'];
    return (
        <Fragment>
            <Header/>
            <Box component="main" className="qna-body">
                <FrameQnaTemplate thContext={th} showOpt={false} menuItems={selectMenuItems} />
            </Box>
        </Fragment>
    );
};
