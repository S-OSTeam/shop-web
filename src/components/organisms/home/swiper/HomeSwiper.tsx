import React from 'react';
import { Item } from '@util/test/interface/Item';
import { Box } from '@mui/material';
import Swiper from '@molecules/swiper/Swiper';
import clsN from 'classnames';
import * as ReactDOMServer from 'react-dom/server';
import { PaginationOptions } from 'swiper/types/modules/pagination';
import styles from './styles/HomeSwiper.module.scss';

interface HomeSwiperProps {
    swiperItem: Item[];
}

/**
 *
 * @param swiperItem
 * @constructor
 */
const HomeSwiper = ({ swiperItem }: HomeSwiperProps) => {
    /**
     * custom pagination
     * -pagination option-
     * clickable: pagination을 마우스로 이동 시킬 필요 없이 클릭 시 해당 슬라이드로 이동 가능
     * type: 'bullets' | 'fraction' | 'progressbar' | 'custom';
     * - fraction (current slide / total slide) -
     * formatFractionCurrent/Total: 현재, 총  slide를 커스텀 해주는 옵션 return {number} 형식으로 하면 object로 출력되어서 꼭 string 형식으로 반환할것
     * renderFraction: 랜더링 될때 커스텀으로 만든 Fraction을 출력하는 옵션
     * */
    const pagination: PaginationOptions = {
        clickable: true,
        type: 'fraction',
        formatFractionCurrent: (number: number) => {
            return `${number}`;
        },
        formatFractionTotal: (number: number) => {
            return `${number}`;
        },
        renderFraction: (currentClass: string, totalClass: string) => {
            return ReactDOMServer.renderToStaticMarkup(
                <Box className={clsN(styles['home-swiper__pagination'])}>
                    <span className={`${currentClass}`} /> / <span className={`${totalClass}`} />
                </Box>,
            );
        },
    };

    /**
     * Swiper에 출력되는 item들의 값에서 image의 맨 처음만 리턴 해주는 함수
     */
    const items = swiperItem.map((item) => {
        return item.imageUrls[0];
    });

    return (
        <Box className={clsN(styles['home-swiper'])}>
            <Swiper isPagination={pagination} items={items} isAutoPlay delay={5000} />
        </Box>
    );
};

export default HomeSwiper;
