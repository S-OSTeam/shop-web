import React from 'react';
import { Box } from '@mui/material';
import { ItemProps } from '@pages/product/ProductPage';

const ProductDetailInfo = ({ item }: ItemProps) => {
    return (
        <Box>
            <iframe
                title="HTML Content"
                srcDoc={item.content}
                style={{ width: '100%', height: '500px', border: 'none', marginTop: '80px' }}
            />
        </Box>
    );
};

export default ProductDetailInfo;
