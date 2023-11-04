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
        { label: 'One', value: item.pReviewOne },
        { label: 'Two', value: item.pReviewTwo },
        { label: 'Three', value: item.pReviewThree },
        { label: 'Four', value: item.pReviewFour },
        { label: 'Five', value: item.pReviewFive },
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
