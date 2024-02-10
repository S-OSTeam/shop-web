import React from 'react';
import { Grid, Tooltip } from '@mui/material';
import IconButton from '@molecules/button/iconButton/IconButton';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from '@components/layout/header/NavBar/listItem/rightMenu/styles/RightMenu.module.scss';

interface HeaderMenuProps {
    // 네비게이션 우측 래퍼 클래스명
    navBarRightClsN?: string;
    // 아이콘버튼 클래스명
    icnBtnClsN?: string;
    // 아이콘버튼 내에 있는 클래스명
    iconClsN?: string;
}

const RightMenu = ({ navBarRightClsN, icnBtnClsN, iconClsN }: HeaderMenuProps) => {
    const title = ['즐겨찾기', '관심상품', '장바구니'];
    const iconProvider = [
        <BookmarksIcon className={clsN(styles['stack-menu__icon'], iconClsN)} />,
        <FavoriteBorderIcon className={clsN(styles['stack-menu__icon'], iconClsN)} />,
        <ShoppingCartIcon className={clsN(styles['stack-menu__icon'], iconClsN)} />,
    ];
    const gridItemProvider = title.map((item, idx) => {
        return (
            <Grid item>
                <Tooltip title={item}>
                    {/* div 를 감싸야 ToolTip hover 기능 작동 */}
                    <div>
                        <IconButton className={clsN(styles['stack-menu__icon-btn'], icnBtnClsN)} icon={iconProvider[idx]} />
                    </div>
                </Tooltip>
            </Grid>
        );
    });
    return (
        <Grid
            container
            justifyContent="space-between"
            className={clsN(`${styles['stack-menu']}`, navBarRightClsN)}
            direction="row"
        >
            {gridItemProvider}
        </Grid>
    );
};
RightMenu.propTypes = {
    navBarRightClsN: PropTypes.string,
    icnBtnClsN: PropTypes.string,
    iconClsN: PropTypes.string,
};
RightMenu.defaultProps = {
    navBarRightClsN: `${styles['stack-menu']}`,
    icnBtnClsN: `${styles['stack-menu__icon-btn']}`,
    iconClsN: `${styles['stack-menu__icon']}`,
};
export default RightMenu;
