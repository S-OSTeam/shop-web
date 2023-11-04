import React from 'react';
import { Box } from '@mui/material';
import Tags from '../../../molecules/product/tag/Tags';
import { ProductItem, TestTags } from '../../../../util/GlobalTest';
import '../../../../styles/scss/product/_summary.scss';
import StarReview from '../../../molecules/product/review/StarReview';
import TextCustom from '../../../atoms/text/TextCustom';
import ProductTitle from '../../../molecules/product/title/ProductTitle';
import TextPrice from '../../../molecules/product/price/TextPrice';
import DeliveryPrice from '../../../molecules/product/price/DeliveryPrice';
import ProductOption from '../../../molecules/product/option/ProductOption';
import TotalPrice from '../../../molecules/product/price/TotalPrice';
import PurchaseRelateButton from '../../../molecules/product/button/PurchaseRelateButton';

interface ProductSummaryProps {
    item: ProductItem;
}

const ProductSummary = ({ item }: ProductSummaryProps) => {
    return (
        <Box className="productSummary">
            <Tags tags={TestTags} />
            <StarReview item={item} />
            <TextCustom className="pCode" content={`상품 번호 : ${item.pCode}`} />
            <ProductTitle title={item.pName} />
            <TextPrice cN1="price" cN2="money" cN3="deadline" item={item} />
            <TextCustom className="pInfo" content={`원작:${item.pOrigin}`} />
            <TextCustom className="pInfo" content={`재질:${item.pMaterial}`} />
            <TextCustom className="pInfo" content={`크기:${item.pSize}cm/${item.pSize}cm`} />
            <TextCustom className="pInfo" content={`무게:${item.pWeight}kg`} />
            <DeliveryPrice />
            <ProductOption />
            <TotalPrice item={item} />
            <PurchaseRelateButton />
        </Box>
    );
};

export default ProductSummary;
