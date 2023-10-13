import React from 'react';
import { Box } from '@mui/material';
import TabButton from '../../atoms/button/TabButton';

interface ProductTabProps {
    tabId: number;
}

const ProductTab = ({ tabId }: ProductTabProps) => {
    const id = tabId;

    // 해당 텝의 디자인 바꾸기 위한 함수
    const isTabCheck = (isTadId: number) => {
        if (isTadId === id) return true;
        return false;
    };

    return (
        <Box>
            <TabButton isTab={isTabCheck(1)} content="상세정보" />
            <TabButton isTab={isTabCheck(2)} content="구매후기" />
            <TabButton isTab={isTabCheck(3)} content="상품문의" />
            <TabButton isTab={isTabCheck(4)} content="배송안내" />
        </Box>
    );
};

export default ProductTab;
