/* eslint-disable */
import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { AppBar, Box, IconButton, Drawer as MuiDrawer, useMediaQuery } from '@mui/material';
import clsN from 'classnames';
import { useNavigate } from 'react-router-dom';
import styles from '@components/layout/header/styles/Header.module.scss';
import Drawer from '@components/layout/header/NavBar/listItem/drawer/Drawer';
import NavMain from '@components/layout/header/NavBar/NavMain/NavMain';

interface HeaderProps {
    /*
     * iframe 이 작동중인 도큐먼트를 통해 주입됨
     * 필요없으면 빼도됨
     * */
    window?: () => Window;
}
const Header = (props: HeaderProps) => {
    /* variable */
    const drawerWidth = 320; // 사이드 메뉴 너비 px 기준
    const { window } = props; // 윈도우 DOM을 props 를 통해 받아옴
    const [mobileOpen, setMobileOpen] = React.useState<boolean>(false); // 모바일 상태
    // useMediaQuery 로 일정수치 이내에만 true 아닐경우 false
    const isInTablet = useMediaQuery('(max-width: 1024px)');
    // 윈도우 사이즈 감지될 경우 dom.body 의 사이즈 가져옴
    const container = window !== undefined ? () => window().document.body : undefined;

    /* methods */
    // 사이드 메뉴 토글 이벤트
    const handleDrawerToggle = () => {
        setMobileOpen((prev) => !prev);
    };
    const navigate = useNavigate();
    const homeHandler = () => {
        navigate('/');
        console.log('-------------moving home-------------');
    };
    /* jsxElements */
    const userToggle = (
        <Box className={clsN(`${styles.mobileMenu}`)}>
            <IconButton>
                <LoginIcon fontSize="inherit" />
            </IconButton>
        </Box>
    );

    // result
    return (
        <Box className={styles.header} component="header">
            <AppBar className={clsN(`${styles.appBarNav}`)} component="nav">
                <NavMain
                    toolClsN={`${styles.toolBar}`}
                    logoTitle="DeamHome"
                    logoClsN={`${styles.logo}`}
                    onClick={handleDrawerToggle}
                    variant="text"
                    menuBtnClsN={clsN(`${styles.menuIconBtn}`)}
                    menuIconClsN={clsN(`${styles.menuIcon}`)}
                    loginClsN={clsN(`${styles.login}`, `${styles.loginTitle}`)}
                    navBarRightClsN={styles.rightNavBarArea}
                    navBarRightBtnClsN={clsN(`${styles.rightNavBarAreaBtn}`)}
                    navBarRightIconClsN={styles.rightNavBarAreaIcon}
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
                            wrapperClsN={`${styles.drawerWrapper}`}
                            mobHeaderClsN={`${styles.mobileHeader}`}
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
