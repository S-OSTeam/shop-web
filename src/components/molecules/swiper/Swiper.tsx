/*eslint-disable*/
import React from 'react';
import { Swiper as CustomSwiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, FreeMode } from 'swiper/modules';
import ImageButton from '@molecules/button/imageButton/ImageButton';
import { PaginationOptions } from 'swiper/types/modules/pagination';
import { NavigationOptions } from 'swiper/types/modules/navigation';
import { SwiperOptions } from 'swiper/types/swiper-options';
import clsN from 'classnames';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Item, ItemInterface } from '@util/test/interface/Item';
import { EventInfo } from '@util/test/interface/Event';
import styles from './style/Swiper.module.scss';

interface CustomSwiperProps {
    className?: string; // 전체 swiper className
    slideClsN?: string; // swiper slide className
    btnClsN?: string; // ImageButton의 Button className
    imgClsN?: string; // ImageBUtton의 Image className
    itemImages: string[]; // 아이템의 이미지 주소
    alt?: string;
    onSlideChange?: () => void; // slide 넘길때 발생하는 onSlideChange 옵션
    spaceBetween?: number; // 각 slide 간격
    slidesPerView?: number; // 한 화면에 출력하는 총 slide의 갯수
    isPagination?: PaginationOptions | boolean; // pagination 사용 여부 및 커스텀 pagination
    isNavigation?: NavigationOptions | boolean; // navigation 사용 여부 및 커스텀 navigation
    isAutoPlay?: boolean; // auto play 사용 여부
    isFreeMode?: boolean; // freeMode 사용 여부
    isLoop?: boolean; // loop 사용 여부
    delay?: number; // auto play 사용 시 delay
    breakpoints?: { [width: number]: SwiperOptions; [ratio: string]: SwiperOptions } | boolean;
    centeredSlides?: boolean;
    onClick?: (item: Item | ItemInterface | EventInfo) => void;
    items: Item[] | ItemInterface[] | EventInfo[];
}

const Swiper = ({ ...props }: CustomSwiperProps) => {
    const autoPlay = { delay: props.delay, disableOnInteraction: false };

    // 이미지 판별
    const imageHandler = (item: Item | ItemInterface | EventInfo) => {
        if ('thumbnail' in item) {
            return item.thumbnail;
        }
        return item.imageUrls[0];
    };
    return (
        <div>
            <CustomSwiper
                className={clsN(props.className, styles['swiper-wrapper'])}
                slidesPerView={props.slidesPerView}
                pagination={props.isPagination}
                navigation={props.isNavigation}
                spaceBetween={props.spaceBetween}
                autoplay={props.isAutoPlay ? autoPlay : false}
                freeMode={props.isFreeMode}
                loop={props.isLoop}
                loopedSlides={1}
                modules={[Pagination, Navigation, Autoplay, FreeMode]}
                onSlideChange={props.onSlideChange}
                breakpoints={props.breakpoints}
                centeredSlides={props.centeredSlides}
            >
                {props.items.map((item, index) => (
                    <SwiperSlide
                        className={clsN(props.slideClsN, styles['swiper-wrapper__swiper-slide'])}
                        key={index}
                        onClick={() => props.onClick && props.onClick(item)}
                    >
                        <ImageButton
                            className={clsN(props.btnClsN, styles.btn)}
                            imgClsN={clsN(props.imgClsN, styles.img)}
                            alt={props.alt}
                            imgPath={imageHandler(item)}
                        />
                    </SwiperSlide>
                ))}
            </CustomSwiper>
        </div>
    );
};

Swiper.defaultProps = {
    onSlideChange: undefined,
    alt: '이미지가 없습니다.',
    className: styles[''],
    slideClsN: styles[''],
    btnClsN: styles[''],
    imgClsN: styles[''],
    spaceBetween: 0,
    slidesPerView: 1,
    isNavigation: false,
    isPagination: false,
    isAutoPlay: false,
    isFreeMode: false,
    isLoop: true,
    delay: 5000,
    breakpoints: false,
    centeredSlides: false,
    onClick: undefined,
};

export default Swiper;
