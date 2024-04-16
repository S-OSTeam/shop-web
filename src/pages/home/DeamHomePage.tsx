import React from 'react';
import { itemResponse } from '@util/test/data/ItemResponse';
import { Box } from '@mui/material';
import Swiper from '@molecules/swiper/Swiper';
import Exaple from '@atoms/example/Exaple';

const DeamHomePage = () => {
    const datas = itemResponse.map((item) => {
        return item.imageUrls[0];
    });
    return (
        <div>
            <Box component="div">
                <Swiper items={datas} isPagination isNavigation isAutoPlay />
                <Exaple isBackBgn>hi</Exaple>
            </Box>
        </div>
    );
};

export default DeamHomePage;
