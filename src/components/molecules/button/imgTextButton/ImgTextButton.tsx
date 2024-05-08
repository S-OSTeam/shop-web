import React from 'react';
import clsN from 'classnames';
import Button from '@components/atoms/button/Button';

export interface ImageTextBtnProps {
    className?: string;
    img: React.ReactNode;
    text: string;
}

const ImgTextButton = ({ className, img, text }: ImageTextBtnProps) => {
    return (
        <Button className={clsN(className)}>
            {img}
            {text}
        </Button>
    );
};

export default ImgTextButton;
