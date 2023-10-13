import React from 'react';
import { Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { TestProduct } from '../../templates/product/SubInfo';
import StarInput from '../../atoms/review/StarInput';

interface StarReviewProps {
    product: TestProduct;
}

const StarReview = ({ product }: StarReviewProps) => {
    return (
        <Stack className="review" direction="row" spacing={0}>
            <StarInput icon={<StarIcon fontSize="inherit" />} />
            <StarInput icon={<StarIcon fontSize="inherit" />} />
            <StarInput icon={<StarIcon fontSize="inherit" />} />
            <StarInput icon={<StarHalfIcon fontSize="inherit" />} />
            <StarInput icon={<StarBorderIcon fontSize="inherit" />} />
            <div className="starReview">
                ({product.pReview}•후기) / ({product.pPurchase}•구매)
            </div>
        </Stack>
    );
};

export default StarReview;
