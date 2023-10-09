import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Item from '../components/organisms/Item';

export const AppRouter = () => {
    // const onClick = () => {
    //     console.log('hi');
    // };
    return (
        <Routes>
            <Route path="/" element={<Item price="20,000" des="줜나 멋있는 건담" name="고죠 사토루 피규어" />} />
        </Routes>
    );
};
