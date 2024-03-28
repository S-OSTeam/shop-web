import React from 'react';
import { List as MuiList, ListProps as MuiListProps } from '@mui/material';
import clsN from 'classnames';

interface ListProps extends MuiListProps {
    children: React.ReactNode;
    className?: string;
}

const List = (
    {
        children,
        className
    }: ListProps
) => {

    return(
        <MuiList
            className={clsN(className)}
            component='article'
            aria-labelledby=''
        >
            {children}
        </MuiList>
    )
}
export default List;