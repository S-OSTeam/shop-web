/* eslint-disable */
import React from 'react';
import { Toolbar, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Text from '@atoms/text/Text';
import CategoryHeader from '@components/layout/header/category/CategoryHeader';
import RightMenu from '@components/layout/header/gnb/listItem/rightMenu/RightMenu';
import Button, { ButtonProps } from '@atoms/button/Button';
import clsN from 'classnames';
import styles from './styles/GnbMain.module.scss';
import LeftMenuBtn from '@components/layout/header/gnb/listItem/leftMenuBtn/leftMenuBtn';
import useGraphQL from '@hooks/useGraphQL';
import { Login } from '@api/apollo/gql/showLogin.gql';
import { login } from '@util/test/data/CategoryResponse';
// import { setCookie } from '@util/CookieUtil';

interface GnbMainProps {
    toolClsN?: string;
    logoTitle: string;
    logoClsN?: string;
    onClick?: () => void;
    loginClsN?: string;
    variant?: ButtonProps['variant'];
    menuBtnClsN?: string;
    menuIconClsN?: string;
    gnb_R_ClsN?: string;
    gnb_R_Btn_ClsN?: string;
    gnb_R_Icon_ClsN?: string;
}

const GnbMain = ({
    toolClsN,
    logoTitle,
    logoClsN,
    onClick,
    loginClsN,
    variant,
    menuBtnClsN,
    menuIconClsN,
    gnb_R_ClsN,
    gnb_R_Btn_ClsN,
    gnb_R_Icon_ClsN,
}: GnbMainProps) => {
    /*
     * width 에 따라 <CategoryHeader /> 를 표시할지 안할지 정해야됨
     * menuButton 도 포함
     */

    // useMediaQuery 로 일정수치 이내에만 true 아닐경우 false
    const isInTablet = useMediaQuery('(max-width: 1024px)');

    const { data: mutateData, gql: mutate } = useGraphQL({
        query: Login,
        request: login,
        type: 'mutation',
    });

    const loginClick = () => {
        mutate({
            context: {
                headers: {
                    'Authorization-Mac': '00-A5-54-E3-83-AC',
                },
            },
            onCompleted: (token) => loginSuccess(token),
        });
    };

    const loginSuccess = <T,>(token: T) => {
        console.log(token);
    };
    return (
        <Toolbar className={clsN(`${styles.tool_bar}`, toolClsN)}>
            {isInTablet ? (
                <LeftMenuBtn
                    icon={
                        <MenuIcon className={clsN(`${styles.header_menu_btn_icon}`, menuIconClsN)} onClick={onClick} />
                    }
                    className={clsN(`${styles.header_menu_btn}`, menuBtnClsN)}
                    edge="start"
                    ariaLabel="drawer Menu"
                    onClick={onClick}
                />
            ) : null}
            <Text text={logoTitle} className={clsN(`${styles.logo}`, logoClsN)} onClick={onClick} />
            {isInTablet ? null : <CategoryHeader />}
            <RightMenu gnb_r_ClsN={gnb_R_ClsN} icnBtnClsN={gnb_R_Btn_ClsN} iconClsN={gnb_R_Icon_ClsN} />
            <Button className={clsN(styles.login, styles.loginTitle, loginClsN)} variant={variant} onClick={loginClick}>
                로그인
            </Button>
        </Toolbar>
    );
};
export default GnbMain;
