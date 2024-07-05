import React from 'react';
import Header from '@components/layout/header/Header';
import { Box } from '@mui/material';
import { useRecoilValue } from 'recoil';
import loadingAtom from '@recoil/atoms/loadingAtom';
import Loading from '@pages/loading/Loading';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    // header 보다 상단위 부모 컴포넌트를 훅 관리하기
    // 레이아웃에서 훅 처리하기
    return (
        <Box>
            {loading > 0 && <Loading />}
            <Header />
            <main>{children}</main>
        </Box>
    );
};

export default Layout;
