/* eslint-disable */
import React from 'react';
import AdminComponent from '@templates/admin/Admin';
import DashboardTemplate from '@templates/dashboard/Dashboard';

interface DashboardProps {

}

const Dashboard = ({}:DashboardProps) => {
    return(
        <AdminComponent>
            <DashboardTemplate/>
        </AdminComponent>
    );
}
export default Dashboard;