import React from 'react';
import { Box } from '@mui/material';
import ReviewPriorityButton from '../../../molecules/product/buttons/ReviewPriorityButton';
import { ProductItem, ReviewData } from '../../../../util/GlobalTest';
import DetailReview from '../../../organisms/product/review/DetailReview';

interface ReviewListProps {
    item: ProductItem;
    reviews: ReviewData[];
    onClick?: () => void;
}

const ReviewList = ({ item, reviews, onClick }: ReviewListProps) => {
    const totalReview = item.pReviewOne + item.pReviewTwo + item.pReviewThree + item.pReviewFour + item.pReviewFive;
    return (
        <Box className="reviewList">
            <ReviewPriorityButton totalReview={totalReview} onClick={onClick} />
            {reviews.map((review) => (
                <DetailReview review={review} />
            ))}
        </Box>
    );
};

export default ReviewList;
