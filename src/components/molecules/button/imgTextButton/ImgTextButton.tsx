import React from 'react';
import clsN from 'classnames';
import Button from '@components/atoms/button/Button';

export interface ImageTextBtnProps {
    className?: string;
    img: React.ReactNode;
    text: string;
    onClick?: () => void;
}

const ImgTextButton = ({ className, img, text, onClick }: ImageTextBtnProps) => {
    return (
        <Button className={clsN(className)} onClick={onClick}>
            {img}
            {text}
        </Button>
    );
};

export default ImgTextButton;
