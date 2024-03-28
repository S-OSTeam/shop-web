import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomerService from '@routes/cs/CustomerService';
import DeamHome from './home/DeamHome';
import Product from './product/Product';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<DeamHome />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cs" element={<CustomerService/>} />
        </Routes>
    );
};
