import React from 'react';
import { Menu as MuiMenu, MenuProps as MuiMenuProps } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/Menu.module.scss';

interface MenuProps extends MuiMenuProps {
    // 메뉴 클래스명
    className?: string;
    // 실직적인 MenuItem
    children: React.ReactNode;
    // 열려지는 기준
    open: boolean;
}
const Menu = ({ className, children, open }: MenuProps) => {
    return (
        <MuiMenu className={clsN(className, styles.menu)} open={open}>
            {children}
        </MuiMenu>
    );
};

Menu.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    open: PropTypes.bool.isRequired,
};

Menu.defaultProps = {
    className: styles.menu,
};
export default Menu;
