import React, { useState } from 'react';
import { Box } from '@mui/material';
import '../../styles/scss/product/_review.scss';
import ReviewDistribution from '../../components/organisms/product/review/ReviewDistribution';
import { ReviewData, Reviews, TestProduct } from '../../util/GlobalTest';
import ReviewList from '../../components/templates/product/review/ReviewList';
import PaginationCustom from '../../components/atoms/pagination/PaginationCustom';

const ProductReview = () => {
    const [page, setPage] = useState<number>(1);
    const totalreviewData = () => {
        const reviews: ReviewData[] = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < 10; i++) {
            reviews.push(Reviews as ReviewData);
        }
        return reviews;
    };
    const onChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        // page+1 값으로 변하면 index번호를 page관련 값을 이용해서 내용 바꿔주기
        if (event) setPage(value);
    };

    const reviewData = () => {
        const reviews: ReviewData[] = [];
        const total = totalreviewData();
        let cnt: number = 0;
        // const page = 1;
        if (total.length - page * 4 < 0) {
            cnt = total.length;
        } else {
            cnt = page * 4;
        }
        // eslint-disable-next-line no-plusplus
        for (let i = (page - 1) * 4; i < cnt; i++) {
            reviews.push(total[i]);
        }

        return reviews;
    };

    const count = () => {
        const total = totalreviewData();
        const cnt = total.length / 4;
        return Math.round(cnt);
    };

    return (
        <Box className="productReview">
            <ReviewDistribution item={TestProduct} />
            <ReviewList item={TestProduct} reviews={reviewData()} />
            <Box className="reviewPagination">
                <PaginationCustom count={count()} showOpt={false} page={page} onChange={onChangePage} />
            </Box>
        </Box>
    );
};

export default ProductReview;
