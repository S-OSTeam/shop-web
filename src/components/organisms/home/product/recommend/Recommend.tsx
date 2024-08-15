import React from 'react';
import { Box } from '@mui/material';
import { ItemInterface } from '@util/test/interface/Item';
import clsN from 'classnames';
import Text from '@atoms/text/Text';
import Swiper from '@molecules/swiper/Swiper';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { EventInfo } from '@util/test/interface/Event';
import styles from './styles/Recommand.module.scss';

interface RecommendProps {
    recommendItem: ItemInterface[];
    onRecommendClick: (item: ItemInterface | EventInfo) => void;
}

/**
 * @param recommendItem
 * @param onRecommendClick
 * @constructor
 */
const Recommend = ({ recommendItem, onRecommendClick }: RecommendProps) => {
    /**
     * Swiper에 출력되는 item들의 값에서 image의 맨 처음만 리턴 해주는 함수
     */
    const items = recommendItem.map((item) => {
        return item.imageUrls[0];
    });

    /**
     * breakpoints를 설정해주는 코드
     * 0~767 한 화면에 slide 1개
     * 768~1023 한 화면에 slide 2개
     * 1024~ 한 화면에 slide 4개
     */
    const breakpoints: { [width: number]: SwiperOptions; [ratio: string]: SwiperOptions } = {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        },
    };

    /**
     * spaceBetween : slide간의 간격 조절
     * slidesPerView : 맨 처음에 보여주는 slide 갯수
     * isLoop : 맨뒤에서 맨앞으로 Loop 설정 false
     * breakpoints : 반응형으로 grid 갯수 설정
     */
    return (
        <Box className={clsN(styles['recommend-wrapper'])}>
            <Text className={clsN(styles['recommend-wrapper__title'])} text="추천 카테고리" />
            <Swiper
                itemImages={items}
                className={clsN(styles['recommend-wrapper__category'])}
                slideClsN={clsN(styles['recommend-wrapper__category-slide'])}
                btnClsN={clsN(styles['recommend-wrapper__category-btn'])}
                imgClsN={clsN(styles['recommend-wrapper__category-img'])}
                spaceBetween={8}
                slidesPerView={4}
                isLoop={false}
                breakpoints={breakpoints}
                items={recommendItem}
                onClick={onRecommendClick}
            />
        </Box>
    );
};

export default Recommend;
