/* eslint-disable */
import React from 'react';
import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/CollapsedTable.module.scss';

export interface CollapsedTableClasses {
    // root: TableContainer 클래스명
    tContainerClsN?: string;
    // TableContainer > Table 클래스명
    tableClsN?: string;
    // TableHead 클래스명
    tableHeadClsN?: string;
    // TableBody 클래스명
    tableBodyClsN?: string;
}

interface CollapsedTableProps<T> {
    // 클래스 모음
    classesList?: CollapsedTableClasses;
    // Table Aria-label
    tAreaLabel: string;
    // 제너릭 타입인 TableHead 데이터들
    tHeadItems: T[];
    // 제너릭 타입인 TableBody 데이터들
    tBodyItems: T[];
    // 제너릭 Collapsed 데이터들
    tCollapsedItems: T[];
    // T 타입에 따른 TableHead 내부 컨텐츠 랜더
    tHeadRender: (items: T) => React.ReactElement;
    // T 타입에 따른 TableBody 내부 컨텐츠 랜더
    tBodyRender: (items: T) => React.ReactElement;
    // T 타입에 따른 CollapsedItem 내부 컨텐츠 랜더
    tCollapsedRender: (items: T) => React.ReactElement;
}

export const CollapsedTable = <T,>({ ...props }: CollapsedTableProps<T>) => {
    /* 상태 */
    const { classesList, tAreaLabel, tHeadItems, tBodyItems, tCollapsedItems } = props;
    // 부모인 CollapsedTable 컴포넌트가 자식들의 상태 관리하기
    const tableLength = tBodyItems.length;
    // 현재 리스트들의 on/off 배열 상태
    const [coll, setColl] = React.useState<boolean[]>(() => Array(tableLength).fill(false));

    /* 함수 */
    // coll 상태 전부 off 로 초기화
    const resetCollState = () => {
        setColl((prevState) => Array(prevState.length).fill(false));
    };
    // 해당 배열 인덱스의 값 반전 처리
    const setArrayOfColl = (idx: number) => {
        setColl((prevState) => {
            const newState = [...prevState]; // 이전상태 복사
            newState[idx] = !newState[idx]; // 해당 인덱스 반전 처리
            return newState; // 수정된 상태 반환
        });
    };
    // TableCell 제공 : <Thead>
    const renderTHeadItems = tHeadItems.map((item) => {
        return props.tHeadRender(item);
    });
    // TableCell 제공 : <Tbody> 컨텐츠
    const renderTBodyItems = tBodyItems.map((item) => {
        return props.tBodyRender(item);
    });
    // TableCell Body->Collapsed 컨텐츠
    const renderCollItems = tCollapsedItems.map((item) => {
        return props.tCollapsedRender(item);
    });

    /* TSX 요소 */
    // T-Head
    const TableHeadProvider = <TableHead>{renderTHeadItems}</TableHead>;
    // T-Body
    const TableRowsProvider = (
        <TableRow>
            {renderTBodyItems}
            {renderCollItems}
        </TableRow>
    );
    /* 렌더 */
    // CollapsedTableItem 들을 렌더함

    return (
        <TableContainer component={Paper} className={clsN(classesList?.tContainerClsN)}>
            <Table aria-label={tAreaLabel} className={clsN(classesList?.tableClsN)}>
                {TableHeadProvider}
                <TableBody>{TableRowsProvider}</TableBody>
            </Table>
        </TableContainer>
    );
};
CollapsedTable.defaultProps = {
    classesList: {
        // root: TableContainer 클래스명
        tContainerClsN: styles['table-container'],
        // TableContainer > Table 클래스명
        tableClsN: styles.table,
        // TableHead 클래스명
        tableHeadClsN: styles.table__head,
        // TableBody 클래스명
        tableBodyClsN: styles.table__body,
    },
};
