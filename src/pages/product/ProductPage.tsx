import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductInfoTemplate from '@templates/product/info/ProductInfoTemplate';
import { Box } from '@mui/material';
import { ItemInterface } from '@util/test/interface/Item';
import ProductDetailInfo from '@templates/product/detailInfo/ProductDetailInfo';

export interface ItemProps {
    item: ItemInterface;
}

const ProductPage = () => {
    const location = useLocation();

    const { productItem } = location.state || {};

    return (
        <Box>
            <ProductInfoTemplate item={productItem} />
            <ProductDetailInfo item={productItem} />
        </Box>
    );
};

export default ProductPage;
