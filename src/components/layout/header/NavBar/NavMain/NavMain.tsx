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
import { useNavigate } from 'react-router-dom';
import { ItemCategoryTreeResponse } from '@interface/category/Category';

interface GnbMainProps {
    categories: ItemCategoryTreeResponse[];
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
    categories,
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

    const navigate = useNavigate();

    const goToCategory = (publicId: string) => {
        if (publicId === '01HX6ES9ND3E5YG71BR23BSVTY') {
            goToSupport();
        } else {
            navigate(`/shop/category?categoryId=${publicId}`);
        }
    };

    const handleHomeClick = () => {
        console.log('Home button clicked'); // 디버깅을 위해 추가
        navigate('/', { replace: true });
    };

    const goToLogin = () => {
        navigate('/login', { replace: true });
    };

    const goToSupport = () => {
        navigate('/support');
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
            <Text
                variant="button"
                text={logoTitle}
                className={clsN(`${styles['tool-bar__logo]']}`, logoClsN)}
                onClick={handleHomeClick}
            />
            {isInTablet ? null : (
                <CategoryHeader categories={categories} onClick={(publicId) => goToCategory(publicId)} />
            )}
            <RightMenu
                navBarRightClsN={navBarRightClsN}
                icnBtnClsN={navBarRightBtnClsN}
                iconClsN={navBarRightIconClsN}
            />
            <Button className={clsN(styles['tool-bar__login'], loginClsN)} variant={variant} onClick={goToLogin}>
                로그인
            </Button>
        </Toolbar>
    );
};
export default NavMain;
