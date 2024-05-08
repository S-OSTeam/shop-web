/* eslint-disable */
import React from 'react';
import { Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Text from '@atoms/text/Text';
import CategoryHeader from '@components/layout/header/category/CategoryHeader';
import RightMenu from '@components/layout/header/NavBar/listItem/rightMenu/RightMenu';
import Button, { ButtonProps } from '@atoms/button/Button';
import clsN from 'classnames';
import styles from './styles/NavMain.module.scss';
import LeftMenuBtn from '@components/layout/header/NavBar/listItem/leftMenuBtn/leftMenuBtn';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import useGraphQL from '@hooks/useGraphQL';
import { SEND_VERIFY_CODE } from '@api/apollo/gql/mutations/LoginMutation.gql';

interface GnbMainProps {
    toolClsN?: string;
    logoTitle: string;
    logoClsN?: string;
    onClick?: () => void;
    loginClsN?: string;
    variant?: ButtonProps['variant'];
    mobileMenuBtn?: string;
    mobileMenuIconClsN?: string;
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
    mobileMenuBtn,
    mobileMenuIconClsN,
    navBarRightClsN,
    navBarRightBtnClsN,
    navBarRightIconClsN,
}: GnbMainProps) => {
    // 전역 아톰을 활용한 커스텀 훅 사용
    const isInTablet = useDomSizeCheckHook(1024);

    const loginSuccess = <T,>(token: T) => {
        console.log(token);
    };

    return (
        <Toolbar className={clsN(`${styles['tool-bar']}`, toolClsN)}>
            {isInTablet ? (
                <LeftMenuBtn
                    icon={
                        <MenuIcon
                            className={clsN(`${styles['tool-bar__icon']}`, mobileMenuIconClsN)}
                            onClick={onClick}
                        />
                    }
                    className={clsN(`${styles['tool-bar__btn']}`, mobileMenuBtn)}
                    edge="start"
                    ariaLabel="drawer Menu"
                    onClick={onClick}
                />
            ) : null}
            <Text text={logoTitle} className={clsN(`${styles['tool-bar__logo]']}`, logoClsN)} onClick={onClick} />
            {isInTablet ? null : <CategoryHeader />}
            <RightMenu
                navBarRightClsN={navBarRightClsN}
                icnBtnClsN={navBarRightBtnClsN}
                iconClsN={navBarRightIconClsN}
            />
            <Button className={clsN(styles['tool-bar__login'], loginClsN)} variant={variant}>
                로그인
            </Button>
        </Toolbar>
    );
};
export default NavMain;
