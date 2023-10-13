import React from 'react';
import { Box, Stack } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { TestProduct } from '../../templates/product/SubInfo';
import StarReview from '../../molecules/product/StarReview';
import IconBtn from '../../atoms/button/IconBtn';

interface SummeryProps {
    product: TestProduct;
}

const Summery = ({ product }: SummeryProps) => {
    return (
        <div>
            <StarReview product={product} />
            <Box className="pCode">상품 번호 : {product.pCode}</Box>
            <Stack className="pSharNBookMark" direction="row" spacing={0}>
                <div className="pName">{product.pName}</div>
                <div className="pShare">
                    <IconBtn icon={<ShareIcon />} />
                </div>
                <div className="pBookMark">
                    <IconBtn icon={<BookmarkBorderIcon />} />
                </div>
            </Stack>
        </div>
    );
};

export default Summery;
