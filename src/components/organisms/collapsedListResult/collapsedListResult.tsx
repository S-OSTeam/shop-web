import React from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from '@mui/material';
import { CollapsedTableClasses } from '@interface/collapsedList/CollapsedList';
import { TableDB } from '@interface/table/TableDB';
import { CollapsedTableTitleRow } from '@molecules/collapsedTable/collapsedTableTitleRow/CollapsedTableTitleRow';
import { CollapsedTableContext } from '@molecules/collapsedTable/collapsedTableContext/CollapsedTableContext';
import clsN from 'classnames';
import styles from './styles/collapsedListResult.module.scss';

// 테이블 페이지네이션 인터페이스
interface PaginationProps {
    // 페이지당 보여줄 행 갯수
    rowsPerPageOptions?: Array<number | { value: number; label: string }>;
    // 총 행의 수
    count: number;
    // 페이지당 보여줄 행 수, -1 은 모든 행을 보여줌
    rowsPerPage: number;
    // 0 인덱스 기준으로 현재 페이지
    page: number;
    // 콜백 이벤트 : 실행 시 페이지 변환 , e: 콜백이 발생하는 이벤트, page: page 가 선택되는 인자
    onPageChange: (e: React.MouseEvent | null, page: number) => void;
    // 콜백 이벤트 : 행의 갯수가 페이지마다 바뀜
    onRowsPerPageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// 콜랩스 매니저 인터페이스
interface CollapsedManagerProps {
    // classes 요소
    classesList?: CollapsedTableClasses;
    // tableHead 테이블 데이터
    tHeaders: string[];
    // 테이블 라벨
    tableLabel: string;
    // 제목과 본문을 가지고 있는 데이터
    tableDB: TableDB[];
    // 페이지네이션 속성
    tablePageProps: PaginationProps;
}

export const CollapsedListResult = ({ ...props }: CollapsedManagerProps) => {
    /* 상태 */
    // 테이블 페이지네이션
    const { tablePageProps } = props;
    // 구조분해로 테이블에 사용되는 클래스명들 불러오기
    const { classesList, tableLabel } = props;
    // 테이블에 활용될 데이터
    const { tableDB } = props;
    // 테이블 헤더
    const { tHeaders } = props;
    // 테이블 데이터 배열 길이만큼 상태 수 설정
    const tableLength = tableDB.length;
    // 현재 리스트들의 공개 (on/off) 상태
    const [collList, setCollList] = React.useState<boolean[]>(() => Array(tableLength).fill(false));

    // 콜랩스 토글값 반전(얕은 복사)
    const toggleCollapse = (index: number, arr: boolean[]): boolean[] => {
        // 얕은복사 특정 인덱스의 배열값 반전 처리
        const data = [...arr];
        data[index] = !data[index];
        return data;
    };
    // 속성을 통해 받은 본문 랜더 함수, 고차 함수로 첫번째 함수인자(인덱스) 두번째함수인자(배열)
    const setCollapseArray = (index: number) => {
        setCollList((prevState) => toggleCollapse(index, prevState));
    };

    // 테이블 Head 영역 렌더
    const tableHeaderRender = (arr: string[]) => {
        const tCells = arr.map((item) => (
            <TableCell size="small" component="th" align="center" className={clsN(styles.table__head__cell)}>
                {item}
            </TableCell>
        ));
        return (
            <TableRow className={clsN(styles.table__head)}>
                <TableCell padding="checkbox" className={clsN(styles.table__head__cell)} component="th" align="left" />
                {tCells}
            </TableRow>
        );
    };

    // Title/CollRow 컴포넌트 랜더
    const collapsedRowRender = (tData: TableDB[]) => {
        return tData.map((item, index) => {
            // 구조분해로 요소 분활
            const { tRowTitle, tCollContext } = item;
            // 현재 인덱스 상태
            const currentState = collList[index];
            // 상태 변화 함수
            const onCollapseChange = () => {
                setCollapseArray(index);
            };
            // 제목 렌더
            const provideTitle = (
                <CollapsedTableTitleRow
                    align="center"
                    collapseIn={currentState}
                    onCollapse={onCollapseChange}
                    data={tRowTitle}
                />
            );
            // 본문 렌더
            const provideContext = (
                <CollapsedTableContext
                    className={clsN()}
                    cellClsN={clsN()}
                    collapseIn={currentState}
                    content={tCollContext}
                    colSpan={tHeaders.length + 1}
                />
            );

            return (
                <>
                    {provideTitle}
                    {provideContext}
                </>
            );
        });
    };

    /* TSX */
    /* 이벤트 */
    /* 렌더 */
    return (
        <Paper className={clsN(styles.paper, classesList?.root)}>
            <TableContainer className={clsN(styles.table, classesList?.tableContainer)}>
                <Table aria-label={tableLabel}>
                    <TableHead className={clsN()}>{tableHeaderRender(tHeaders)}</TableHead>
                    <TableBody className={clsN()}>{collapsedRowRender(props.tableDB)}</TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                className={clsN(styles.pagination, classesList?.pagination)}
                rowsPerPageOptions={tablePageProps.rowsPerPageOptions}
                component="div"
                count={tablePageProps.count}
                rowsPerPage={tablePageProps.rowsPerPage}
                page={tablePageProps.page}
                onPageChange={tablePageProps.onPageChange}
                onRowsPerPageChange={tablePageProps.onRowsPerPageChange}
            />
        </Paper>
    );
};

CollapsedListResult.defaultProps = {
    classesList: undefined,
};
