/* eslint-disable */
import React from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import Text from '@atoms/text/Text';
import clsN from 'classnames';
import './style/TableCqa.scss';
import style from './style/TableCqa.module.scss';

// DefGridCol
interface TableCqaProps {
    caq_data_Col: GridColDef[];
    caq_data_Row: GridRowsProp;
    headingClsN?: string;
}


const TableCqa = (
    {
        caq_data_Col,
        headingClsN,
        caq_data_Row
    }:TableCqaProps) => {


    return(
        <Stack
            component='section'
            className={clsN('caq_table_wrapper', `${style.caq_table_wrapper}`)}
        >
            <Text
                text='문의내역 조회'
                className={headingClsN}
                variant='h2'
            />
            <DataGrid

                columnHeaderHeight={40}
                rowHeight={40}
                checkboxSelection
                columns={caq_data_Col}
                rows={caq_data_Row}
            />
        </Stack>
    );
}

export default TableCqa;