import React from 'react';
import Image from '@atoms/source/image/Image';
import Button from '@atoms/button/Button';
import clsN from 'classnames';
import style from './style/ImageButton.module.scss';

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
ImageButton.defaultProps = {
    ...Image.defaultProps,
    className: `${style.btnIcon}`,
}
export default ImageButton;