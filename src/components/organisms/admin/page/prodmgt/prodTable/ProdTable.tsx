/* eslint-disable */
import React from 'react';
import { Paper } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { ProductColDef, productRows } from '@util/test/data/admin/products/productColDef';
import clsN from 'classnames';
import styles from './styles/ProdTable.module.scss';
import { CustomToolBar } from '@molecules/toolBar/ToolBar';

/*
 * 해당 상품조회 테이블은 organism 영역이므로 데이터를 받고 클릭이벤트에 대한 처리를 구현하기
 * 해당 영역에서 할 수 있는 기능
 * 필터링
 * 선택이벤트
 * 특정셀 클릭 이벤트
 * 저장이벤트 : 리코일 활용
 * */

export const ProdTable = () => {
    /* 상태 */

    return (
        <Paper>
            <DataGrid
                checkboxSelection
                classes={{
                    root: clsN(styles['data-grid']),
                    toolbarContainer: clsN(styles['data-grid__toolbar']),
                }}
                columns={ProductColDef}
                rows={productRows}
                slots={{
                    toolbar: CustomToolBar,
                }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                    },
                }}
            />
        </Paper>
    );
};
