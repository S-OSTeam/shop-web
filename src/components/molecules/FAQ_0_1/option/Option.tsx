import React from 'react';
import { MenuItem, MenuItemProps } from '@mui/material';

export const Option = ({...props}: MenuItemProps) => {
    return(
        <MenuItem value={props.value}>
            {props.children}
        </MenuItem>
    );
};