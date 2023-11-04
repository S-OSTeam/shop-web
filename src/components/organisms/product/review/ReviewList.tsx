import React from 'react';
import { Box } from '@mui/material';
import ReviewPriorityButton from '../../../molecules/product/button/ReviewPriorityButton';
import { ProductItem } from '../../../../util/GlobalTest';

interface ReviewListProps {
    item: ProductItem;
    onClick?: () => void;
}

const ReviewList = ({ item, onClick }: ReviewListProps) => {
    const totalReview = item.pReviewOne + item.pReviewTwo + item.pReviewThree + item.pReviewFour + item.pReviewFive;
    return (
        <Box className="reviewList">
            <ReviewPriorityButton totalReview={totalReview} onClick={onClick} />
        </Box>
    );
};

export default ReviewList;
