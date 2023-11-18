import React from 'react';
import { Box } from '@mui/material';
import TextCustom from '../../../atoms/text/TextCustom';
import ReviewPercentage from '../../../molecules/product/review/ReviewPercentage';
import { ProductItem } from '../../../../util/GlobalTest';
import PieChartReview from '../../../molecules/product/review/PieChartReview';

interface ReviewDistributionProps {
    item: ProductItem;
}

const ReviewDistribution = ({ item }: ReviewDistributionProps) => {
    const chartData = [
        { label: '1점', value: item.pReviewOne },
        { label: '2점', value: item.pReviewTwo },
        { label: '3점', value: item.pReviewThree },
        { label: '4점', value: item.pReviewFour },
        { label: '5점', value: item.pReviewFive },
    ];

    return (
        <Box className="reviewDistribution">
            <TextCustom className="reviewTitle" content="구매후기" align="center" />
            <ReviewPercentage item={item} />
            <PieChartReview data={chartData} />
        </Box>
    );
};

export default ReviewDistribution;
