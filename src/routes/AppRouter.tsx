import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DeamHome from '@pages/home/DeamHomePage';
import Product from '@pages/product/ProductPage';
import Header from '@components/layout/header/Header';
import CustomerServicePage from '@pages/cs/CustomerServicePage';
import AdminPage from '@pages/admin/AdminPage';
import Login from '@pages/login/LoginPage';
import { AdminRouter } from './adminRouter/AdminRouter';

export const AppRouter = () => {
    // React Router 가 제공하는 useLocation 훅을 사용해서 조건부 랜더링하기

    // 현재 경로
    const currentLocation = useLocation();
    // 특정 경로당 컴포넌트 렌더 처리하기
    const headerProvider = () => {
        if((currentLocation.pathname).includes('/manager')){
            return null;
        }
        return <Header />
    }

    return (
        <div>
            {headerProvider()}
            <Routes>
                <Route path="/" element={<DeamHome />} />
                <Route path="/product" element={<Product />} />
                <Route path="/support" element={<CustomerServicePage />} />
                <Route path="/manager" element={<AdminPage />} />
                <Route path="/login" element={<Login />} />

                {/* 모듈화된 관리자 페이지 라우터 렌더하기 */}
                <Route path="/manager/*" element={<AdminRouter />}/>
            </Routes>
        </div>
    );
};
