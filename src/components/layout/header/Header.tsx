import React from 'react';
import ListIcon from '@mui/icons-material/List';
import LoginIcon from '@mui/icons-material/Login';
import { Box, IconButton } from '@mui/material';
import clsN from 'classnames';
import Text from '@atoms/text/Text';
import { useNavigate } from 'react-router-dom';
import CategoryHeader from '@components/layout/header/category/CategoryHeader';
import styles from '@components/layout/header/styles/Header.module.scss';
import HeaderMenu from '@components/layout/header/menu/HeaderMenu';
import Button from '@atoms/button/Button';

const Header = () => {
    const navigate = useNavigate();
    const categoryToggle = (
        <Box className={clsN(`${styles.mobileMenu}`)}>
            <IconButton>
                <ListIcon fontSize="inherit" />
            </IconButton>
        </Box>
    );

    const userToggle = (
        <Box className={clsN(`${styles.mobileMenu}`)}>
            <IconButton>
                <LoginIcon fontSize="inherit" />
            </IconButton>
        </Box>
    );

    const homeHandler = () => {
        navigate('/');
        console.log('-------------moving home-------------');
    };

    const categoryMouseOver = (title: string) => {
        console.log(title);
    };

    return (
        <header>
            <Box className={clsN(`${styles.navWrapper} ${styles.navContainer}`)}>
                <nav className={clsN(`${styles.nav} ${styles.container}`)}>
                    {categoryToggle}
                    <Text className={styles.logo} text="DeamHome" onClick={homeHandler} />
                    {userToggle}
                    <CategoryHeader onMouseOver={categoryMouseOver} />
                    <HeaderMenu />
                    <Button className={styles.login} variant="outlined">
                        <Text text="로그인" />
                    </Button>
                </nav>
            </Box>
        </header>
    );
};

export default Header;
