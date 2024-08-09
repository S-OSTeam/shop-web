import React, { useEffect, useState } from 'react';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import { AppBar, Box, Drawer as MuiDrawer } from '@mui/material';
import clsN from 'classnames';
import styles from '@components/layout/header/styles/Header.module.scss';
import Drawer from '@components/layout/header/NavBar/listItem/drawer/Drawer';
import NavMain from '@components/layout/header/NavBar/NavMain/NavMain';
import { EmptyCategoryTreeResponse, ItemCategoryTreeResponse } from '@interface/category/Category';
import useGraphQL from '@hooks/useGraphQL';
import { ALL_CATEGORY_TREE } from '@api/apollo/gql/queries/ItemCategoryTreeResponseQuery.gql';

interface HeaderProps {
    /*
     * iframe 이 작동중인 도큐먼트를 통해 주입됨
     * 필요없으면 빼도됨
     */
    window?: () => Window;
}
const Header = ({ window }: HeaderProps) => {
    /* variable */
    // 사이드 메뉴 너비 px 기준
    const drawerWidth = 300;
    // 헤더에 사용되는 상태
    const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
    // 전역 아톰을 활용한 커스텀 훅 사용
    const isInTablet = useDomSizeCheckHook(980);

    /* methods */
    // 사이드 메뉴 토글 이벤트
    const handleDrawerToggle = () => {
        setMobileOpen((prev) => !prev);
    };

    // 윈도우 사이즈 감지될 경우 dom.body 의 사이즈 가져옴
    const container = window !== undefined ? () => window().document.body : undefined;

    const [categories, setCategories] = useState<ItemCategoryTreeResponse[]>(EmptyCategoryTreeResponse);

    const { data: itemCategory, refetch: categoryRefetch } = useGraphQL({
        query: ALL_CATEGORY_TREE,
        type: 'query',
        request: {},
        option: {},
    });

    useEffect(() => {
        categoryRefetch().then();
        if (itemCategory) {
            setCategories(itemCategory.findAllItemCategoriesTree);
        }
    }, [itemCategory]);

    // result
    return (
        <Box className={styles.header} component="header">
            <AppBar className={clsN(styles['app-bar-nav'])} component="nav">
                <NavMain
                    categories={categories}
                    toolClsN={clsN(styles['app-bar-nav__tool-bar'])}
                    logoTitle="DeamHome"
                    logoClsN={clsN(styles['app-bar-nav__logo'])}
                    onClick={handleDrawerToggle}
                    variant="text"
                    mobileMenuBtn={clsN(styles['app-bar-nav__menu-icon-btn'])}
                    mobileMenuIconClsN={clsN(styles['app-bar-nav__menu-icon'])}
                    loginClsN={clsN(styles['app-bar-nav__login'])}
                    navBarRightClsN={clsN(styles['app-bar-nav__branch-nav-right'])}
                    navBarRightBtnClsN={clsN(styles['app-bar-nav__branch-nav-right__icon-btn'])}
                    navBarRightIconClsN={clsN(styles['app-bar-nav__branch-nav-right__icons'])}
                />
            </AppBar>
            {isInTablet && (
                <nav>
                    <MuiDrawer
                        className={styles.drawer}
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{ /* 모바일에 성능 효율 좋다함 */ keepMounted: true }}
                        sx={{ '& .MuiDrawer-paper': { width: drawerWidth } }}
                    >
                        <Drawer
                            categories={categories}
                            wrapperClsN={clsN(styles['drawer-wrapper'])}
                            mobHeaderClsN={clsN(styles['drawer-wrapper__mobile-header'])}
                            menuTitle="menu"
                            onClick={handleDrawerToggle}
                            variant="h1"
                        />
                    </MuiDrawer>
                </nav>
            )}
        </Box>
    );
};

export default Header;
