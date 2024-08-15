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
import { ReviewResponse as Review } from '@interface/review/Review';
import { itemResponse, swiperResponse } from '@util/test/data/ItemResponse';
import { EventInfoResponse } from '@util/test/data/EventResponse';
import { Item, ItemInterface } from '@util/test/interface/Item';
import { EventInfo } from '@util/test/interface/Event';
import styles from './styles/HomeTemplate.module.scss';

interface HomeTemplateProps {
    onHomeSwiperClick: (item: Item | ItemInterface | EventInfo) => void;
    onRecommendClick: (item: Item | ItemInterface | EventInfo) => void;
    onEventClick: (item: Item | ItemInterface | EventInfo) => void;
    onPickClick: (item: Item | ItemInterface) => void;
    onProductClick: (item: Item | ItemInterface) => void;
    onReviewClick: (review: Review) => void;
}

const HomeTemplate = ({ ...props }: HomeTemplateProps) => {
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
            <HomeSwiper onHomeSwiperClick={props.onHomeSwiperClick} swiperItem={swiperitems} />
            <Box className={clsN(styles['home-product'])}>
                <Recommend onRecommendClick={props.onRecommendClick} recommendItem={swiperitems} />
                <Event eventItem={eventItems} onEventClick={props.onEventClick} />
                <Popular onProductClick={props.onProductClick} popularItems={items} content="월간 인기 상품" />
                <Pick onClick={props.onPickClick} />
                <Popular onProductClick={props.onProductClick} popularItems={items} content="신규 상품" />
                <ReviewList reviewItems={reviews} onReviewClick={props.onReviewClick} />
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
