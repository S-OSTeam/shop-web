import React from 'react';
import HomeTemplate from '@templates/home/HomeTemplate';
import { ItemInterface } from '@util/test/interface/Item';
import { useNavigate } from 'react-router-dom';
import { EventInfo } from '@util/test/interface/Event';
import { ReviewResponse } from '@interface/review/Review';
import { Path } from '@util/Path';

const DeamHomePage = () => {
    const navigation = useNavigate();

    /* 메인 사용하는 홈 스와이퍼, 추천 카테고리, 이벤트 같은 모든 스와이퍼에 관한 클릭 이벤트를 실행하는 함수 이다.
     * 카테고리와 홈 스와이퍼 같은 경우에는 아이템을 데이터로 받고 Event는 이벤트 Response가 따로 존재하기 때문에 두가지의 타입을 나누어 받았다
     * type을 RECOMMEND와 SWIPER로 나누고 default를 SWIPER로 하고서 추천 카테고리 이벤트가 발생했을 때 RECOMMEND로 type의 값이 바뀐다.
     * item 타입 : ItemInterface(홈 스와이퍼, 추천 카테고리) | EventInfo(이벤트)
     * type 타입 : RECOMMEND(추천 카테고리) | SWIPER(홈 스와이퍼, 이벤트) */
    const onSwiperHandle = (item: ItemInterface | EventInfo, type: 'RECOMMEND' | 'SWIPER' = 'SWIPER') => {
        if ('id' in item) {
            // TODO 암호화/복호화 추후에 변경 예정
            const idEncode = btoa(item.id.toString()).slice(0, -1);
            navigation(`${Path.event}?id=${idEncode}`, {
                state: {
                    productItem: item,
                },
            });
        } else if (type !== 'RECOMMEND') {
            // TODO 암호화/복호화 추후에 변경 예정
            const idEncode = btoa(item.publicId.toString()).slice(0, -1);
            navigation(`${Path.product}?publicId=${idEncode}`, {
                state: {
                    productItem: item,
                },
            });
        } else {
            // TODO 암호화/복호화 추후에 변경 예정
            const idEncode = btoa(item.publicId.toString()).slice(0, -1);
            navigation(`${Path.category}?categoryId=${idEncode}`, {
                state: {
                    categoryId: item.publicId.toString(),
                },
            });
        }
    };

    /* 쇼핑몰 픽 상품 클릭 이벤트를 실행하는 함수이다.
     * 상세상품으로 가서 item 정보를 전달 해야되기 때문에 item을 인자로 받는다.
     * item 타입 : ItemInterface */
    const onPickHandle = (item: ItemInterface) => {
        // TODO 암호화/복호화 추후에 변경 예정
        const encodedPublicId = btoa(item.publicId.toString()).slice(0, -1);
        navigation(`${Path.product}?publicId=${encodedPublicId}`, {
            state: {
                productItem: item,
            },
        });
    };

    /* 쇼핑몰 인기 상품, 신상 상품 클릭 이벤트를 실행하는 함수이다.
     * 상세상품으로 가서 item 정보를 전달 해야되기 때문에 item을 인자로 받는다.
     * item 타입 : ItemInterface */
    const onProductHandle = (item: ItemInterface) => {
        // TODO 암호화/복호화 추후에 변경 예정
        const encodedPublicId = btoa(item.publicId.toString()).slice(0, -1);
        navigation(`${Path.product}?publicId=${encodedPublicId}`, {
            state: {
                productItem: item,
            },
        });
    };

    /* 쇼핑몰 상품 리뷰 클릭 이벤트를 실행하는 함수이다.
     * 상품 리뷰로 가서 item 리뷰 정보를 전달 해야되기 때문에 review를 인자로 받는다.
     * review 타입 : ReviewResponse */
    const onReviewHandle = (review: ReviewResponse) => {
        // TODO 암호화/복호화 추후에 변경 예정
        const encodeReviewId = btoa(review.reviewId.toString()).slice(0, -1);
        navigation(`${Path.review}?reviewId=${encodeReviewId}`, {
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
