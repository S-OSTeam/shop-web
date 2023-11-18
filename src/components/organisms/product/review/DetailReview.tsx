import React from 'react';
import { Box, Stack } from '@mui/material';
import ImageCustom from '../../../atoms/image/ImageCustom';
import { ReviewData } from '../../../../util/GlobalTest';
import ReviewRecommendation from '../../../molecules/product/review/ReviewRecommendation';
import Review from '../../../molecules/product/review/Review';

interface DetailReviewProps {
    review: ReviewData;
}

const DetailReview = ({ review }: DetailReviewProps) => {
    return (
        <Box className="detailReview">
            <Stack className="reviewData" direction="row">
                <ImageCustom size="reviewImage" img={review.image} alt="초코 이미지" />
                <ReviewRecommendation review={review} />
                <Review review={review} />
            </Stack>
        </Box>
    );
};

export default DetailReview;
