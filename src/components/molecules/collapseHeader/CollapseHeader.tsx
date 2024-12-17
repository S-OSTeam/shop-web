import React from 'react';
import { TableCell, TableRow } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/CollapseHeader.module.scss';

interface CollapseHeaderProps {
    tableCells: React.ReactNode;
}

// 테이블 헤더 영역, CollapseHaderProps[] 들을 관리
export const CollapseHeader = ({ ...props }: CollapseHeaderProps) => {
    return (
        <TableRow className={clsN(styles.table__head)}>
            <TableCell padding="checkbox" className={clsN(styles.table__head__cell)} component="th" align="left">
                {props.tableCells}
            </TableCell>
        </TableRow>
    );
};
