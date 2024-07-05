import React from 'react';
import { Box } from '@mui/material';
import Text from '@atoms/text/Text';
import Swiper from '@molecules/swiper/Swiper';
import { EventInfo } from '@util/test/interface/Event';
// import { NavigationOptions } from 'swiper/types/modules/navigation';
import clsN from 'classnames';
import styles from './styles/Event.module.scss';

interface EventProps {
    eventItem: EventInfo[];
}
const Event = ({ eventItem }: EventProps) => {
    const items = eventItem.map((item) => {
        return item.thumbnail;
    });

    // const navigation: NavigationOptions = {
    //     nextEl: clsN(styles['next-el']),
    //     prevEl: clsN(styles['prev-el']),
    // };

    return (
        <Box className={clsN(styles['event-wrapper'])}>
            <Text className={clsN(styles['event-wrapper__title'])} text="진행중인 이벤트" />
            <Swiper
                items={items}
                className={clsN(styles['event-wrapper__category'])}
                slideClsN={clsN(styles['event-wrapper__category-slide'])}
                btnClsN={clsN(styles['event-wrapper__category-btn'])}
                imgClsN={clsN(styles['event-wrapper__category-img'])}
                isNavigation
                spaceBetween={8}
                slidesPerView={1}
                isLoop
                centeredSlides
            />
        </Box>
    );
};

export default Event;
