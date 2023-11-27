import React from 'react';
import '../../styles/MonthlyItems.scss';
import classNames from 'classnames';
import TextCustom from '../atoms/text/TextCustom';
import Item from './Item';

const MonthlyItems = () => {
    return (
        <div className={classNames('monthly-box')}>
            <div className={classNames('monthly-text-box')}>
                <TextCustom content="월달 인기항목" className="monthly-text" />
            </div>
            <div className={classNames('monthly-contents')}>
                <div className={classNames('monthly-content')}>
                    <Item
                        id={0}
                        price="10000"
                        name="료멘스쿠나"
                        des="세계관 최강자"
                        img="sooseon/seukuna.jpeg"
                        mode="grid"
                    />
                    <Item
                        id={0}
                        price="10000"
                        name="료멘스쿠나"
                        des="세계관 최강자"
                        img="sooseon/seukuna.jpeg"
                        mode="grid"
                    />
                    <Item
                        id={0}
                        price="10000"
                        name="료멘스쿠나"
                        des="세계관 최강자"
                        img="sooseon/seukuna.jpeg"
                        mode="grid"
                    />
                    <Item
                        id={0}
                        price="10000"
                        name="료멘스쿠나"
                        des="세계관 최강자"
                        img="sooseon/seukuna.jpeg"
                        mode="grid"
                    />
                </div>
                <div className={classNames('monthly-content')}>
                    <Item
                        id={0}
                        price="10000"
                        name="료멘스쿠나"
                        des="세계관 최강자"
                        img="sooseon/seukuna.jpeg"
                        mode="grid"
                    />
                    <Item
                        id={0}
                        price="10000"
                        name="료멘스쿠나"
                        des="세계관 최강자"
                        img="sooseon/seukuna.jpeg"
                        mode="grid"
                    />
                    <Item
                        id={0}
                        price="10000"
                        name="료멘스쿠나"
                        des="세계관 최강자"
                        img="sooseon/seukuna.jpeg"
                        mode="grid"
                    />
                    <Item
                        id={0}
                        price="10000"
                        name="료멘스쿠나"
                        des="세계관 최강자"
                        img="sooseon/seukuna.jpeg"
                        mode="grid"
                    />
                </div>
            </div>
        </div>
    );
};
export default MonthlyItems;
