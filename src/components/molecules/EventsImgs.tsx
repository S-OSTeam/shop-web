import React from 'react';
import '../../styles/EventsImgs.scss';
import classNames from 'classnames';
import TextCustom from '../atoms/text/TextCustom';
import ImageCustom from '../atoms/image/ImageCustom';

const EventsImgs = () => {
    return (
        <div className={classNames('event-box')}>
            <TextCustom content="이벤트" className="event-text" />
            <TextCustom content="이벤트 설명" className="event-text-description" />
            <div className={classNames('event-image-box')}>
                <ImageCustom img="seukuna.jpeg" alt="이벤트 상품 - 영역전개 스쿠나" />
                <ImageCustom img="seukuna.jpeg" alt="이벤트 상품 - 영역전개 스쿠나" />
                <ImageCustom img="seukuna.jpeg" alt="이벤트 상품 - 영역전개 스쿠나" />
                <ImageCustom img="seukuna.jpeg" alt="이벤트 상품 - 영역전개 스쿠나" />
            </div>
        </div>
    );
};
export default EventsImgs;
