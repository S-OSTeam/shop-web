import React from 'react';
import { MenuItem as MuiMenuItem, MenuItemProps as MuiMenuItemProps} from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/MenuItem.module.scss';

/* eslint-disable-next-line */
interface myProps extends MuiMenuItemProps{
    autoFocus?: boolean;
    className?: string;
    children: React.ReactNode;
}

const MenuItemAtom = (
    {
        autoFocus,
        className,
        children,
        selected
    }: myProps, ) => {
    return(
        <MuiMenuItem autoFocus={autoFocus} className={clsN(className, `${styles.menuItem}`)} selected={selected} >{children}</MuiMenuItem>
    );
}
MenuItemAtom.propTypes={
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
MenuItemAtom.defaultProps={
    autoFocus: false,
    className: `${styles.menuItem}`,
};
export default MenuItemAtom;