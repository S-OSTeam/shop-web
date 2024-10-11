import React from 'react';
import { ItemProps } from '@pages/product/ProductPage';
import { Box } from '@mui/material';
import clsN from 'classnames';
import Thumbnail from '@organisms/product/info/Thumbnail';
import styles from '../styles/ProductInfoTemplate.module.scss';

const ProductInfoTemplate = ({ item }: ItemProps) => {
    return (
        <Box className={clsN(styles['product-info-wrapper'])}>
            <Thumbnail images={item.imageUrls} />
        </Box>
    );
};

export default ProductInfoTemplate;
