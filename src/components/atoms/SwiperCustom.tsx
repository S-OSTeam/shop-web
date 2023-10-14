import React from 'react';
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';
import '../../styles/SwiperCustom.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames';

SwiperCore.use([FreeMode, Navigation, Thumbs]);

interface SwiperCustomProps {
    imgPath: string;
}

const SwiperCustom = ({ imgPath }: SwiperCustomProps) => {
    return (
        <Swiper
            className={classNames('SwiperCustom')}
            navigation
            pagination
            loop
            spaceBetween={10}
            modules={[FreeMode, Navigation, Thumbs]}
        >
            <SwiperSlide>
                <img src={require(`../../asset/images/${imgPath}`)} alt="hi" />
            </SwiperSlide>
            <SwiperSlide>slide 2</SwiperSlide>
        </Swiper>
    );
};

export default SwiperCustom;
