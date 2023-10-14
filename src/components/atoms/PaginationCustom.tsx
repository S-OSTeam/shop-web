import React from 'react';
import { Pagination } from '@mui/material';

interface PaginationCustomProps {
    count: number; // 총 몇 페이지 인가를 정하는 prop
    showOpt: boolean; // 맨 처음으로 이동, 맨 마지막으로 이동 버튼 보이기 안보이기 옵션
    page: number; // 현재 가리키고 있는 페이지
    onChange: () => void;
}

const PaginationCustom = ({ count, showOpt, page, onChange }: PaginationCustomProps) => {
    return (
        <Pagination count={count} showFirstButton={showOpt} showLastButton={showOpt} page={page} onChange={onChange} />
    );
};
export default PaginationCustom;
