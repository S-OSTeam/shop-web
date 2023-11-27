import React, { ReactNode, useState } from 'react';
import SwiperCore, { Controller, FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames';
import ImageCustom from './image/ImageCustom';

interface SwiperThumbsCustomProps {
    mainImages: string[];
    thumbsImages: string[];
    mainClassName?: string;
    thumbsClassName?: string;
    navigation?: boolean;
    children?: ReactNode;
}

const SwiperThumbsCustom = ({
    navigation,
    mainImages,
    thumbsImages,
    mainClassName,
    thumbsClassName,
    children,
}: SwiperThumbsCustomProps) => {
    const [mainSwiper, setMainSwiper] = useState<SwiperCore | null>(null);
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

    return (
        <>
            <Swiper
                className={classNames(mainClassName)}
                slideToClickedSlide
                navigation={navigation}
                pagination
                loop
                watchSlidesProgress
                spaceBetween={10}
                modules={[FreeMode, Navigation, Thumbs, Controller]}
                onSwiper={setMainSwiper}
                controller={{ control: thumbsSwiper as SwiperCore | undefined }}
            >
                {mainImages.map((value, index) => (
                    <SwiperSlide>
                        <ImageCustom img={mainImages[index]} alt={value} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {children}
            <Swiper
                className={classNames(thumbsClassName)}
                slideToClickedSlide
                navigation={navigation}
                pagination={{ clickable: true }}
                loop
                slidesPerView={6}
                watchSlidesProgress
                spaceBetween={10}
                modules={[FreeMode, Navigation, Thumbs, Controller]}
                onSwiper={setThumbsSwiper}
                controller={{ control: mainSwiper as SwiperCore | undefined }}
            >
                {thumbsImages.map((value, index) => (
                    <SwiperSlide>
                        <ImageCustom img={thumbsImages[index]} alt={value} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

SwiperThumbsCustom.defaultProps = {
    mainClassName: undefined,
    thumbsClassName: undefined,
    navigation: true,
    children: undefined,
};
export default SwiperThumbsCustom;
