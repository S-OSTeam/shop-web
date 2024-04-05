import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DeamHome from '@pages/home/DeamHomePage';
import Product from '@pages/product/ProductPage';
import Header from '@components/layout/header/Header';
import CustomerServicePage from '@pages/cs/CustomerServicePage';
import AdminPage from '@pages/admin/AdminPage';

export const AppRouter = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<DeamHome />} />
                <Route path="/product" element={<Product />} />
                <Route path="/support" element={<CustomerServicePage />} />
                <Route path="/manager" element={<AdminPage />} />
            </Routes>
        </div>
    );
};
