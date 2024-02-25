import React from 'react';
import { Swiper as CustomSwiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import Image from '@atoms/source/image/Image';
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
    const navigation = {
        prevEl: '.prev',
        nextEl: '.next',
    };
    return (
        <div>
            <CustomSwiper
                className={clsN(props.className, styles.swiper)}
                pagination={props.isPagination ? pagination : false}
                navigation={props.isNavigation ? navigation : false}
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
                <svg
                    className="prev"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16.876 2.363a1.239 1.239 0 0 0-1.752 0l-8.761 8.76a1.239 1.239 0 0 0 0 1.753l8.76 8.761a1.239 1.239 0 1 0 1.753-1.752L8.991 12l7.885-7.885a1.239 1.239 0 0 0 0-1.752Z"
                        fill="currentColor"
                    />
                </svg>
                <svg
                    className="next"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.363 21.637a1.239 1.239 0 0 0 1.752 0l8.761-8.76a1.239 1.239 0 0 0 0-1.753l-8.76-8.761a1.239 1.239 0 1 0-1.753 1.752L14.248 12l-7.885 7.885a1.239 1.239 0 0 0 0 1.752Z"
                        fill="currentColor"
                    />
                </svg>
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
    spaceBetween: 0,
    isNavigation: false,
    isPagination: false,
    isAutoPlay: false,
    delay: 2000,
};

export default Swiper;
