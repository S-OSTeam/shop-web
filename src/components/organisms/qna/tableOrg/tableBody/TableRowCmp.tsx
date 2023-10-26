import React, { useState } from 'react';
import { Box, TableCell, TableRow } from '@mui/material';
import { TD } from '../../../../molecules/table/tableData/TD';
import IconWrapper from '../../../../molecules/iconWrapper/IconWrapper';
import TableContentBox
    from '../../../../molecules/table/tableContent/tableContentSection/TableContentBox/TableContentBox';
/*
* TR 가 여러개일 수 있음
 */
export interface myTableRowProps {
    tableRowPrimary: string[];
    context: string;
    rq_context?: string;
    qna_done_date?: string;
}

export const TableRowCmp = ({ ...props }: myTableRowProps) => {
    const {tableRowPrimary, context, rq_context, qna_done_date} = props;

    const [rqState, SetRQState] = useState<boolean>(false);
    const handleOnClick = () => {
        SetRQState((current) => (!current));
    };
    return (
        <>
            <TableRow onClick={handleOnClick}>
                {
                    tableRowPrimary.map((item, index) => {
                        // key 에 td 말고 다른거 생각하기
                        const currentKey = item + index;
                        return (
                            <TD CellText={item} key={currentKey} />
                        );
                    })
                }
            </TableRow>
            {rqState &&
                <TableRow>
                    <TableCell>
                        <Box component='section'>
                            <IconWrapper icon='help' />
                            <TableContentBox
                                wrapperClass='qna-tb-user-context'
                                context={context}
                                rq_date={undefined}
                            />
                        </Box>
                        <>
                            <IconWrapper icon='A' />
                            <TableContentBox
                                wrapperClass='qna-tb-user-context'
                                rq_context={rq_context}
                                rq_date={qna_done_date}
                            />
                        </>
                    </TableCell>
                </TableRow>}
        </>
    );
};
// (rq_context !== '') ?
