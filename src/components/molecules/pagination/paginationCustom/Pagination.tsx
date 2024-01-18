/* eslint-disable */
import React from 'react';
import { Pagination as MuiPagination, PaginationProps as MuiPaginationProps } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import style from './style/Pagination.module.scss';

interface PaginationProps extends MuiPaginationProps {
    // 스타일을위한 클래스명
    className?: string;
    // 총 페이지
    count: number;
    // 시작 혹은 마지막 페이지 이동 버튼 옵션
    showOpt: boolean;
    // 현재 가르키고 있는 페이지
    page: MuiPaginationProps['page'];
    // 페이지 전환 이벤트
    onChange: MuiPaginationProps['onChange'];
    // 페이지네이션 버튼 갯수
    siblingCount?: MuiPaginationProps['siblingCount'];
}

const Pagination = (
    {
        className,
        count,
        showOpt,
        page,
        onChange,
        siblingCount,
    }: PaginationProps) => {
    return (
        <MuiPagination
            count={count}
            siblingCount={siblingCount}
            showFirstButton={showOpt}
            showLastButton={showOpt}
            page={page}
            onChange={onChange}
            className={clsN(className, `${style.pagination}`)}
        />
    );
};
Pagination.propTypes = {
    className: PropTypes.string,
    count: PropTypes.number.isRequired,
    showOpt: PropTypes.bool.isRequired,
    page: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    siblingCount: PropTypes.number,
};
Pagination.defaultProps = {
    className: `${style.pagination}`,
    siblingCount: 1,
};

export default Pagination;