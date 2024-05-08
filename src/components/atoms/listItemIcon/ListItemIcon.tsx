import React from 'react';
import { ListItemIcon as MuiListItemIcon, ListItemIconProps as MuiListItemIconProps } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/ListItemIcon.module.scss';

interface ListItemIconProps extends MuiListItemIconProps{
    children: React.ReactNode;
    className?: string;
}

const ListItemIcon = (
    {
        className,
        children
    }:ListItemIconProps
) => {

    return(
        <MuiListItemIcon className={clsN(className, styles.iconBtn)}>
            {children}
        </MuiListItemIcon>
    );
}
ListItemIcon.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}
ListItemIcon.defaultProps = {
    className: styles.iconBtn,
}
export default ListItemIcon;