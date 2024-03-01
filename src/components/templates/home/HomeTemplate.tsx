import React from 'react';
import clsN from 'classnames';
import { Box } from '@mui/material';
import HomeSwiper from '@organisms/home/swiper/HomeSwiper';
import Recommend from '@organisms/home/product/recommend/Recommend';
import { itemResponse } from '@util/test/data/ItemResponse';
import styles from './styles/HomeTemplate.module.scss';

const HomeTemplate = () => {
    const items = itemResponse.map((item) => {
        return item;
    });

    return (
        <Box className={clsN(styles.home)}>
            <HomeSwiper swiperItem={items} />
            <Box className={clsN(styles['home-product'])}>
                <Recommend recommendItem={items} />
            </Box>
        </Box>
    );
};

export default HomeTemplate;
