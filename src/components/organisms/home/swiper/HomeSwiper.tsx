import React from 'react';
import { Item } from '@util/test/interface/Item';
import { Box } from '@mui/material';
import Swiper from '@molecules/swiper/Swiper';
import clsN from 'classnames';
import styles from './styles/HomeSwiper.module.scss';

interface HomeSwiperProps {
    swiperItem: Item[];
}

const HomeSwiper = ({ swiperItem }: HomeSwiperProps) => {
    const items = swiperItem.map((item) => {
        return item.imageUrls[0];
    });
    return (
        <Box className={clsN(styles['home-swiper'])}>
            <Swiper paginationClsN={styles['home-swiper__pagination']} items={items} isPagination />
        </Box>
    );
};

export default HomeSwiper;
