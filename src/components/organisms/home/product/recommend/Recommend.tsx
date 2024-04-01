import React from 'react';
import { Box } from '@mui/material';
import { Item } from '@util/test/interface/Item';
import clsN from 'classnames';
import Text from '@atoms/text/Text';
import Swiper from '@molecules/swiper/Swiper';
import { SwiperOptions } from 'swiper/types/swiper-options';
import styles from './styles/Recommand.module.scss';

interface RecommendProps {
    recommendItem: Item[];
}

const Recommend = ({ recommendItem }: RecommendProps) => {
    const items = recommendItem.map((item) => {
        return item.imageUrls[0];
    });

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

    return (
        <Box className={clsN(styles['recommend-wrapper'])}>
            <Text className={clsN(styles['recommend-wrapper__title'])} text="추천 카테고리" />
            <Swiper
                items={items}
                className={clsN(styles['recommend-wrapper__category'])}
                slideClsN={clsN(styles['recommend-wrapper__category-slide'])}
                btnClsN={clsN(styles['recommend-wrapper__category-btn'])}
                imgClsN={clsN(styles['recommend-wrapper__category-img'])}
                spaceBetween={8}
                slidesPerView={4}
                isLoop={false}
                breakpoints={breakpoints}
            />
        </Box>
    );
};

export default Recommend;
