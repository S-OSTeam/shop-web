import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminPage from '@pages/admin/AdminPage';
import Dashboard from '@pages/manager/dashboard/Dashboard';

// 관리자 페이지 모듈화
export const AdminRouter = () => {

    return (
        <Routes>
            <Route path='/main' element={<AdminPage />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    );
};