import React from 'react';
import Button from '@atoms/button/Button';
import { MenuItem, SelectChangeEvent, Stack } from '@mui/material';
import { SelectBox } from '@molecules/selectBox/SelectBox';
import DateRange from '@molecules/dateRange/DateRange';
import SearchBar from '@molecules/searchBar/SearchBar';
import clsN from 'classnames';
import styles from './styles/FilteredSearch.module.scss';

interface MenuItemProps {
    value: string;
    text: string;
}

interface FilteredSearchProps {
    // root 클래스명
    className?: string;
}

export const FilteredSearch = ({ className }: FilteredSearchProps) => {
    /* 상태 */
    // 셀렉트 메뉴 아이템들
    const selectItems: MenuItemProps[] = [
        {
            value: '0',
            text: '전체',
        },
        {
            value: '1',
            text: '공개',
        },
        {
            value: '2',
            text: '비공개',
        },
    ];
    const [shareState, setShareState] = React.useState<MenuItemProps>(selectItems[0]);
    /* 함수 */
    const handleSelectChange = (e: SelectChangeEvent) => {
        const selectedVal = e.target.value;
        const selectedData = selectItems.find((item) => item.value === selectedVal);
        // e 를 통해 받은 selectedData 해당 값이 존재하는지 체크
        if (selectedData) {
            setShareState(selectedData);
            // 동시에 아톰 값도 바꾸기
        } else {
            console.log(`이벤트를 통해 받은 Value 가 존재하지 않음..!${selectedData}`);
        }
    };
    // 메뉴 컴폰넌트 제공 함수
    const menuProvider = (_item: MenuItemProps) => {
        const menuText = _item.text;
        return <MenuItem value={_item.value}>{menuText}</MenuItem>;
    };
    /* JSX */
    // 날짜조회 컴포넌트
    const DateRangeCont = <DateRange />;
    // 초기화 버튼 컴포넌트
    const ClearBtn = (
        <Button variant="outlined" className={clsN(styles['filter-root__button'], styles['filter-root__button-clear'])}>
            Clear
        </Button>
    );
    // 조회 버튼 컴포넌트
    const SearchBtn = (
        <Button
            variant="outlined"
            className={clsN(styles['filter-root__button'], styles['filter-root__button-search'])}
        >
            Search
        </Button>
    );

    /* 렌더 */
    return (
        <Stack className={clsN(styles['filter-root'], className)} direction="row" gap={1}>
            {DateRangeCont}
            <SelectBox
                value={shareState.value.toString()}
                MenuItems={selectItems}
                MenuRender={(item: MenuItemProps) => menuProvider(item)}
                handleMenuChange={handleSelectChange}
            />
            <SearchBar label="키워드 입력" />
            {ClearBtn}
            {SearchBtn}
        </Stack>
    );
};
FilteredSearch.defaultProps = {
    className: styles['fs-root'],
};
