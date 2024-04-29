import React, { useState } from 'react';
import { Box } from '@mui/material';
import clsN from 'classnames';
import Image from '@atoms/source/image/Image';
import ImageGroup from '@molecules/image/imageGroup/ImageGroup';
import styles from './styles/Thumbnail.module.scss';

interface ThumbnailProps {
    images: string[];
}

const Thumbnail = ({ images }: ThumbnailProps) => {
    const [thumbnail, setThumbnail] = useState(images[0]);

    const mouseOverHandler = (imgPath: string) => {
        console.log(imgPath);
        setThumbnail(imgPath);
    };

    return (
        <Box className={clsN(styles['product-thumbnail-wrapper'])}>
            <Image className={clsN(styles['product-thumbnail-wrapper__large'])} imgPath={thumbnail} />
            <ImageGroup
                className={clsN(styles['product-thumbnail-wrapper__sub-wrapper'])}
                imgClsN={clsN(styles['product-thumbnail-wrapper__small'])}
                imgUrls={images}
                onMouseOver={mouseOverHandler}
            />
        </Box>
    );
};

export default Thumbnail;
