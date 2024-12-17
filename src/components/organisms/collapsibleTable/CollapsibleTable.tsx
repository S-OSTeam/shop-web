import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead } from '@mui/material';
import { CollapseHeader } from '@molecules/collapseHeader/CollapseHeader';
import { TitleRow } from '@molecules/collapseBody/titleRow/TitleRow';
import { ContextRow } from '@molecules/collapseBody/contentRow/ContextRow';
import { TableDB } from '@interface/table/TableDB';
import clsN from 'classnames';
import styles from './styles/CollpasibleTable.module.scss';

interface CollapsibleTableProps {
    tableLabel: string; // 테이블 레이블 명

    tableData: TableDB[]; // 테이블 데이터
    tHeaders: string[]; // 테이블 헤더
}

export const CollapsibleTable = ({ ...props }: CollapsibleTableProps) => {
    const { tableData, tHeaders } = props;

    const [collList, setCollList] = React.useState<boolean[]>(() => Array(tableData.length).fill(false)); // 목록들 펼침 상태

    const toggleCollapse = (index: number) => {
        // 콜랩스 토글 이벤트
        setCollList((prevColl) => {
            const newCollState = [...prevColl];
            newCollState[index] = !newCollState[index];
            return newCollState;
        });
    };

    const setCollapseArray = (index: number) => {
        // index 를 통해 본문 열람 처리
        toggleCollapse(index);
    };

    const tHeadRender = (tHeadItems: string[]) => {
        const tCells = tHeadItems.map((item) => (
            <TableCell size="small" component="th" align="center" className={clsN(styles.table__head__cell)}>
                {item}
            </TableCell>
        ));
        return <CollapseHeader tableCells={tCells} />;
    };

    const tCollpaseRender = (tableData: { tRowTitle: React.ReactNode[]; tCollContext: React.ReactNode }[]) => {
        return tableData.map((item, index) => {
            const { tRowTitle, tCollContext } = item;
            const currentState = collList[index]; // 현재 인덱스 상태
            const onCollapseChange = () => {
                // 콜랩스 토글 이벤트
                setCollapseArray(index);
            };
            const collapseTitle = (
                <TitleRow isOpen={currentState} data={tRowTitle} align="center" onClick={onCollapseChange} />
            ); // 제목 컴포넌트
            const collaseContext = <ContextRow content={tCollContext} colSpan={tHeaders.length + 1} />; // 콜랩스 본문 컴포넌트

            // Fragment 리턴
            return (
                <>
                    {collapseTitle}
                    {collaseContext}
                </>
            );
        });
    };

    return (
        <TableContainer component={Paper} className={clsN()}>
            <Table aria-label={props.tableLabel}>
                <TableHead>{tHeadRender(tHeaders)}</TableHead>
                <TableBody>{tCollpaseRender(tableData)}</TableBody>
            </Table>
        </TableContainer>
    );
};
