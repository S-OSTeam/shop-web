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
import { Path } from '@util/Path';

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

    // "문의" 카테고리 찾기
    const inquiryCategory = categories.find((category) => category.title === '문의');

    /* 카테고리 이동하기 위해 카테고리에서 문의 카테고리를 제외한 나머지 카테고리는 카테고리 페이지로 이동한다.
     * publicId 타입 : string
     * encodePublicId는 base64를 통해서 publicId를 사용자에게 직접적으로 주소에 노출하지 않기 위해 해주었다.(추후에 암호화/복호화 예정)
     */
    const goToCategory = (publicId: string) => {
        if (inquiryCategory && publicId === inquiryCategory.publicId) {
            goToSupport();
        } else {
            const encodedPublicId = btoa(publicId.toString()).slice(0, -1);
            navigate(`${Path.category}?categoryId=${encodedPublicId}`, {
                state: {
                    categoryId: publicId.toString(),
                },
            });
        }
    };

    const handleHomeClick = () => {
        console.log('Home button clicked'); // 디버깅을 위해 추가
        navigate(`${Path.home}`, { replace: true });
    };

    const goToLogin = () => {
        navigate(`${Path.login}`, { replace: true });
    };

    const goToSupport = () => {
        navigate(`${Path.support}`);
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
