import React, { useState } from 'react';
import MainImageBanner from '../../atoms/image/MainImageBanner';
import SmallBanner from '../../molecules/product/SmallBanner';

const ImageBanner = () => {
    const TextimgSrc = ['avengers.jpg', 'choco1.jpg', 'choco2.jpg', 'choco3.jpg'];
    const [mainImg, setMainImg] = useState<string>(TextimgSrc[0]);

    const changeMainImg = (newSrc: string) => {
        setMainImg(newSrc);
    };

    return (
        <div>
            <div className="mainImage">
                <MainImageBanner img={mainImg} size="LargeImg" />
            </div>
            <div className="smallBanner">
                <SmallBanner src={TextimgSrc} onMouseOver={changeMainImg} />
            </div>
        </div>
    );
};

export default ImageBanner;
