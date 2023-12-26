import React from 'react';
import { TableHead, TableRow } from '@mui/material';
import { TD } from '../../../../molecules/table/tableData/TD';

interface myTableProps {
    // thead 셀
    th: string[];
}

// 테이블 헤더
export const TableHdr = ({...props}: myTableProps) => {
    const { th } = props;
    return(
        <TableHead>
            <TableRow>
                {
                    th.map((cell) => {
                        // const tempKey = `${'th' + index}`;
                        return(
                            <TD CellText={cell} />
                        )
                    })
                }
            </TableRow>
        </TableHead>
    )
}