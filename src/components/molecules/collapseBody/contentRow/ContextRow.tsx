import React from 'react';
import { Collapse, TableCell, TableRow } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/ContextRow.module.scss';

interface ContextRowProps {
    className?: string; // 클래스명
    cellClsN?: string; // cell 클래스명
    isOpen?: boolean; // collapse 열림 상태
    content: React.ReactNode; // 컨텐츠
    colSpan?: number; // 합칠 셀 수량
}
export const ContextRow = ({ className, cellClsN, isOpen, content, colSpan }: ContextRowProps) => {
    const cellClassNames = clsN(cellClsN, styles['table-row__cell'], {
        [styles['table-row__cell--on']]: isOpen,
        [styles['table-row__cell--off']]: !isOpen,
    }); // 테이블 셀 클래스명 isOpen 상태에 따라 변경

    return (
        <TableRow className={clsN(className, styles['table-row'])}>
            <TableCell size="small" className={cellClassNames} colSpan={colSpan}>
                <Collapse in={isOpen}>{content}</Collapse>
            </TableCell>
        </TableRow>
    );
};
ContextRow.defaultProps = {
    className: styles['table-row'],
    cellClsN: styles['table-ror__cell'],
};
