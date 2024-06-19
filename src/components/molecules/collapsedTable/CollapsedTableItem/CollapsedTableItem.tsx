import React from 'react';
import { TableCell, TableRow } from '@mui/material';
import { CollapsedClassesProps, CollapsedList } from '@molecules/collapsedList/CollapsedList';
import IconButton from '@molecules/button/iconButton/IconButton';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import clsN from 'classnames';
import styles from './styles/CollapsedTableItem.module.scss';

export interface TableClassesProps {
    // T-Row 클래스명
    tableRow?: string;
    // T-Cell 클래스명
    tableCell?: string;
}

interface CollapsedTableProps {
    // 테이블 클래스명 영역
    tableClasses?: TableClassesProps;
    // Collapsed 클래스명 영역
    collapsedClasses?: CollapsedClassesProps;
    // collapsed 의 toggle 상태
    collIn?: boolean;
    primaryContent: React.ReactNode;
    secondaryContent: React.ReactNode;
    // collapsed onClick
    onCollapse?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const CollapsedTableItem = ({ ...props }: CollapsedTableProps) => {
    /* 상태 */
    /* 함수 */
    /* TSX 요소 */
    // icon 버튼 TableCell
    const CellIconButtonCell = (
        <TableCell className={clsN(styles['table-row__cell'], props.tableClasses?.tableCell)}>
            <IconButton onClick={props.onCollapse} icon={props.collIn ? <ExpandLess /> : <ExpandMore />} />;
        </TableCell>
    );
    // collapsedList 컴포넌트
    const CollapsedContent = (
        <CollapsedList
            classes={{
                wrapper: props.collapsedClasses?.wrapper,
                listItem: props.collapsedClasses?.listItem,
                collapsed: props.collapsedClasses?.collapsed,
            }}
            primaryCont={props.primaryContent}
            secondaryCont={props.secondaryContent}
            in={props.collIn}
        />
    );

    /* 렌더 */
    return (
        <>
            <TableRow className={clsN(styles['table-row'], props.tableClasses?.tableRow)}>
                {CellIconButtonCell}
            </TableRow>
            <TableRow className={clsN(styles['table-row'], props.tableClasses?.tableRow)}>
                <TableCell className={clsN(styles['table-row__cell'], props.tableClasses?.tableCell)}>
                    {CollapsedContent}
                </TableCell>
            </TableRow>
        </>
    );
};
CollapsedTableItem.defaultProps = {
    tableClasses: {
        tableRow: styles['table-row'],
        tableCell: styles['table-row__cell'],
    },
    collapsedClasses: {
        wrapper: styles['collapsed-wrapper'],
        listItem: styles['collapsed-wrapper__list-item'],
        collapsed: styles['collapsed-wrapper__collapsed'],
    },
    collIn: undefined,
    onCollapse: undefined,
};
