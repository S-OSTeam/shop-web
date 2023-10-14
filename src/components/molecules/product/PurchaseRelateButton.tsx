import React from 'react';
import { Stack } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CustomIconButton from '../../atoms/button/CustomIconButton';

const PurchaseRelateButton = () => {
    return (
        <Stack direction="row" spacing={0.5}>
            <CustomIconButton content="찜하기" icon={<FavoriteBorderIcon />} className="customIconButton" />
            <CustomIconButton content="장바구니" icon={<ShoppingBasketIcon />} className="customIconButton" />
            <CustomIconButton content="구매하기" className="customIconButton" />
        </Stack>
    );
};

export default PurchaseRelateButton;
