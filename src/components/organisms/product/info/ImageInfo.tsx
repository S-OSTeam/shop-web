import React, { useState } from 'react';
import { Box } from '@mui/material';
import { TestImage } from '../../../../util/GlobalTest';
import ImageCustom from '../../../atoms/image/ImageCustom';
import SelectBanner from '../../../molecules/product/banner/SelectBanner';

const ImageInfo = () => {
    const [mainImg, setMainImg] = useState<string>(TestImage[0]);

    // 실시간으로 MouseOver되면 메인 이미지 변경
    const changeMainImg = (newSrc: string) => {
        setMainImg(newSrc);
    };

    return (
        <Box className="imageInfo">
            <ImageCustom size="mainImage" img={mainImg} alt={mainImg} />
            <SelectBanner className="selectBanner" images={TestImage} onMouseOver={changeMainImg} />
        </Box>
    );
};

export default ImageInfo;
