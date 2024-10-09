import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminPage from '@pages/admin/AdminPage';
import Dashboard from '@pages/manager/dashboard/Dashboard';
import { Notices } from '@pages/manager/inquiry/notices/Notices';
import { AdminFaq } from '@pages/manager/inquiry/faq/Faq';
import { Management } from '@pages/product/managment/Management';

// 관리자 페이지 모듈화
export const AdminRouter = () => {
    return (
        <Routes>
            <Route path="main" element={<AdminPage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="faq" element={<AdminFaq />} />
            <Route path="notices" element={<Notices />} />
            <Route path="prodmgt" element={<Management />} />
        </Routes>
    );
};
