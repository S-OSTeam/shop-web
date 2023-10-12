import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageFaq } from '../pages/FAQ/PageFaq';
// import { FaqForm } from '../components/molecules/FAQ/FaqForm';


export const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<PageFaq />} />
        </Routes>
    );
};
