import React from 'react';
import clsN from 'classnames';
import Button from '@components/atoms/button/Button';

export interface ImageTextBtnProps {
    className?: string;

    icon: React.ReactNode;
    text: string;
}

const ImgTextButton = ({ className, icon, text }: ImageTextBtnProps) => {
    return (
        <Button className={clsN(className)}>
            {icon}
            {text}
        </Button>
    );
};

export default ImgTextButton;
