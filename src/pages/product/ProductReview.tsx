import React from 'react';
import { Box } from '@mui/material';
import '../../styles/scss/product/_review.scss';
import ReviewDistribution from '../../components/organisms/product/review/ReviewDistribution';
import { TestProduct } from '../../util/GlobalTest';
import ReviewList from '../../components/organisms/product/review/ReviewList';

const ProductReview = () => {
    return (
        <Box className="productReview">
            <ReviewDistribution item={TestProduct} />
            <ReviewList item={TestProduct} />
        </Box>
    );
};

export default ProductReview;
