import React from 'react';
import clsN from 'classnames';
import Button from '@atoms/button/Button';

export interface ImageBtnProps {
    className?: string;
    img: React.ReactNode;
}

const ImageButton = ({ className, img }: ImageBtnProps) => {
    return <Button className={clsN(className)}>{img}</Button>;
};

export default ImageButton;
