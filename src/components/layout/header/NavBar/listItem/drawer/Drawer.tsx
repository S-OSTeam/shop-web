import React from 'react';
import { Box, Divider, TypographyProps } from '@mui/material';
import Text from '@atoms/text/Text';
import CategoryHeader from '@components/layout/header/category/CategoryHeader';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/Drawer.module.scss';

interface DrawerProps {
    wrapperClsN?: string;
    mobHeaderClsN?: string;
    onClick?: ()=>void;
    variant?: TypographyProps['variant'];
    menuTitle: string;
}

const Drawer = (
    {
        wrapperClsN,
        mobHeaderClsN,
        onClick,
        variant,
        menuTitle
    }:DrawerProps
) => {

    return(
        <Box component='nav' className={clsN(`${styles['drawer-wrapper']}`, wrapperClsN)}>
            <Text text={menuTitle} onClick={onClick} variant={variant} className={clsN(`${styles['drawer-wrapper__mobile-header']}`, mobHeaderClsN)}/>
            <Divider/>
            <CategoryHeader />
        </Box>
    );
}
Drawer.propTypes = {
    wrapperClsN: PropTypes.string,
    mobHeaderClsN: PropTypes.string,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['h1','h2','h3','h4','h5','h6','subtitle1','subtitle2','body1','body2','caption','button','overline']),
    menuTitle: PropTypes.string.isRequired,
}
Drawer.defaultProps = {
    wrapperClsN: `${styles['drawer-wrapper']}`,
    mobHeaderClsN: `${styles['drawer-wrapper__mobile-header']}`,
    onClick: ()=>{},
    variant: 'body1'
}
export default Drawer;