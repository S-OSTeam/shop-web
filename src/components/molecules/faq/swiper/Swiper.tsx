/* eslint-disable */
import React from 'react';
import { Swiper as MySwiper, SwiperProps as MySwiperProps, SwiperSlide,  } from 'swiper/react'
import clsN from 'classnames';
import styles from './styles/Swiper.module.scss';

/**
 * Swiper
 * 스와이퍼를 제외한 '스와이퍼 슬라이더' 에 활용할 아이템 즉 전달받을 파라미터 인터페이스 고민하기
 *
 */
interface modeTypes {
    free?: boolean;
    pagination?: boolean;
    navigation?: boolean;
}

interface SwiperProps<T> extends MySwiperProps{

    /** 스와이퍼 클래스명 */
    className?: string;
    /** 슬라이드 감싸는 영역 클래스명 */
    wrapperSlideClsN?: string;
    /** 슬라이드 클래스명 */
    slideClsN?: string;
    /** 스와이퍼에 사용될 컨텐츠: T 타입의 배열 */
    items: T[];
    /** 실질적인 스와이퍼 콘텐츠 영역, T 타입의 아이템과 인덱스를 받아 결과물을 노드로 반환 */
    renderSlide: (item: T, index: number) => React.ReactNode;
    /** 해당 컨텐츠 설명 */
    alt?: string;
    /** 입력이벤트 */
    onChange?: ()=>void;
    /** flex 공간 규격 (px) */
    spaceBetween?: number;
    /** 콘텐츠를 페이지별 관리, 하단 숫자 버튼 */
    isPagination?: boolean;
    /** 좌 우 페이지 이동 버튼 */
    isNavigation?: boolean;
    /** 자동재생 */
    isAutoPlay?: boolean;
    /** 자동재생 지연시간 */
    delay?: number;
    moduleCheck?: modeTypes;
    /** 보여줄 슬라이드 갯수 */
    slidesPerView?: number
    /** 스와이퍼 부모 클래스명 */
    parentClsN?: string;
}

// <T, > : 타입스크립트에서 제너릭 사용시 콤마를 붙임, 문법적 요구사항이라고함
const Swiper = <T,>(
    {
        className,
        wrapperSlideClsN,
        slideClsN,
        items,
        renderSlide,
        onChange,
        spaceBetween,
        isPagination,
        isNavigation,
        isAutoPlay,
        delay,
        modules,
        slidesPerView,
        parentClsN
    }:SwiperProps<T>
) => {
    /** 상태 */

    /** 함수 */

    /** 스와이퍼 컴포넌트 모듈화가 현재까지 안되므로 map 처리하기 */
    return(
        <div className={clsN(parentClsN, styles['parent'])}>
            <MySwiper
                className={clsN(className, styles['swiper-container'])}
                pagination={isPagination ? {clickable: true} : false}
                navigation={isNavigation}
                spaceBetween={spaceBetween}
                autoplay={isAutoPlay ? {delay: delay, disableOnInteraction: false} : false}
                loopedSlides={1}
                modules={modules}
                onSlideChange={onChange}
                wrapperClass={clsN(wrapperSlideClsN, styles['swiper__wrapper'])}
                slidesPerView={slidesPerView}
            >
                {items.map((item, idx)=> {
                    return(
                        <SwiperSlide className={clsN(slideClsN, styles['swiper__wrapper__slide'])}>
                            {renderSlide(item, idx)}
                        </SwiperSlide>

                    )
                })}
            </MySwiper>
        </div>
    )
}
export default Swiper;