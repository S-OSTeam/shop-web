import React from 'react';
import AdminTemplate from '@templates/admin/Admin';
import { ProdmgtTemplate } from '@templates/product/prodmgt/Prodmgt';

export const Management = () => {
    return (
        <AdminTemplate>
            <ProdmgtTemplate />
        </AdminTemplate>
    );
};
