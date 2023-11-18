import React from 'react';
import { Stack } from '@mui/material';
import { ProductItem } from '../../../../util/GlobalTest';
import TextCustom from '../../../atoms/text/TextCustom';

interface ReviewPercentageProps {
    item: ProductItem;
}

const ReviewPercentage = ({ item }: ReviewPercentageProps) => {
    const totalReview = item.pReviewOne + item.pReviewTwo + item.pReviewThree + item.pReviewFour + item.pReviewFive;
    const oneReview = item.pReviewOne / totalReview;
    const twoReview = item.pReviewTwo / totalReview;
    const threeReview = item.pReviewThree / totalReview;
    const fourReview = item.pReviewFour / totalReview;
    const fiveReview = item.pReviewFive / totalReview;

    const formatPercentage = (review: number) => {
        return `${(review * 100).toFixed(0)}%`;
    };

    return (
        <Stack className="reviewPercentage" direction="row" spacing={2}>
            <TextCustom className="reviewScore five" content={`5점: ${formatPercentage(fiveReview)}`} align="center" />
            <TextCustom className="reviewScore four" content={`4점: ${formatPercentage(fourReview)}`} align="center" />
            <TextCustom
                className="reviewScore three"
                content={`3점: ${formatPercentage(threeReview)}`}
                align="center"
            />
            <TextCustom className="reviewScore two" content={`2점: ${formatPercentage(twoReview)}`} align="center" />
            <TextCustom className="reviewScore one" content={`1점: ${formatPercentage(oneReview)}`} align="center" />
        </Stack>
    );
};

export default ReviewPercentage;
