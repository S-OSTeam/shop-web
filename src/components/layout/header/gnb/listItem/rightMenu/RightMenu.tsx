import React from 'react';
import { Grid, Tooltip } from '@mui/material';
import IconButton from '@molecules/button/iconButton/IconButton';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from '@components/layout/header/gnb/listItem/rightMenu/styles/RightMenu.module.scss';

interface HeaderMenuProps {
    // 네비게이션 우측 래퍼 클래스명
    gnb_r_ClsN?: string;
    // 아이콘버튼 클래스명
    icnBtnClsN?: string;
    // 아이콘버튼 내에 있는 클래스명
    iconClsN?: string;
}

const RightMenu = ({ gnb_r_ClsN, icnBtnClsN, iconClsN }: HeaderMenuProps) => {
    const title = ['즐겨찾기', '관심상품', '장바구니'];
    const iconProvider = [
        <BookmarksIcon className={clsN(styles.icon, iconClsN)} />,
        <FavoriteBorderIcon className={clsN(styles.icon, iconClsN)} />,
        <ShoppingCartIcon className={clsN(styles.icon, iconClsN)} />,
    ];
    const gridItemProvider = title.map((item, idx) => {
        return (
            <Grid item>
                <Tooltip title={item}>
                    {/* div 를 감싸야 ToolTip hover 기능 작동 */}
                    <div>
                        <IconButton className={clsN(styles.iconBtn, icnBtnClsN)} icon={iconProvider[idx]} />
                    </div>
                </Tooltip>
            </Grid>
        );
    });
    return (
        <Grid
            container
            justifyContent="space-between"
            className={clsN(`${styles.menu_stack}`, gnb_r_ClsN)}
            direction="row"
        >
            {gridItemProvider}
        </Grid>
    );
};
RightMenu.propTypes = {
    gnb_r_ClsN: PropTypes.string,
    icnBtnClsN: PropTypes.string,
    iconClsN: PropTypes.string,
};
RightMenu.defaultProps = {
    gnb_r_ClsN: `${styles.menu_stack}`,
    icnBtnClsN: `${styles.iconBtn}`,
    iconClsN: `${styles.icon}`,
};
export default RightMenu;
