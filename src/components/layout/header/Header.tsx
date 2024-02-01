import React, { useState } from 'react';
import ListIcon from '@mui/icons-material/List';
import LoginIcon from '@mui/icons-material/Login';
import { Box, IconButton } from '@mui/material';
import clsN from 'classnames';
import Text from '@atoms/text/Text';
import { useNavigate } from 'react-router-dom';
import styles from '@components/layout/header/styles/Header.module.scss';
import CategoryHeader from '@components/layout/header/category/CategoryHeader';
import HeaderMenu from '@components/layout/header/menu/HeaderMenu';
import Button from '@atoms/button/Button';
import { login } from '@util/test/data/CategoryResponse';
import useGraphQL from '@hooks/useGraphQL';
import { Login } from '../../../api/apollo/gql/showLogin.gql';

const Header = () => {
    const navigate = useNavigate();
    const { data, gql } = useGraphQL({ query: Login, request: login, type: 'mutation' });
    const [isClick, setIsClick] = useState(false);
    const homeHandler = () => {
        console.log('-------------moving home-------------');
    };

    const onClick = () => {
        try {
            navigate('/');
            console.log(login);
            // console.log(`${require('get-mac-address')}`);
            gql({
                context: {
                    headers: {
                        'Authorization-Mac': '00-A5-54-E3-83-AC',
                    },
                },
                onCompleted: loginSuccess,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const loginSuccess = () => {
        console.log(data);
    };

    const categoryClick = () => {
        setIsClick(true);
        if (isClick) setIsClick(false);
    };

    const categoryToggle = (
        <Box className={clsN(`${styles.mobileMenu}`)}>
            <IconButton onClick={categoryClick}>
                <ListIcon fontSize="inherit" />
            </IconButton>
        </Box>
    );

    const userToggle = (
        <Box className={clsN(`${styles.mobileMenu}`)}>
            <IconButton onClick={onClick}>
                <LoginIcon fontSize="inherit" />
            </IconButton>
        </Box>
    );

    return (
        <header>
            <Box className={clsN(`${styles.navWrapper} ${styles.navContainer}`)}>
                <nav className={clsN(`${styles.nav} ${styles.container}`)}>
                    {categoryToggle}
                    <Text className={styles.logo} text="DeamHome" onClick={homeHandler} />
                    {userToggle}
                    <Box className={styles.desktopCategory}>
                        <CategoryHeader />
                    </Box>
                    <HeaderMenu />
                    <Button className={styles.login} variant="text" onClick={onClick}>
                        <Text className={styles.loginTitle} text="로그인" />
                    </Button>
                </nav>
                <Box
                    className={clsN(
                        `${styles.mobileMenu} ${isClick ? `${styles.isCheck}` : `${styles.mobileCategory}`}`,
                    )}
                >
                    <CategoryHeader />
                </Box>
            </Box>
        </header>
    );
};

export default Header;
