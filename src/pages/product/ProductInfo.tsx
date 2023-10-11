import React from 'react';
import { Box } from '@mui/material';
import DetailDepth from '../../components/molecules/product/DetailDepth';

const ProductInfo = () => {
    const address = ['뎁스1', '뎁스2', '뎁스3', '아이템'];
    return (
        <div>
            <Box className="detailDepth">
                <DetailDepth address={address} />
            </Box>
            <Box className="info">
                <div />
            </Box>
        </div>
    );
};

export default ProductInfo;
