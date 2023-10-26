import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageFaq } from '../pages/FAQ/PageFaq';
import { PageQna } from '../pages/FAQ/PageQna';


export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<PageQna />} />
            <Route path='/pagegaq' element={<PageFaq />} />
        </Routes>
    );
};
