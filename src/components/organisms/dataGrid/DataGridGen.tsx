/* eslint-disable */
import React, { Fragment } from 'react';
import { DataGrid, GridColDef, GridPagination, GridToolbar } from '@mui/x-data-grid';
import clsN from 'classnames';
import styles from './styles/DataGridGen.module.scss';
import { useDemoData } from '@mui/x-data-grid-generator';
import { CustomMuiPagination } from '#molecules/pagination/muiPagination/CustomMuiPagination';

interface DataGridGenProps <T>{
    // 제너릭
    DefProps : GridColDef[];
    ColData: T[];
}

/*
* <T extends Record<string, any>> : 제너릭 타입 매개변수를 선언, 'T' 라는 타입 매개변수를 선언하고 Record<string, any> 타입을 확장함
* Record<string, any> 는 타입스크립트에서 문자열 키와 어떤 타입이든 가질 수 있는 값으로 이루어진 객체를 나타내는 유틸리티 타입임
* ({data}: DataGridGenProps<T>) : 자식이 받는 프롭 객체의 구조 분해 할당하고
* "T" 제너릭 타입 매개변수가 DataGridGenProps<T> 에 적용되어 'data' 속성이 동적으로 타입을 가질 수 있게 한다.
*/

export const DataGridGen = <T,>(
    {
        ColData,
        DefProps
    }: DataGridGenProps<T>) => {
    // DataGrid DemoData
    const {data} = useDemoData({
        dataSet: 'Commodity',
        rowLength: 10,
    })
    return (
        <DataGrid
            onCellClick={()=>{
                console.log('hi');
            }}
            {...data}
            className={clsN(`${styles.dataGrid}`)}
            columns={DefProps}
            rows={ColData}
            initialState={{
                pagination: {paginationModel: {pageSize: 10, page: 0}}
            }}
            checkboxSelection
        />

    );
};