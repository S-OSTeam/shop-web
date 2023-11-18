import React from 'react';
import { Box } from '@mui/material';
import classNames from 'classnames';
import ButtonCustom from '../../../atoms/button/ButtonCustom';
import TextCustom from '../../../atoms/text/TextCustom';

interface ProductTabProps {
    className?: string;
    tabId: number;
    onClick?: (id: number) => void;
}

const ProductTab = ({ className, tabId, onClick }: ProductTabProps) => {
    const id = tabId;
    // 해당 텝의 디자인 바꾸기 위한 함수
    const isTabCheck = (isTadId: number) => {
        if (isTadId === id) return true;
        return false;
    };
    return (
        <Box className={classNames(className)}>
            <ButtonCustom className={isTabCheck(1) ? 'isTab active' : 'isTab'} onClick={() => onClick && onClick(1)}>
                <TextCustom content="상세 정보" />
            </ButtonCustom>
            <ButtonCustom className={isTabCheck(2) ? 'isTab active' : 'isTab'} onClick={() => onClick && onClick(2)}>
                <TextCustom content="구매후기" />
            </ButtonCustom>
            <ButtonCustom className={isTabCheck(3) ? 'isTab active' : 'isTab'} onClick={() => onClick && onClick(3)}>
                <TextCustom content="상품문의" />
            </ButtonCustom>
            <ButtonCustom className={isTabCheck(4) ? 'isTab active' : 'isTab'} onClick={() => onClick && onClick(4)}>
                <TextCustom content="배송안내" />
            </ButtonCustom>
        </Box>
    );
};

ProductTab.defaultProps = {
    className: undefined,
    onClick: undefined,
};

export default ProductTab;
