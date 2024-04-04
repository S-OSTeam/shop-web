import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DeamHome from '@pages/home/DeamHomePage';
import Product from '@pages/product/ProductPage';
import Header from '@components/layout/header/Header';

export const AppRouter = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<DeamHome />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </div>
    );
};
