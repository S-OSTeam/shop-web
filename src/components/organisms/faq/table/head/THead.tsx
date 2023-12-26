import React from 'react';
import { TableHead, TableRow } from '@mui/material';
import { BasicTCell } from '../../../../molecules/table/BasicTCell';

// 위에서 받을꺼


export const THead = () => {
    const temp = [
        '답변여부',
        '제목',
        '닉네임',
        '작성일',
    ];
    return (
        <TableHead>
            <TableRow>
                {temp.map((item: string) => {
                    return (
                        <BasicTCell text={item}/>
                    );
                })}
            </TableRow>
        </TableHead>
    );
};