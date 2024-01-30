import React from 'react';
import { Grid, Tooltip } from '@mui/material';
import clsN from 'classnames';
import styles from '@components/layout/header/menu/styles/HeaderMenu.module.scss';
import IconButtonComponent from '@molecules/button/iconButton/IconButtonComponent';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const HeaderMenu = () => {
    return (
        <Grid container justifyContent='space-between' className={clsN(styles.menu_stack)} direction='row'>
            <Grid item>
                <Tooltip title='즐겨찾기'>
                    <IconButtonComponent
                        className={styles.iconBtn}
                        iconClsN={styles.icon}
                        icon={<BookmarksIcon fontSize='inherit' />}
                    />
                </Tooltip>
            </Grid>
            <Grid item>
                <Tooltip title='관심상품'>
                    <IconButtonComponent
                        className={styles.iconBtn}
                        iconClsN={styles.icon}
                        icon={<FavoriteBorderIcon fontSize='inherit' />}
                    />
                </Tooltip>
            </Grid>
            <Grid item>
                <Tooltip title='장바구니'>
                    <IconButtonComponent
                        className={styles.iconBtn}
                        iconClsN={styles.icon}
                        icon={<ShoppingCartIcon fontSize='inherit' />}
                    />
                </Tooltip>
            </Grid>
        </Grid>
    );
};

export default HeaderMenu;
