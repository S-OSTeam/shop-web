import React from 'react';
import { TableCell, TableRow } from '@mui/material';
import { CollapsedClassesProps, CollapsedList } from '@molecules/collapsedList/CollapsedList';
import clsN from 'classnames';
import styles from './styles/CollapsedTable.module.scss';

export interface TableClassesProps {
    // T-Row
    tableRow?: string;
    // T-Cell
    tableCell?: string;
}

interface CollapsedTableProps {
    // 테이블 클래스명 영역
    tableClasses?: TableClassesProps;
    // Collapsed 클래스명 영역
    collapsedClasses?: CollapsedClassesProps;
    // collapsed 의 toggle 상태
    in?: boolean;
    primaryContent: React.ReactNode;
    secondaryContent: React.ReactNode;
}

export const CollapsedTable = ({ ...props }: CollapsedTableProps) => {
    /* 상태 */

    /* 함수 */
    /* TSX 요소 */

    /* 렌더 */
    return (
        <TableRow className={clsN(styles['table-row'], props.tableClasses?.tableRow)}>
            <TableCell className={clsN(styles['table-rot__cell'], props.tableClasses?.tableCell)}>
                <CollapsedList
                    classes={{
                        wrapper: props.collapsedClasses?.wrapper,
                        listItem: props.collapsedClasses?.listItem,
                        collapsed: props.collapsedClasses?.collapsed,
                    }}
                    primaryCont={props.primaryContent}
                    secondaryCont={props.secondaryContent}
                    in={props.in}
                />
            </TableCell>
        </TableRow>
    );
};
CollapsedTable.defaultProps = {
    tableClasses: {
        tableRow: styles['table-row'],
        tableCell: styles['table-rot__cell'],
    },
    collapsedClasses: {
        wrapper: styles['collapsed-wrapper'],
        listItem: styles['collapsed-wrapper__list-item'],
        collapsed: styles['collapsed-wrapper__collapsed'],
    },
    in: undefined,
};
