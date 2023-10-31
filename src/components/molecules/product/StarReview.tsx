import React from 'react';
import { Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { TestProduct } from '../../templates/product/SubInfo';
import CustomIcon from '../../atoms/icon/CustomIcon';

interface StarReviewProps {
    product: TestProduct;
}

const StarReview = ({ product }: StarReviewProps) => {
    return (
        <Stack className="review" direction="row" spacing={0}>
            <CustomIcon icon={<StarIcon fontSize="inherit" />} size="starIcon" />
            <CustomIcon icon={<StarIcon fontSize="inherit" />} size="starIcon" />
            <CustomIcon icon={<StarIcon fontSize="inherit" />} size="starIcon" />
            <CustomIcon icon={<StarHalfIcon fontSize="inherit" />} size="starIcon" />
            <CustomIcon icon={<StarBorderIcon fontSize="inherit" />} size="starIcon" />
            <div className="starReview">
                ({product.pReview}•후기) / ({product.pPurchase}•구매)
            </div>
        </Stack>
    );
};

export default StarReview;
