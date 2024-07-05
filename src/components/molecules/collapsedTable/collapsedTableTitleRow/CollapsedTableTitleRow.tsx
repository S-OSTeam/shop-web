import React from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { TableCell, TableRow } from '@mui/material';
import IconButton from '@molecules/button/iconButton/IconButton';
import clsN from 'classnames';
import styles from './styles/CollapsedTableTitleRow.module.scss';

interface CollapsedTableTitleRowProps {
    // collapse 펼치고 접는 상태 (토글)
    collapseIn: boolean;
    // root 클래스명
    className?: string;
    // cell 클래스명
    cellClsN?: string;
    // 데이터 (이미지, 문자, 숫자, 아이콘 등등이 될 수 있으므로)
    data: React.ReactNode[];
    // 정렬
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    // onClick 이벤트
    onCollapse?: () => void;
}

export const CollapsedTableTitleRow = ({ ...props }: CollapsedTableTitleRowProps) => {
    /* 상태 */
    /* 함수 */
    /* TSX */
    // 아이콘 버튼 (collapseIn 에 따라 아이콘 변환)
    const iconProvider = (
        <IconButton icon={props.collapseIn ? <ExpandMore /> : <ExpandLess />} onClick={props.onCollapse} />
    );

    /* 렌더 */
    return (
        <TableRow className={clsN(props.className, styles['table-row'])}>
            <TableCell size="small" padding="checkbox" align="left" className={clsN(styles['table-row__cell'])}>
                {iconProvider}
            </TableCell>
            {props.data.map((cellItem) => (
                <TableCell size="small" align={props.align} className={clsN(styles['table-row__cell'])}>
                    {cellItem}
                </TableCell>
            ))}
        </TableRow>
    );
};
CollapsedTableTitleRow.defaultProps = {
    className: styles['table-row'],
    cellClsN: styles['table-row__cell'],
    align: 'inherit',
    onCollapse: undefined,
};
