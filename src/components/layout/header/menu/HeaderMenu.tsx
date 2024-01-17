import React from 'react';
import { Box } from '@mui/material';
import clsN from 'classnames';
import styles from '@components/layout/header/menu/styles/HeaderMenu.module.scss';
import IconButton from '@molecules/button/iconButton/IconButton';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Text from '@atoms/text/Text';

const HeaderMenu = () => {
    return (
        <Box className={clsN(styles.menu)}>
            <IconButton
                className={styles.iconBtn}
                iconClsN={styles.icon}
                icon={<BookmarksIcon fontSize="inherit" />}
                fontSize="inherit"
            />
            <Text text=" | " />
            <IconButton
                className={styles.iconBtn}
                iconClsN={styles.icon}
                icon={<FavoriteBorderIcon fontSize="inherit" />}
                fontSize="inherit"
            />
            <Text text=" | " />
            <IconButton
                className={styles.iconBtn}
                iconClsN={styles.icon}
                icon={<ShoppingCartIcon fontSize="inherit" />}
                fontSize="inherit"
            />
        </Box>
    );
};

export default HeaderMenu;
