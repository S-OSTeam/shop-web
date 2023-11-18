import React from 'react';
import { Box } from '@mui/material';
import { ReviewData } from '../../../../util/GlobalTest';
import TextCustom from '../../../atoms/text/TextCustom';

interface ReviewProps {
    review: ReviewData;
}

const Review = ({ review }: ReviewProps) => {
    return (
        <Box className="review">
            <TextCustom content={review.reviewTitle} />
            <TextCustom className="reviewTxt" content={review.reviewDetail} />
        </Box>
    );
};

export default Review;
