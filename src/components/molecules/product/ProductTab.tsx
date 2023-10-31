import React from 'react';
import { Box } from '@mui/material';
import TextButton from '../../atoms/button/TextButton';

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
            <TextButton
                className={isTabCheck(1) ? 'isTab active' : 'isTab'}
                content="상세정보"
                onclick={() => onclick && onclick(1)}
            />
            <TextButton
                className={isTabCheck(2) ? 'isTab active' : 'isTab'}
                content="구매후기"
                onclick={() => onclick && onclick(2)}
            />
            <TextButton
                className={isTabCheck(3) ? 'isTab active' : 'isTab'}
                content="상품문의"
                onclick={() => onclick && onclick(3)}
            />
            <TextButton
                className={isTabCheck(4) ? 'isTab active' : 'isTab'}
                content="배송안내"
                onclick={() => onclick && onclick(4)}
            />
        </Box>
    );
};

export default ProductTab;
