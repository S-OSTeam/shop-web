import React from 'react';
import { Box } from '@mui/material';
import classNames from 'classnames';
import ButtonCustom from '../../../atoms/button/ButtonCustom';
import ImageCustom from '../../../atoms/image/ImageCustom';

interface SelectBannerProps {
    className: string;
    images: string[];
    onMouseOver?: (imgSrc: string) => void;
}

const SelectBanner = ({ className, images, onMouseOver }: SelectBannerProps) => {
    return (
        <Box className={classNames(className)}>
            {images.map((image) => (
                <ButtonCustom className="bannerBtn" onMouseOver={() => onMouseOver && onMouseOver(image)}>
                    <ImageCustom size="banner" img={image} alt={image} />
                </ButtonCustom>
            ))}
            ;
        </Box>
    );
};

SelectBanner.defaultProps = {
    onMouseOver: undefined,
};

export default SelectBanner;
