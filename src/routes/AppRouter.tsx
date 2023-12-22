import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageFaq } from '../pages/FAQ/PageFaq';
import { PageQna } from '../pages/FAQ/PageQna';
import { PageQnaAdmin } from '../pages/FAQ/PageQnaAdmin';


export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<PageQnaAdmin />} />
            <Route path='/pageadminqan' element={<PageQna />} />
            <Route path='/pagefaq' element={<PageFaq />} />
        </Routes>
    );
};
