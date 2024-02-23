import React from 'react';
import { itemResponse } from '@util/test/data/ItemResponse';
import { Box } from '@mui/material';
import Swiper from '@molecules/swiper/Swiper';

const DeamHomePage = () => {
    const datas = itemResponse.map((item) => {
        return item.imageUrls[0];
    });
    return (
        <div>
            <Box component="div">
                <Swiper items={datas} />
            </Box>
        </div>
    );
};

export default DeamHomePage;
