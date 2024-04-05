import React from 'react';
import clsN from 'classnames';
import { Box } from '@mui/material';
import HomeSwiper from '@organisms/home/swiper/HomeSwiper';
import Recommend from '@organisms/home/product/recommend/Recommend';
import Event from '@organisms/home/product/event/Event';
import Popular from '@organisms/home/product/popular/Popular';
import Pick from '@organisms/home/product/pick/Pick';
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
                <Event eventItem={items} />
                <Popular popularItems={items} content="월간 인기 상품" />
                <Pick />
                <Popular popularItems={items} content="신규 상품" />
            </Box>
        </Box>
    );
};

export default HomeTemplate;
