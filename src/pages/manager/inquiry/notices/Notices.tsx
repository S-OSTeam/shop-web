import React from 'react';
import AdminTemplate from '@templates/admin/Admin';
import { NoticesTemplate } from '@templates/inquiry/notices/Notices';

/*
interface NoticesProps {
    /!* xss 방지하기 *!/
    // root 클래스명
    className?: string;
}
*/

export const Notices = () => {
    return (
        <AdminTemplate>
            <NoticesTemplate />
        </AdminTemplate>
    );
};
