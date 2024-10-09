/* eslint-disable */
import React from 'react';
import Button from '@atoms/button/Button';
import { ButtonProps, MenuItem, SelectChangeEvent, Stack } from '@mui/material';
import { SelectBox } from '@molecules/selectBox/SelectBox';
import DateRange from '@molecules/dateRange/DateRange';
import SearchBar from '@molecules/searchBar/SearchBar';
import clsN from 'classnames';
import styles from './styles/FilteredSearch.module.scss';

export interface SelectMenuItemProps extends ButtonProps {}

interface FilteredSearchProps {
    // root 클래스명
    className?: string;
    // searchBar Value
    searchVal: string;
    // onSearch 이벤트 (검색바)
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    // onClear 이벤트 (버튼)
    onBtnClear: (e: React.MouseEvent<HTMLButtonElement>) => void;
    // onSearch 이벤트 (버튼)
    onBtnSearch: (e: React.MouseEvent<HTMLButtonElement>) => void;
    // onSelectChange 리스트 선택 이벤트
    onSelectChange: (e: SelectChangeEvent) => void;
    // selectButton 값 받기
    selectBtnItems: SelectMenuItemProps[];
    // 리셋 트리거
    resetTrigger: boolean;
    // SelectVal
    selectValue?: ButtonProps['value'];
}

export const FilteredSearch = ({
    className,
    searchVal,
    onSearch,
    onBtnClear,
    onBtnSearch,
    selectBtnItems,
    resetTrigger,
    selectValue,
    onSelectChange,
}: FilteredSearchProps) => {
    /* 상태 */

    // 메뉴 컴폰넌트 제공 함수
    const menuProvider = (_item: SelectMenuItemProps) => {
        const menuText = _item.children?.toString();
        return <MenuItem value={_item.value}>{menuText}</MenuItem>;
    };
    /* JSX */

    // 날짜조회 컴포넌트
    const DateRangeCont = (
        <DateRange
            className={clsN(styles['filter-root__button'], styles['filter-root__button__date'], styles['date-range'])}
            pickerClsN={clsN(
                styles['filter-root__button'],
                styles['filter-root__button__date'],
                styles['date-range__picker'],
            )}
            resetTrigger={resetTrigger}
        />
    );
    // 초기화 버튼 컴포넌트
    const ClearBtn = (
        <Button
            variant="outlined"
            className={clsN(styles['filter-root__button'], styles['filter-root__button__clear'])}
            onClick={onBtnClear}
        >
            Clear
        </Button>
    );
    // 조회 버튼 컴포넌트
    const SearchBtn = (
        <Button
            variant="outlined"
            className={clsN(styles['filter-root__button'], styles['filter-root__button__search'])}
            onClick={onBtnSearch}
        >
            Search
        </Button>
    );

    /* 렌더 */
    return (
        <Stack bgcolor="white" className={clsN(styles['filter-root'], className)} direction="row" gap={1}>
            {DateRangeCont}
            <SelectBox
                value={selectValue}
                MenuItems={selectBtnItems}
                MenuRender={(item: SelectMenuItemProps) => menuProvider(item)}
                handleMenuChange={onSelectChange}
            />
            <SearchBar inputVal={searchVal} onChange={onSearch} label="키워드 입력" />
            {ClearBtn}
            {SearchBtn}
        </Stack>
    );
};
FilteredSearch.defaultProps = {
    className: styles['fs-root'],
};
