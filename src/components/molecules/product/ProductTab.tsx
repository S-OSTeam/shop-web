import React from 'react';
import { Box } from '@mui/material';
import TabButton from '../../atoms/button/TabButton';

interface ProductTabProps {
    tabId: number;
    onclick?: (id: number) => void;
}

const ProductTab = ({ tabId, onclick }: ProductTabProps) => {
    const id = tabId;

    // 해당 텝의 디자인 바꾸기 위한 함수
    const isTabCheck = (isTadId: number) => {
        if (isTadId === id) return true;
        return false;
    };

    return (
        <Box>
            <TabButton isTab={isTabCheck(1)} content="상세정보" onclick={() => onclick && onclick(1)} />
            <TabButton isTab={isTabCheck(2)} content="구매후기" onclick={() => onclick && onclick(2)} />
            <TabButton isTab={isTabCheck(3)} content="상품문의" onclick={() => onclick && onclick(3)} />
            <TabButton isTab={isTabCheck(4)} content="배송안내" onclick={() => onclick && onclick(4)} />
        </Box>
    );
};

export default ProductTab;
