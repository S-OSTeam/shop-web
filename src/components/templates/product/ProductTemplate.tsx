import React from 'react';
import { ItemInterface } from '@util/test/interface/Item';
import { Box } from '@mui/material';
import clsN from 'classnames';
import Thumbnail from '@organisms/product/info/Thumbnail';
import styles from './styles/ProductTemplate.module.scss';

interface ProductTemplateProps {
    className?: string;
    item: ItemInterface;
}

const ProductTemplate = ({ className, item }: ProductTemplateProps) => {
    return (
        <Box className={clsN(className, styles['product-info-wrapper'])}>
            <Thumbnail images={item.imageUrls} />

            <iframe
                title="HTML Content"
                srcDoc={item.content}
                style={{ width: '100%', height: '500px', border: 'none', marginTop: '80px' }}
            />
        </Box>
    );
};

export default ProductTemplate;
