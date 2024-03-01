import React from 'react';
import { Box } from '@mui/material';
import { Item } from '@util/test/interface/Item';
import clsN from 'classnames';
import Text from '@atoms/text/Text';
import Swiper from '@molecules/swiper/Swiper';
import styles from './styles/Recommand.module.scss';

interface RecommendProps {
    recommendItem: Item[];
}

const Recommend = ({ recommendItem }: RecommendProps) => {
    const items = recommendItem.map((item) => {
        return item.imageUrls[0];
    });
    return (
        <Box className={clsN(styles['recommend-wrapper'])}>
            <Text className={clsN(styles['recommend-wrapper__title'])} text="추천 카테고리" />
            <Swiper
                items={items}
                btnClsN={clsN(styles['recommend-wrapper__category-btn'])}
                imgClsN={clsN(styles['recommend-wrapper__category-img'])}
                isFreeMode
                spaceBetween={8}
                slidesPerView={4}
                isLoop={false}
            />
        </Box>
    );
};

export default Recommend;
