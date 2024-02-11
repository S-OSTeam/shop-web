import React from 'react';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import Image from '@atoms/source/image/Image';
import Button from '@atoms/button/Button';

export interface ImageBtnProps {
    className?: string;
    imgClsN?: string;
    imgPath: string;
    alt?: string;
}


const ImageButton = (
    {
        className,
        imgClsN,
        imgPath,
        alt
    }:ImageBtnProps) => {
    return(

        <Button
            className={clsN(className, `${style.imgButton}`)}
        >
            <Image
                className={clsN(imgClsN, `${style.img}`)}
                imgPath={imgPath}
                alt={alt}
            />
        </Button>
    )
};
ImageButton.propTypes = {
    ...Image.propTypes,
    imgClsN: PropTypes.string,
    className: PropTypes.string,
};
ImageButton.defaultProps = {
    ...Image.defaultProps,
    className: `${style.btnIcon}`,
};
export default ImageButton;
