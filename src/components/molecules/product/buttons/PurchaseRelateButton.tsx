import React from 'react';
import { Stack } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ButtonCustom from '../../../atoms/button/ButtonCustom';
import IconCustom from '../../../atoms/icon/IconCustom';
import TextCustom from '../../../atoms/text/TextCustom';

const PurchaseRelateButton = () => {
    return (
        <Stack className="purchaseRelateButton" direction="row" spacing={0.5}>
            <ButtonCustom className="relateButton">
                <IconCustom size="relateIcon" icon={<FavoriteBorderIcon fontSize="inherit" />} />
                <TextCustom className="relateTxt" content="찜하기" />
            </ButtonCustom>
            <ButtonCustom className="relateButton">
                <IconCustom size="relateIcon" icon={<ShoppingBasketIcon fontSize="inherit" />} />
                <TextCustom className="relateTxt" content="장바구니" />
            </ButtonCustom>
            <ButtonCustom className="relateButton">
                <TextCustom className="relateTxt" content="구매하기" />
            </ButtonCustom>
        </Stack>
    );
};

export default PurchaseRelateButton;
