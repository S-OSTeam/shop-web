import React from 'react';
import { Box } from '@mui/material';
import ProductInfoTemplate from '@templates/product/info/ProductInfoTemplate';
import { useLocation } from 'react-router-dom';

const ProductPage = () => {
    const location = useLocation();

    const { productItem } = location.state || {};

    return (
        <Box>
            <ProductInfoTemplate item={productItem} />
        </Box>
    );
};

export default ProductPage;
