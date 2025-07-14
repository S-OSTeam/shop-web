/* eslint-disable */
import React from 'react';
import { ProductItem } from '@interface/product/Product';
import { Box } from '@mui/material';
import classNames from 'classnames';
import ProductInfo from '@templates/product/productInfo/ProductInfo';
import { useCategories } from '@hooks/category/useCategory';

export interface ProductTemplateProps {
    categories: useCategories;
    item: ProductItem;
}

const ProductTemplate = ({ categories, item }: ProductTemplateProps) => {
    return (
        <Box className={classNames()}>
            <ProductInfo item={item} categories={categories} />
        </Box>
    );
};

export default ProductTemplate;
