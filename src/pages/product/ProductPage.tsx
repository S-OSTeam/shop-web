/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import ProductTemplate from '@templates/product/ProductTemplate';
import useCategory, { useEmptyCategories } from '@hooks/category/useCategory';

const ProductPage = () => {
    const location = useLocation();
    const { productItem } = location.state || {};
    const { categories, fetchCategoriesById } = useCategory(productItem?.categoryPublicId || '');

    useEffect(() => {
        console.log('페이지 이동');
        if (productItem.categoryPublicId) {
            fetchCategoriesById(productItem?.categoryPublicId);
        }
    }, [productItem]);

    return (
        <Box>
            <ProductTemplate item={productItem} categories={categories} />
        </Box>
    );
};

export default ProductPage;
