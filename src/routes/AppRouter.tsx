import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomerService from '@routes/cs/CustomerService';
import AdminPage from '@pages/admin/AdminPage';
import DeamHome from '@pages/home/DeamHomePage';
import Product from '@pages/product/ProductPage';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<DeamHome />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cs" element={<CustomerService />} />
            <Route path="/admin" element={<AdminPage />} />
        </Routes>
    );
};
