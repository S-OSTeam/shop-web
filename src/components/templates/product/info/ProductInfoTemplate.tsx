import React from 'react';
import { Item } from '@util/test/interface/Item';
import { Box } from '@mui/material';
import Thumbnail from '@organisms/product/info/thumbnail/Thumbnail';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/ProductInfoTemplate.module.scss';

interface ProductInfoProps {
    className?: string;
    item: Item;
}

const ProductInfoTemplate = ({ className, item }: ProductInfoProps) => {
    return (
        <Box className={clsN(className, styles['product-info-wrapper'])}>
            <Thumbnail images={item.imageUrls} />
        </Box>
    );
};

ProductInfoTemplate.propTypes = {
    className: PropTypes.string,
};

ProductInfoTemplate.defaultProps = {
    className: styles[''],
};

export default ProductInfoTemplate;
