import React, { useState } from 'react';
import '../../styles/Banner.scss';
import classNames from 'classnames';
import SwiperCore from 'swiper';
import BannerInfo, { BannerInfoProps } from '../atoms/BannerInfo';
import SwiperCustom from '../atoms/SwiperCustom';

interface BannerProps {
    imgPath: string[];
    infoList: BannerInfoProps[];
}

const Banner = ({ imgPath, infoList }: BannerProps) => {
    const [info, setInfo] = useState(infoList[0]);
    const onChange = (swiper: SwiperCore) => {
        setInfo(infoList[swiper.realIndex]);
    };

    return (
        <div className={classNames('BannerWrapper')}>
            <BannerInfo des={info.des} name={info.name} />
            <SwiperCustom imgPath={imgPath} onChange={onChange} />
        </div>
    );
};
export default Banner;
