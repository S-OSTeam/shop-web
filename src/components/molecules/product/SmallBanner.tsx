import React from 'react';
import SmallImageBanner from '../../atoms/image/SmallImageBanner';

interface SmallBannerProps {
    src: string[];
    onMouseOver?: (imgSrc: string) => void;
}

const SmallBanner = ({ src, onMouseOver }: SmallBannerProps) => {
    return (
        <div>
            {src.map((imgSrc) => (
                <SmallImageBanner img={imgSrc} size="smallImg" onMouseOver={() => onMouseOver && onMouseOver(imgSrc)} />
            ))}
        </div>
    );
};

SmallBanner.default = {
    onMouseOver: undefined,
};

export default SmallBanner;
