import React from 'react';
import { TableCell } from '@mui/material';
import { DivTextArea, TableRowDivProps } from '../../../../molecules/table/DivTextArea';

export const TCell = ({...props}: TableRowDivProps) => {
    const {
        qna_context,
        qna_rq_context,
        qna_done_date,
        qna_done
    } = props;
    return (
        <TableCell>
            <DivTextArea
                qna_done={qna_done}
                qna_context={qna_context}
                qna_rq_context={qna_rq_context}
                qna_done_date={qna_done_date}
            />
        </TableCell>
    );
}
