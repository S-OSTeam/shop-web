import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DeamHome from '@pages/home/DeamHomePage';
import Product from '@pages/product/ProductPage';
import Header from '@components/layout/header/Header';
import CustomerServicePage from '@pages/cs/CustomerServicePage';
import AdminPage from '@pages/admin/AdminPage';
import Login from '@pages/login/LoginPage';

export const AppRouter = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<DeamHome />} />
                <Route path="/product" element={<Product />} />
                <Route path="/support" element={<CustomerServicePage />} />
                <Route path="/manager" element={<AdminPage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
};
