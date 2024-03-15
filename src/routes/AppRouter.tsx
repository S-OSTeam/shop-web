import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DeamHome from './home/DeamHome';
import Product from './product/Product';
import Login from './login/Login';
import SignUp from './signup/Signup';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<DeamHome />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
};
