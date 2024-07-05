import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DeamHome from '@pages/home/DeamHomePage';
import Product from '@pages/product/ProductPage';
import Header from '@components/layout/header/Header';
import Login from '@pages/login/LoginPage';

export const AppRouter = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<DeamHome />} />
                <Route path="/product" element={<Product />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Layout>
    );
};
