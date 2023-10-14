import React from 'react';
import '../../styles/Banner.scss';
import classNames from 'classnames';
import BannerInfo from '../atoms/BannerInfo';
import SwiperCustom from '../atoms/SwiperCustom';

interface BannerProps {
    des: string;
    name: string;
    imgPath: string;
}

const Banner = ({ des, name, imgPath }: BannerProps) => {
    return (
        <div className={classNames('BannerWrapper')}>
            <BannerInfo des={des} name={name} />
            <SwiperCustom imgPath={imgPath} />
        </div>
    );
};
export default Banner;
