import React from 'react';
import { Stack } from '@mui/material';
import DateRange from '@molecules/dateRange/DateRange';
import SearchBar from '@molecules/searchBar/SearchBar';
import clsN from 'classnames';
import styles from './styles/FilteredSearch.module.scss';

interface FilteredSearchProps {
    // root 클래스명
    className?: string;
}

export const FilteredSearch = ({ className }: FilteredSearchProps) => {
    /* JSX */
    const DateRangeCont = <DateRange />;
    /* 함수 */
    /* 렌더 */
    return (
        <Stack className={clsN(styles['fs-root'], className)} direction="row">
            {DateRangeCont}
            <SearchBar label="키워드 입력" />
        </Stack>
    );
};
