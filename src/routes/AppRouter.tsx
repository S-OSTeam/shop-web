import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DeamHome from '@pages/home/DeamHomePage';
import Product from '@pages/product/ProductPage';
import Layout from '@components/layout/Layout';

export const AppRouter = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<DeamHome />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </Layout>
    );
};
