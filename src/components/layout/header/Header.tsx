import React from 'react';
import ListIcon from '@mui/icons-material/List';
import LoginIcon from '@mui/icons-material/Login';
import { Box, IconButton } from '@mui/material';
import clsN from 'classnames';
import Text from '@atoms/text/Text';
import { useNavigate } from 'react-router-dom';
import styles from '@components/layout/header/styles/Header.module.scss';
import CategoryHeader from '@components/layout/header/category/CategoryHeader';

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

    const categoryClick = (title: string) => {
        console.log(title);
    };

    return (
        <header>
            <Box className={clsN(`${styles.navWrapper} ${styles.navContainer}`)}>
                <nav className={clsN(`${styles.nav} ${styles.container}`)}>
                    {categoryToggle}
                    <Text className={styles.logo} text="DeamHome" onClick={homeHandler} />
                    {userToggle}
                    <CategoryHeader onClick={categoryClick} />
                </nav>
            </Box>
        </header>
    );
};

export default Header;
