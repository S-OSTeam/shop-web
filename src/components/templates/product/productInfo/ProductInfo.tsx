/* eslint-disable */
import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import classNames from 'classnames';
import ProductTab from '@organisms/product/info/productTab';
import { ProductTemplateProps } from '@templates/product/ProductTemplate';

const ProductInfo = ({ item, categories }: ProductTemplateProps) => {
    return (
        <Box className={classNames()}>
            <ProductTab />
        </Box>
    );
};

export default ProductInfo;
