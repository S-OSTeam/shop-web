import React from 'react';
import { Collapse } from '@atoms/collapse/Collapse';
import { TableCell, TableRow } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/CollapsedTableContext.module.scss';

interface CollapsedTableContextProps {
    // 클래스명
    className?: string;
    // cell 클래스 명
    cellClsN?: string;
    // 열람 상태
    collapseIn?: boolean;
    // collapse 내부 콘텐츠
    content: React.ReactNode;
    // 합칠 셀 수
    colSpan?: number;
}

export const CollapsedTableContext = ({ ...props }: CollapsedTableContextProps) => {
    /* 상태 */
    // 테이블 셀 클래스명 상태
    const cellClsNState = clsN(props.cellClsN, styles['table-row__cell'], {
        [styles['table-row__cell--on']]: props.collapseIn,
        [styles['table-row__cell--off']]: !props.collapseIn,
    });
    /* 함수 */
    /* TSX */
    /* 렌더 */
    return (
        <TableRow className={clsN(props.className, styles['table-row'])}>
            <TableCell size="small" className={cellClsNState} colSpan={props.colSpan}>
                <Collapse in={props.collapseIn}>{props.content}</Collapse>
            </TableCell>
        </TableRow>
    );
};

CollapsedTableContext.defaultProps = {
    className: styles['table-row'],
    cellClsN: styles['table-row__cell'],
    collapseIn: undefined,
    colSpan: undefined,
};
