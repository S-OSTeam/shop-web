import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '@components/layout/header/Header';
import DeamHome from '@routes/home/DeamHome';
import Product from '@routes/product/Product';
import Event from '@routes/event/Event';
import SignUp from '@routes/signup/Signup';
import Login from '@routes/login/Login';
import CustomerServicePage from '@pages/cs/CustomerServicePage';
import Category from '@routes/category/Category';
import Review from '@routes/review/Review';
import KakaoRedirect from '@util/test/login/KakaoRedirect';
import NaverRedirect from '@util/test/login/NaverRedirect';

import { AdminRouter } from './adminRouter/AdminRouter';

export const AppRouter = () => {
    // React Router 가 제공하는 useLocation 훅을 사용해서 조건부 랜더링하기

    // 현재 경로
    const currentLocation = useLocation();
    // 특정 경로당 컴포넌트 렌더 처리하기
    const headerProvider = () => {
        if (currentLocation.pathname.includes('/manager')) {
            return null;
        }
        return <Header />;
    };

    return (
        <div>
            {headerProvider()}
            <Routes>
                <Route path="/" element={<DeamHome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/kakao/redirect" element={<KakaoRedirect />} />
                <Route path="/naver/redirect" element={<NaverRedirect />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/shop/product" element={<Product />} />
                <Route path="/shop/category" element={<Category />} />
                <Route path="/shop/event" element={<Event />} />
                <Route path="/review" element={<Review />} />
                <Route path="/support" element={<CustomerServicePage />} />

                {/* 모듈화된 관리자 페이지 라우터 렌더하기 */}
                <Route path="/manager/*" element={<AdminRouter />} />
            </Routes>
        </div>
    );
};
