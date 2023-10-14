import React, { useState } from 'react';
import MainImageBanner from '../../atoms/image/MainImageBanner';
import SmallBanner from '../../molecules/product/SmallBanner';

const ImageBanner = () => {
    // 테스트 이미지
    const TextimgSrc = ['avengers.jpg', 'choco1.jpg', 'choco2.jpg', 'choco3.jpg'];
    const [mainImg, setMainImg] = useState<string>(TextimgSrc[0]);

    // 실시간으로 MouseOver되면 메인 이미지 변경
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
