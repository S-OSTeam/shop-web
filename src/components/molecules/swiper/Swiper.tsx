import React from 'react';
import { Swiper as CustomSwiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './style/Swiper.module.scss';

interface CustomSwiperProps {
    className?: string;
    slideClsN?: string;
    imgClsN?: string;
    items: string[];
    alt?: string;
    onChange?: () => void;
    spaceBetween?: number;
    isPagination?: boolean;
    isNavigation?: boolean;
    isAutoPlay?: boolean;
    delay?: number;
}

const Swiper = ({ ...props }: CustomSwiperProps) => {
    const pagination = {
        clickable: true,
    };
    const autoPlay = { delay: props.delay, disableOnInteraction: false };
    return (
        <div>
            <CustomSwiper
                className={clsN(props.className, styles.swiper)}
                pagination={props.isPagination ? pagination : false}
                navigation={props.isNavigation}
                spaceBetween={props.spaceBetween}
                autoplay={props.isAutoPlay ? autoPlay : false}
                loop
                loopedSlides={1}
                modules={[Pagination, Navigation, Autoplay]}
                onSlideChange={() => console.log('slide change')}
            >
                {props.items.map((imgPath, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <SwiperSlide className={clsN(props.slideClsN, styles['swiper__swiper-slide'])} key={index}>
                        <img className={clsN(props.imgClsN, styles.img)} alt={props.alt} src={imgPath} />
                    </SwiperSlide>
                ))}
            </CustomSwiper>
        </div>
    );
};

Swiper.propTypes = {
    className: PropTypes.string,
    slideClsN: PropTypes.string,
    imgClsN: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
    alt: PropTypes.string,
    onChange: PropTypes.func,
    spaceBetween: PropTypes.number,
    isNavigation: PropTypes.bool,
    isPagination: PropTypes.bool,
    isAutoPlay: PropTypes.bool,
    delay: PropTypes.number,
};

Swiper.defaultProps = {
    onChange: undefined,
    alt: '이미지가 없습니다.',
    className: styles[''],
    slideClsN: styles[''],
    imgClsN: styles[''],
    spaceBetween: 50,
    isNavigation: false,
    isPagination: false,
    isAutoPlay: false,
    delay: 2000,
};

export default Swiper;
