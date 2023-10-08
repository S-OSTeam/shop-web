import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddOnButton from '../components/atoms/AddOnButton';

export const AppRouter = () => {
    const onClick = () => {
        console.log('hi');
    };
    return (
        <Routes>
            <Route path="/" element={<AddOnButton onClick={onClick} imgPath="test.png" />} />
        </Routes>
    );
};
