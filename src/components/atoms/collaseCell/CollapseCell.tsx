import React from 'react';
import { TableCell } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/CollapseCell.module.scss';

export interface CollapseHaderProps {
    size?: 'small' | 'medium';
    item: React.ReactNode;
    className?: string;
}

export const CollapseCell = ({ ...props }: CollapseHaderProps) => {
    return (
        <TableCell
            size={props.size}
            component="th"
            align="center"
            className={clsN(props.className, styles['table-cell'])}
        >
            {props.item}
        </TableCell>
    );
};

CollapseCell.defaultProps = {
    size: 'small',
};
