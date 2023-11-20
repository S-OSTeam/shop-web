import React from 'react';
import { TableCell } from '@mui/material';
import Text from '../../../atoms/text/Text';


// mui TableCell 은 부모의 속성에 따라 자동으로 th, td 로 변환됨
interface TableDataCellProps{
    CellText: string;
}

// 단순히 테이블의 정보만 알려주는 셀
export const TD = ({CellText}:TableDataCellProps) => {
    return(
        <TableCell>
            <Text text={CellText} />
        </TableCell>
    );
}