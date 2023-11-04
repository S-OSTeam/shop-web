import React from 'react';
import { Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import IconCustom from '../../../atoms/icon/IconCustom';
import TextCustom from '../../../atoms/text/TextCustom';
import { ProductItem } from '../../../../util/GlobalTest';

interface StarReviewProps {
    item: ProductItem;
}

const StarReview = ({ item }: StarReviewProps) => {
    const totalReview =
        item.pReviewOne * 1 + item.pReviewTwo * 2 + item.pReviewThree * 3 + item.pReviewFour * 4 + item.pReviewFive * 5;
    const totalReviewCount =
        item.pReviewOne + item.pReviewTwo + item.pReviewThree + item.pReviewFour + item.pReviewFive;

    const star = (item: number) => {
        const review: number = (totalReview / (totalReviewCount * 5)) * 5;
        if (review - item >= 0) return <StarIcon fontSize="inherit" />;
        if (review - item >= -0.5) return <StarHalfIcon fontSize="inherit" />;

        return <StarBorderIcon fontSize="inherit" />;
    };

    return (
        <Stack className="starReview" direction="row" spacing={0}>
            <IconCustom size="star" icon={star(1)} />
            <IconCustom size="star" icon={star(2)} />
            <IconCustom size="star" icon={star(3)} />
            <IconCustom size="star" icon={star(4)} />
            <IconCustom size="star" icon={star(5)} />
            <TextCustom content={`(${totalReviewCount}•후기)`} />
            <TextCustom content={`(${item.pPurchase}•구매)`} />
        </Stack>
    );
};

export default StarReview;
