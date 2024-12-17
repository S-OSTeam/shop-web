import React from 'react';
import { TableCell, TableRow } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import IconButton from '@molecules/button/iconButton/IconButton';
import clsN from 'classnames';
import styles from './styles/TitleRow.module.scss';

interface TitleRowProps {
    isOpen: boolean; // 콜렙스 펼침 체크
    className?: string; // 클래스명
    cellClsN?: string; // 테이블셀 클래스명
    data: React.ReactNode[];
    align: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    onClick: () => void; // 콜랩스 클릭 이벤트
}

export const TitleRow = ({ isOpen, className, cellClsN, onClick, data, align }: TitleRowProps) => {
    return (
        <TableRow className={clsN(className, styles['table-row'])}>
            <TableCell
                size="small"
                padding="checkbox"
                align="left"
                className={clsN(cellClsN, styles['table-row__cell'])}
            >
                <IconButton icon={isOpen ? <ExpandLess /> : <ExpandMore />} onClick={onClick} />
            </TableCell>
            {data.map((item) => (
                <TableCell size="small" align={align} className={clsN(cellClsN, styles['table-row__cell'])}>
                    {item}
                </TableCell>
            ))}
        </TableRow>
    );
};
