import React from 'react';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import Image from '@atoms/source/image/Image';
import Button from '@atoms/button/Button';
import style from './style/ImageButton.module.scss';

export interface ImageBtnProps {
    className?: string;
    imgClsN?: string;
    imgPath: string;
    alt?: string;
}


export const ImageButton = (
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
ImageButton.defaultProps = {
    className: `${style.btnIcon}`,
};
export default ImageButton;
