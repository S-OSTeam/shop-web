import React from 'react';
import classNames from 'classnames';
import '../../styles/WelcomeImg.scss';
import SwiperThumbsCustom from '../atoms/SwiperThumbsCustom';
import TextCustom from '../atoms/text/TextCustom';

const WelcomeImg = () => {
    const mainImages = [
        'seukuna.jpeg',
        'sooseon2.JPG',
        'sooseon3.JPG',
        'sooseon4.JPG',
        'sooseon5.PNG',
        'sooseon6.JPG',
        'sooseon7.JPG',
    ];
    const thumbsImages = [
        'sooseon1.JPG',
        'sooseon2.JPG',
        'sooseon3.JPG',
        'sooseon4.JPG',
        'sooseon5.PNG',
        'sooseon6.JPG',
        'sooseon7.JPG',
    ];

    return (
        <div className={classNames('welcomeBanner')}>
            <SwiperThumbsCustom
                navigation={false}
                mainImages={mainImages}
                thumbsImages={thumbsImages}
                mainClassName="welcome-mainBanner"
                thumbsClassName="welcome-thumbBanner"
            >
                <TextCustom content="Recent Content..." className="welcome-firstInfo" />
                <TextCustom content="be a web" className="welcome-secondInfo" />
            </SwiperThumbsCustom>
        </div>
    );
};
export default WelcomeImg;
