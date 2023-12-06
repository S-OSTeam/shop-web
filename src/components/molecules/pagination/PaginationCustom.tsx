import React from 'react';
import { Pagination } from '@mui/material';
import PropTypes from 'prop-types';

interface PaginationCustomProps {
    // 총 몇 페이지 인가를 정하는 prop
    count: number;
    // 맨 처음으로 이동, 맨 마지막으로 이동 버튼 보이기 안보이기 옵션
    showOpt: boolean;
    // 현재 가리키고 있는 페이지
    page: number;
    onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
    // 페이지네이션 번호 버튼 갯수
    siblingCount?: number;
}

const PaginationCustom = ({ count, showOpt, page, onChange, siblingCount }: PaginationCustomProps) => {
    return (
        <Pagination
            count={count}
            siblingCount={siblingCount}
            showFirstButton={showOpt}
            showLastButton={showOpt}
            page={page}
            onChange={onChange}
        />
    );
};
PaginationCustom.propTypes = {
    // 총 몇 페이지 인가를 정하는 prop
    count: PropTypes.number.isRequired,
    // 맨 처음으로 이동, 맨 마지막으로 이동 버튼 보이기 안보이기 옵션
    showOpt: PropTypes.bool.isRequired,
    // 현재 가리키고 있는 페이지
    page: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    // 페이지네이션 번호 버튼 갯수
    siblingCount: PropTypes.number,
}
PaginationCustom.defaultProps ={
    siblingCount: 1,
}

export default PaginationCustom;
