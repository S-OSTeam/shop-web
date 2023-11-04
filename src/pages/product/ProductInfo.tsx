import React from 'react';
import { Box, Stack } from '@mui/material';
import DetailDepth from '../../components/molecules/product/tab/DetailDepth';
import { Testaddress, TestProduct } from '../../util/GlobalTest';
import '../../styles/scss/product/_info.scss';
import ImageInfo from '../../components/organisms/product/info/ImageInfo';
import ProductSummary from '../../components/organisms/product/info/ProductSummary';

const ProductInfo = () => {
    return (
        <Box className="productInfo">
            <DetailDepth address={Testaddress} />
            <Stack className="info" direction="row">
                <ImageInfo />
                <ProductSummary item={TestProduct} />
            </Stack>
        </Box>
    );
};

export default ProductInfo;
