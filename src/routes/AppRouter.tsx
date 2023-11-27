import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoryAndItems from '../components/templates/CategoryAndItems';
import SwiperThumbsCustom from '../components/atoms/SwiperThumbsCustom';
import InputCustom from '../components/atoms/InputCustom';
import WelcomeImg from '../components/molecules/WelcomeImg';
import EventsImgs from '../components/molecules/EventsImgs';
import MonthlyItems from '../components/molecules/MonthlyItems';
import MainTemplate from '../components/templates/MainTemplate';

export const AppRouter = () => {
    const mainImages = ['sooseon1.JPG', 'sooseon2.JPG', 'sooseon3.JPG', 'sooseon4.JPG', 'sooseon4.JPG', 'sooseon6.JPG'];
    const thumbsImages = [
        'sooseon7.JPG',
        'sooseon8.JPG',
        'sooseon9.JPG',
        'sooseon10.JPG',
        'sooseon11.JPG',
        'sooseon12.JPG',
    ];
    return (
        <Routes>
            <Route path="/" element={<CategoryAndItems />} />
            <Route
                path="/swiper"
                element={<SwiperThumbsCustom mainImages={mainImages} thumbsImages={thumbsImages} />}
            />
            <Route path="/input" element={<InputCustom id="아이디" label="아이디" variant="standard" />} />
            <Route path="/welcome" element={<WelcomeImg />} />
            <Route path="/event" element={<EventsImgs />} />
            <Route path="/month" element={<MonthlyItems />} />
            <Route path="/main" element={<MainTemplate />} />
        </Routes>
    );
};
