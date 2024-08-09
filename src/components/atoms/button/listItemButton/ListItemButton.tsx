import React from 'react';
import { ListItemButton as MuiListItemBtn, ListItemButtonProps as MuiListItemBtnProps } from '@mui/material';
import clsN from 'classnames';


interface ListItemButtonProps extends MuiListItemBtnProps{
    onClick?: MuiListItemBtnProps['onClick']
    className?: string;
    children?: React.ReactNode;
}

const ListItemButton = (
    {
        onClick,
        className,
        children
    }:ListItemButtonProps
) => {
    return(
        <MuiListItemBtn
            className={clsN(className,)}
            onClick={onClick}
        >
            {children}
        </MuiListItemBtn>
    )
}
ListItemButton.defaultProps = {
    onClick: undefined,
    className: undefined,
    children: undefined
}
export default ListItemButton;