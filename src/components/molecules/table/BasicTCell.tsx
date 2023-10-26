import React from 'react';
import { TableCell } from '@mui/material';

interface MyProps{
    text: string
}
export const BasicTCell = ({text}:MyProps) => {

    return(
        <TableCell>
            {text}
        </TableCell>
    );
}