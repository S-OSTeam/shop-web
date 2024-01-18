import React from 'react';
import { Route, Routes } from 'react-router-dom';
import QnaAdmin  from '@routes/inquiry/inquiryAdmin/qna/QnaAdmin';
import DeamHome from './home/DeamHome';
import Product from './product/Product';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<DeamHome />} />
            <Route path="/product" element={<Product />} />
            <Route path="/inquiryAdmin" element={<QnaAdmin/>}/>
        </Routes>
    );
};
