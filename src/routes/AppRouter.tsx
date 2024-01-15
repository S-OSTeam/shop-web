import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DeamHome from './home/DeamHome';
import Product from './product/Product';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<DeamHome />} />
            <Route path="/product" element={<Product />} />
        </Routes>
    );
};
