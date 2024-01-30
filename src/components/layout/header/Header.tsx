/* eslint-disable */
import React from 'react';
import ListIcon from '@mui/icons-material/List';
import LoginIcon from '@mui/icons-material/Login';
import {
    AppBar,
    Box,
    Container,
    IconButton,
    List,
    Toolbar,
    Drawer as MuiDrawer,
    Divider,
    ListSubheader, useMediaQuery,
} from '@mui/material';
import clsN from 'classnames';
import Text from '@atoms/text/Text';
import { useNavigate } from 'react-router-dom';
import styles from '@components/layout/header/styles/Header.module.scss';
import CategoryHeader from '@components/layout/header/category/CategoryHeader';
import MenuIcon from '@mui/icons-material/Menu';
import { ItemCategoryTreeResponse } from '@util/test/interface/Category';
import HeaderMenu from '@components/layout/header/menu/HeaderMenu';
import Button from '@atoms/button/Button';
import { Breakpoint } from '@mui/system/createTheme/createBreakpoints';

interface Props {
    /*
    * iframe 이 작동중인 도큐먼트를 통해 주입됨
    * 필요없으면 빼도됨
    * */
    window?: () => Window;
}

// type myBreakPoint = ['xs' | 'sm' | 'md' | 'lg' | 'xl'];

const Header = (props: Props) => {
    // 사이드 메뉴 너비 px 기준
    const drawerWidth = 320;
    // 윈도우 DOM을 props 를 통해 받아옴
    const { window } = props;
    // 모바일 상태
    const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
    // 사이드 메뉴 토글 이벤트
    const handleDrawerToggle = () => {
        setMobileOpen((prev) => !prev);
    };
    const isInTablet = useMediaQuery('(max-width: 1024px)');
    // 실질적인 사이드 메뉴 컴포넌트
    const Drawer = (
        <Box
            className={clsN(`${styles.drawer_wrapper}`)}
        >
            <Text text='Menu' onClick={handleDrawerToggle} variant='h1' className={styles.mobile_header} />
            <Divider />
            <CategoryHeader />
        </Box>);
    // 윈도우 사이즈 감지될 경우 dom.body 의 사이즈 가져옴
    const container = window !== undefined ? () => window().document.body : undefined;

    const navigate = useNavigate();

    const userToggle = (
        <Box className={clsN(`${styles.mobileMenu}`)}>
            <IconButton>
                <LoginIcon fontSize='inherit' />
            </IconButton>
        </Box>
    );

    const homeHandler = () => {
        navigate('/');
        console.log('-------------moving home-------------');
    };
    // 메뉴 컴포넌트
    const menuComponent = (
        <IconButton
            aria-label='open drawer'
            edge='start' onClick={handleDrawerToggle}
            className={styles.drawer_icon_btn}
        >
            <MenuIcon className={styles.drawer_icon}/>
        </IconButton>
    );
    // 모바일 JSX 메뉴
    const MobComponent = (
        <Toolbar className={`${styles.tool_bar}`}>
            <>
                {menuComponent}
                <HeaderMenu />
                <Button className={clsN(styles.login, styles.loginTitle)} variant='text'>로그인</Button>
            </>
        </Toolbar>
    );
    // 데스크탑 JSX 메뉴
    const DeskComponent = (
        <Toolbar className={`${styles.tool_bar}`}>
            <Text text='DeamHome' className={styles.logo} onClick={homeHandler} />
            <CategoryHeader />
            <HeaderMenu />
            <Button className={clsN(styles.login, styles.loginTitle)} variant='text'>로그인</Button>
        </Toolbar>
    );
    return (
        <Box className={styles.header} component='header'>
            <AppBar
                className={clsN(`${styles.app_bar_nav}`)}
                component='nav'
            >
                {isInTablet ? (MobComponent) : (DeskComponent)}
            </AppBar>
            {isInTablet && <nav>
                <MuiDrawer
                    className={styles.drawer}
                    container={container}
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // 모바일에 성능 효율 좋다함
                    }}
                    sx={{
                        '& .MuiDrawer-paper': { width: drawerWidth },
                    }}
                >
                    {Drawer}
                </MuiDrawer>
            </nav>}
        </Box>
    );
};

export default Header;
// <nav className={clsN(`${styles.nav} ${styles.container}`)}>
//     {categoryToggle}
//     <Text className={styles.logo} text='DeamHome' onClick={homeHandler} />
//     {userToggle}
//     <CategoryHeader />
//     <HeaderMenu />
//     <Button className={clsN(styles.login, styles.loginTitle)} variant='text'>로그인</Button>
// </nav>
