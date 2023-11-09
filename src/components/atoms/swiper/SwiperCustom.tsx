import React from 'react';
import SwiperCore from 'swiper';
import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';
import '../../../styles/SwiperCustom.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames';
import { FreeMode, Navigation ,Thumbs } from 'swiper/types/modules';

SwiperCore.use([FreeMode, Navigation, Thumbs]);

export interface SwiperCustomProps {
    imgPath: string[];
    onChange?: (value: SwiperCore) => void;
}

const SwiperCustom = ({ imgPath, onChange }: SwiperCustomProps) => {
    return (
        <Swiper
            className={classNames('SwiperCustom')}
            navigation
            pagination
            loop
            watchSlidesProgress
            spaceBetween={10}
            modules={[FreeMode, Navigation, Thumbs]}
            onSlideChange={onChange}
        >
            {imgPath.map((value, index) => (
                <SwiperSlide>
                    <img src={require(`../../asset/images/${imgPath[index]}`)} alt={value} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
SwiperCustom.defaultProps = {
    onChange: undefined,
};
export default SwiperCustom;
