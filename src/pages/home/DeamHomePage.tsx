import React from 'react';
import HomeTemplate from '@templates/home/HomeTemplate';
import { ItemInterface } from '@util/test/interface/Item';
import { useNavigate } from 'react-router-dom';
import { EventInfo } from '@util/test/interface/Event';
import { ReviewResponse } from '@interface/review/Review';

const DeamHomePage = () => {
    const navigation = useNavigate();

    const onSwiperHandle = (item: ItemInterface | EventInfo, type: 'RECOMMEND' | 'SWIPER' = 'SWIPER') => {
        if ('id' in item) {
            const idEncode = btoa(item.id.toString()).slice(0, -1);
            navigation(`/shop/event?id=${idEncode}`, {
                state: {
                    productItem: item,
                },
            });
        } else if (type !== 'RECOMMEND') {
            const idEncode = btoa(item.publicId.toString()).slice(0, -1);
            navigation(`/shop/product?publicId=${idEncode}`, {
                state: {
                    productItem: item,
                },
            });
        } else {
            const idEncode = btoa(item.publicId.toString()).slice(0, -1);
            navigation(`/shop/category?categoryId=${idEncode}`, {
                state: {
                    categoryId: item.publicId.toString(),
                },
            });
        }
    };

    const onPickHandle = (item: ItemInterface) => {
        const encodedPublicId = btoa(item.publicId.toString()).slice(0, -1);
        navigation(`/shop/product?publicId=${encodedPublicId}`, {
            state: {
                productItem: item,
            },
        });
    };

    const onProductHandle = (item: ItemInterface) => {
        const encodedPublicId = btoa(item.publicId.toString()).slice(0, -1);
        navigation(`/shop/product?publicId=${encodedPublicId}`, {
            state: {
                productItem: item,
            },
        });
    };

    const onReviewHandle = (review: ReviewResponse) => {
        const encodeReviewId = btoa(review.reviewId.toString()).slice(0, -1);
        navigation(`/review?reviewId=${encodeReviewId}`, {
            state: {
                userReview: review,
            },
        });
    };

    return (
        <HomeTemplate
            onSwiperClick={(item) => onSwiperHandle(item, 'SWIPER')}
            onRecommendClick={(item) => onSwiperHandle(item, 'RECOMMEND')}
            onPickClick={onPickHandle}
            onProductClick={onProductHandle}
            onReviewClick={onReviewHandle}
        />
    );
};

export default DeamHomePage;
