import React from 'react';
import Header from '@components/layout/header/Header';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    // header 보다 상단위 부모 컴포넌트를 훅 관리하기
    // 레이아웃에서 훅 처리하기
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
