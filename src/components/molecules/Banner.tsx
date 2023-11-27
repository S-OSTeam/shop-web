import React, { useState } from 'react';
import '../../styles/Banner.scss';
import classNames from 'classnames';
import SwiperCore from 'swiper';
import SwiperCustom from '../atoms/swiper/SwiperCustom';
import TextCustom from '../atoms/text/TextCustom';

export type BannerInfoProps = {
    des: string;
    name: string;
};

interface BannerProps {
    imgPaths: string[];
    infoList: BannerInfoProps[];
}

const Banner = ({ imgPaths, infoList }: BannerProps) => {
    const [info, setInfo] = useState(infoList[0]);
    const onChange = (swiper: SwiperCore) => {
        setInfo(infoList[swiper.realIndex]);
    };

    return (
        <div className={classNames('BannerWrapper')}>
            <div className={classNames('bannerInfo')}>
                <TextCustom content={info.des} className={classNames('bannerInfo-des')} />
                <TextCustom content={info.name} className={classNames('bannerInfo-name')} />
            </div>
            <SwiperCustom imgPaths={imgPaths} onChange={onChange} />
        </div>
    );
};
export default Banner;
