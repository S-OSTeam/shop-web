import React from 'react';
import { Stack } from '@mui/material';
import { ProductItem } from '../../../../util/GlobalTest';
import TextCustom from '../../../atoms/text/TextCustom';
import TextPrice from './TextPrice';

interface TotalPriceProps {
    item: ProductItem;
}

const TotalPrice = ({ item }: TotalPriceProps) => {
    return (
        <Stack className="totalPrice" direction="row" spacing={0}>
            <TextCustom className="totalTxt" content="Total Price" />
            <TextPrice cN1="totalPriceTxt" cN2="totalWonTxt" cN3="totalDeadline" item={item} />
        </Stack>
    );
};

export default TotalPrice;
