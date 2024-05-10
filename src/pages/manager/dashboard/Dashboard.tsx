import React from 'react';
import AdminComponent from '@templates/admin/Admin';
import DashboardTemplate from '@templates/dashboard/Dashboard';

const Dashboard = () => {
    return (
        <AdminComponent>
            <DashboardTemplate />
        </AdminComponent>
    );
};
export default Dashboard;
