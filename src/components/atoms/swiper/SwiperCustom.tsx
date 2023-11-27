import React from 'react';
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';
import '../../../styles/SwiperCustom.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames';

SwiperCore.use([FreeMode, Navigation, Thumbs]);

export interface SwiperCustomProps {
    className?: string;
    imgPaths: string[];
    onChange?: (value: SwiperCore) => void;
    navigation?: boolean;
}

const SwiperCustom = ({ navigation, className, imgPaths, onChange }: SwiperCustomProps) => {
    return (
        <Swiper
            className={classNames(className)}
            navigation={navigation}
            pagination={{ clickable: true }}
            loop
            watchSlidesProgress
            spaceBetween={10}
            modules={[FreeMode, Navigation]}
            onSlideChange={onChange}
        >
            {imgPaths.map((value, index) => (
                <SwiperSlide>
                    <img src={require(`../../../asset/images/${imgPaths[index]}`)} alt={value} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
SwiperCustom.defaultProps = {
    onChange: undefined,
    className: 'SwiperCustom',
    navigation: true,
};
export default SwiperCustom;
