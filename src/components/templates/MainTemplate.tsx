import React from 'react';
import '../../styles/MainTemplate.scss';
import classNames from 'classnames';
import WelcomeImg from '../molecules/WelcomeImg';
import EventsImgs from '../molecules/EventsImgs';
import MonthlyItems from '../molecules/MonthlyItems';

const MainTemplate = () => {
    return (
        <>
            <WelcomeImg />
            <div className={classNames('main-template-items')}>
                <EventsImgs />
                <MonthlyItems />
            </div>
        </>
    );
};
export default MainTemplate;
