import React, { useState } from 'react';
import clsN from 'classnames';
import { Box } from '@mui/material';
import Button from '@atoms/button/Button';
import HomeSwiper from '@organisms/home/swiper/HomeSwiper';
import Recommend from '@organisms/home/product/recommend/Recommend';
import Event from '@organisms/home/product/event/Event';
import Popular from '@organisms/home/product/popular/Popular';
import Pick from '@organisms/home/product/pick/Pick';
import ReviewList from '@organisms/home/Review/ReviewList';
import { ReviewResponse } from '@util/test/data/ReviewResponse';
import { itemResponse, swiperResponse } from '@util/test/data/ItemResponse';
import { EventInfoResponse } from '@util/test/data/EventResponse';
import styles from './styles/HomeTemplate.module.scss';

const HomeTemplate = () => {
    const items = itemResponse.map((item) => {
        return item;
    });
    const swiperitems = swiperResponse.map((item) => {
        return item;
    });

    const eventItems = EventInfoResponse.map((item) => {
        return item;
    });

    const InitialReviewCount = 5;

    const [reviews, setReviews] = useState(ReviewResponse.slice(0, InitialReviewCount));
    const [isMoreReview, setIsMoreReview] = useState(true);
    const loadMoreReviews = () => {
        const currentLength = reviews.length;
        const newReviews = ReviewResponse.slice(currentLength, currentLength + InitialReviewCount);
        setReviews([...reviews, ...newReviews]);
        const check = reviews.length + 5;
        if (ReviewResponse.length <= check) {
            setIsMoreReview(false);
        }
    };

    return (
        <Box className={clsN(styles.home)}>
            <HomeSwiper swiperItem={swiperitems} />
            <Box className={clsN(styles['home-product'])}>
                <Recommend recommendItem={swiperitems} />
                <Event eventItem={eventItems} />
                <Popular popularItems={items} content="월간 인기 상품" />
                <Pick />
                <Popular popularItems={items} content="신규 상품" />
                <ReviewList reviewItems={reviews} />
                {isMoreReview && (
                    <Box className={clsN(styles['review-more-container'])}>
                        <Button className={clsN(styles['review-more-btn'])} variant="text" onClick={loadMoreReviews}>
                            더 보기
                        </Button>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default HomeTemplate;
