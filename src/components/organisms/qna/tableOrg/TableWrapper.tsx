import React from 'react';
import { TableContainer, TableContainerProps } from '@mui/material';

// 몇개를 렌더할지 문자열을 받고 문자열 갯수만큼 제작
// THead > TR 은 1개밖에 없음 : TR 내부에서 map 처리
// TBody > TR 은 여러개가 나오므로 : TBody 내부에서 map 처리



export const TableWrapper = ({ ...props }: TableContainerProps) => {
    // const {th} = props;

    return (
        <TableContainer>
            {props.children}
        </TableContainer>
    );
};
