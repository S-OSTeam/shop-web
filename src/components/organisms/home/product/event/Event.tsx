import React from 'react';
import { Box } from '@mui/material';
import Text from '@atoms/text/Text';
import Swiper from '@molecules/swiper/Swiper';
import { EventInfo } from '@util/test/interface/Event';
import clsN from 'classnames';
import { Item, ItemInterface } from '@util/test/interface/Item';
import styles from './styles/Event.module.scss';

interface EventProps {
    eventItem: EventInfo[];
    onEventClick: (item: Item | ItemInterface | EventInfo) => void;
}
const Event = ({ eventItem, onEventClick }: EventProps) => {
    const items = eventItem.map((item) => {
        return item.thumbnail;
    });

    return (
        <Box className={clsN(styles['event-wrapper'])}>
            <Text className={clsN(styles['event-wrapper__title'])} text="진행중인 이벤트" />
            <Swiper
                itemImages={items}
                className={clsN(styles['event-wrapper__category'])}
                slideClsN={clsN(styles['event-wrapper__category-slide'])}
                btnClsN={clsN(styles['event-wrapper__category-btn'])}
                imgClsN={clsN(styles['event-wrapper__category-img'])}
                isNavigation
                spaceBetween={8}
                slidesPerView={1}
                isLoop
                centeredSlides
                onClick={onEventClick}
                items={eventItem}
            />
        </Box>
    );
};

export default Event;
