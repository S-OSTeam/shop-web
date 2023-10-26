import React from 'react';
import { Box } from '@mui/material';
import Text from '../../atoms/contents/Text';
/* eslint-disable-next-line */
type rq = '답변완료' | '답변예정';

export interface TableRowDivProps {
    qna_done: rq;
    qna_context: string;
    qna_rq_context: string;
    qna_done_date: string;
}


export const DivTextArea = ({ ...props }: TableRowDivProps) => {

    const { qna_context, qna_rq_context, qna_done_date } = props;
    // 박스를 감싸는 영역이 visibility를 invisible로
    return (
        <Box
            component='div'
            className='qna-td-wrapper'
        >
            <div className='primary'>
                <Text text={qna_context} className='qna-context user' />
            </div>
            <div className='secondary'>

                <div>
                    <Text text={qna_rq_context} className='qna-context admin' />
                    <Text text={qna_done_date} className='qna-done-date' />
                </div>
            </div>

        </Box>

    );
};
