import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomerService from '@routes/cs/CustomerService';
import AdminPage from '@pages/admin/AdminPage';
import DeamHome from '@pages/home/DeamHomePage';
import Product from '@pages/product/ProductPage';
import Header from '@components/layout/header/Header';
import Login from './login/Login';
import SignUp from './signup/Signup';

export const AppRouter = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<DeamHome />} />
                <Route path="/product" element={<Product />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/cs" element={<CustomerService />} />
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </div>
    );
};
