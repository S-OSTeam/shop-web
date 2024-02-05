/* eslint-disable */
import React from 'react';
import { Toolbar, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Text from '@atoms/text/Text';
import CategoryHeader from '@components/layout/header/category/CategoryHeader';
import RightMenu from '@components/layout/header/NavBar/listItem/rightMenu/RightMenu';
import Button, { ButtonProps } from '@atoms/button/Button';
import clsN from 'classnames';
import styles from './styles/GnbMain.module.scss';
import LeftMenuBtn from '@components/layout/header/NavBar/listItem/leftMenuBtn/leftMenuBtn';

interface GnbMainProps {
    toolClsN?: string;
    logoTitle: string;
    logoClsN?: string;
    onClick?: () => void;
    loginClsN?: string;
    variant?: ButtonProps['variant'];
    menuBtnClsN?: string;
    menuIconClsN?: string;
    navBarRightClsN?: string;
    navBarRightBtnClsN?: string;
    navBarRightIconClsN?: string;
}

const NavMain = ({
    toolClsN,
    logoTitle,
    logoClsN,
    onClick,
    loginClsN,
    variant,
    menuBtnClsN,
    menuIconClsN,
    navBarRightClsN,
    navBarRightBtnClsN,
    navBarRightIconClsN,
}: GnbMainProps) => {
    /*
     * width 에 따라 <CategoryHeader /> 를 표시할지 안할지 정해야됨
     * menuButton 도 포함
     */
    // useMediaQuery 로 일정수치 이내에만 true 아닐경우 false
    const isInTablet = useMediaQuery('(max-width: 1024px)');

    const loginSuccess = <T,>(token: T) => {
        console.log(token);
    };

    return (
        <Toolbar className={clsN(`${styles.toolBar}`, toolClsN)}>
            {isInTablet ? (
                <LeftMenuBtn
                    icon={<MenuIcon className={clsN(`${styles.headerMenuBtnIcon}`, menuIconClsN)} onClick={onClick} />}
                    className={clsN(`${styles.headerMenuBtn}`, menuBtnClsN)}
                    edge="start"
                    ariaLabel="drawer Menu"
                    onClick={onClick}
                />
            ) : null}
            <Text text={logoTitle} className={clsN(`${styles.logo}`, logoClsN)} onClick={onClick} />
            {isInTablet ? null : <CategoryHeader />}
            <RightMenu
                navBarRightClsN={navBarRightClsN}
                icnBtnClsN={navBarRightBtnClsN}
                iconClsN={navBarRightIconClsN}
            />
            <Button className={clsN(styles.login, styles.loginTitle, loginClsN)} variant={variant}>
                로그인
            </Button>
        </Toolbar>
    );
};
export default NavMain;
