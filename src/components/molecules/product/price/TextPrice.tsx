import React from 'react';
import { Stack } from '@mui/material';
import classNames from 'classnames';
import TextCustom from '../../../atoms/text/TextCustom';
import { ProductItem } from '../../../../util/GlobalTest';

interface TextPriceProps {
    cN1: string;
    cN2: string;
    cN3: string;
    item: ProductItem;
}

const TextPrice = ({ cN1, cN2, cN3, item }: TextPriceProps) => {
    const formatComma = (price: number) => {
        return price.toLocaleString();
    };
    return (
        <Stack className="textPrice" direction="row" spacing={0}>
            <TextCustom className={classNames(cN1)} content={formatComma(item.pPrice)} />
            <TextCustom className={classNames(cN2)} content="원" />
            <TextCustom className={classNames(cN3)} content={`마감일:D-${item.pDay}`} />
        </Stack>
    );
};

export default TextPrice;
