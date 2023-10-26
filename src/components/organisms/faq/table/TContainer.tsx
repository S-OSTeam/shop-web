import React from 'react';
import { Table, TableContainer, TableContainerProps } from '@mui/material';

// 얘가 받을꺼 table > Thead[row], TBody[row]
interface MyProps extends TableContainerProps{
    table_label: string | undefined,
}
/*
TD|TB|TF > TR > TC.map
*/

export const TContainer = ({...props}: MyProps) => {
    return(
        <TableContainer>
            <Table aria-label={props.table_label}>
                {props.children}
            </Table>
        </TableContainer>
    );

}
