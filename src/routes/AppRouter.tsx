import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from './product/Product';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Product />} />
        </Routes>
    );
};
