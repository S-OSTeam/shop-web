import React from 'react';
import { GridColDef } from '@mui/x-data-grid';
import Button from '@atoms/button/Button';

/**
 * GridColDef : MuiDataGrid 에서 제공하는 그리드 열의 타입
 * (typeof rows) : rows 변수 타입을 참조함, rows 는 배열 객체 배열인데
 *  이는 rows 배열의 요소 타입에 맞는 GridColDef 를 의미
 */

export const ProductColDef: GridColDef<(typeof productRows)[number]>[] = [
    {
        field: 'thumbnail',
        headerName: '썸네일',
    },
    {
        field: 'productId',
        headerName: '상품ID',
        flex: 1,
    },
    {
        field: 'productName',
        headerName: '상품명',
        flex: 1,
    },
    {
        field: 'productCategory',
        headerName: '카테고리',
        flex: 1,
    },
    {
        field: 'releaseDate',
        headerName: '등록일',
        flex: 1,
    },
    {
        field: 'latestFixDate',
        headerName: '마지막 수정일',
        flex: 1,
    },
    {
        field: 'evaluation',
        headerName: '평가',
        headerAlign: 'right',
        align: 'right',
    },
    {
        field: 'productState',
        headerName: '상태',
        headerAlign: 'right',
        align: 'right',
    },
    {
        field: 'fixButton',
        headerName: '수정하기',
        align: 'center',
        headerAlign: 'center',
        flex: 1,
        /*
         * renderCell 외 많이 있음
         * https://mui.com/x/react-data-grid/column-definition/#rendering-cells
         * */
        renderCell: (cellValues) => {
            return (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => {
                        console.log(e, cellValues);
                    }}
                >
                    수정하기
                </Button>
            );
        },
    },
];

export const productRows = [
    {
        id: 1,
        thumbnail: 'image',
        productId: '1235451',
        productName: 'Product1',
        productCategory: 'Anime',
        releaseDate: '2000.00.00 00시00분',
        latestFixDate: '2000.00.00 00시00분',
        evaluation: '4.5',
        productState: '공개',
    },
    {
        id: 2,
        thumbnail: 'image',
        productId: '12435451',
        productName: 'Product2',
        productCategory: 'SF',
        releaseDate: '2000.00.00 00시00분',
        latestFixDate: '2000.00.00 00시00분',
        evaluation: '3.5',
        productState: '공개',
    },
    {
        id: 3,
        thumbnail: 'image',
        productId: '1251151',
        productName: 'Product3',
        productCategory: '3D',
        releaseDate: '2000.00.00 00시00분',
        latestFixDate: '2000.00.00 00시00분',
        evaluation: '5',
        productState: '공개',
    },
    {
        id: 4,
        thumbnail: 'image',
        productId: '1435451',
        productName: 'Product4',
        productCategory: 'Game',
        releaseDate: '2000.00.00 00시00분',
        latestFixDate: '2000.00.00 00시00분',
        evaluation: '2.5',
        productState: '공개',
    },
    {
        id: 5,
        thumbnail: 'image',
        productId: '1264351',
        productName: 'Product5',
        productCategory: 'Anime',
        releaseDate: '2000.00.00 00시00분',
        latestFixDate: '2000.00.00 00시00분',
        evaluation: '1.5',
        productState: '공개',
    },
];
