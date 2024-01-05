/* eslint-disable */
import React from 'react';
import { TablePaginationProps } from '@mui/material/TablePagination';
import MuiPagination from '@mui/material/Pagination';
import { gridPageCountSelector, GridPagination, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import clsN from 'classnames';
import styles from './styles/CustomMuiPagination.module.scss';
/*
* Pick<T, K> : T 타입의 프로퍼티 중 K 로 지정한 프로퍼티만을 포함한 새로운 타입을 만듬
*/

const MuiPaginationFrame = (
    {
        page,
        onPageChange,
        className,
    }: Pick<TablePaginationProps, 'page' | 'onPageChange' | 'className'>) => {
    // useGridApiContext : 상요작용한 인터페이스를 제공해줌
    const apiRef = useGridApiContext();
    //
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
        <MuiPagination
            className={clsN(`${styles.pagination}`, className)}
            count={pageCount}
            page={page + 1}
            onChange={(event, newPage) => {
                onPageChange(event as any, newPage - 1);
            }}
        />
    );
}

export const CustomMuiPagination = (props:any) => {
    return <GridPagination ActionsComponent={MuiPaginationFrame} {...props} />;
}