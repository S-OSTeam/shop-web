import React from 'react';
import Button from '@atoms/button/Button';
import { MenuItem, SelectChangeEvent, Stack } from '@mui/material';
import { SelectBox } from '@molecules/selectBox/SelectBox';
import DateRange from '@molecules/dateRange/DateRange';
import SearchBar from '@molecules/searchBar/SearchBar';
import { useRecoilState } from 'recoil';
import { noticesFilterStateAtom } from '@recoil/atoms/admin/inquiry/notices/noticesFilterAtom';
import clsN from 'classnames';
import styles from './styles/FilteredSearch.module.scss';

interface MenuItemProps {
    value: string;
    text: string;
}

interface FilteredSearchProps {
    // root 클래스명
    className?: string;
    // searchBar Value
    searchVal: string;
    // onSearch 이벤트 (검색바)
    onSearch: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    // onClear 이벤트 (버튼)
    onBtnClear: (e: React.MouseEvent<HTMLButtonElement>) => void;
    // onSearch 이벤트 (버튼)
    onBtnSearch: (e: React.MouseEvent<HTMLButtonElement>) => void;
    // selectButton 값 받기
    selectBtnItems: MenuItemProps[];
    // 리셋 트리거
    resetTrigger: boolean;
}

export const FilteredSearch = ({
    className,
    searchVal,
    onSearch,
    onBtnClear,
    onBtnSearch,
    selectBtnItems,
    resetTrigger,
}: FilteredSearchProps) => {
    /* 상태 */

    // 리코일 상태
    const [postStatus, setPostStatus] = useRecoilState(noticesFilterStateAtom);
    const [shareState, setShareState] = React.useState<MenuItemProps>(selectBtnItems[0]);

    /* 함수 */
    const handleSelectChange = (e: SelectChangeEvent) => {
        const selectedVal = e.target.value;
        const selectedData = selectBtnItems.find((item) => item.value === selectedVal);
        // e 를 통해 받은 selectedData 해당 값이 존재하는지 체크
        if (selectedData) {
            setShareState(selectedData);
            // 동시에 아톰 값도 바꾸기
            setPostStatus((prev) => ({
                // 깊은복사
                ...prev,
                // 아톰 상태값 text 중 일치하는 값으로
                postStatus: selectedData.text as '전체' | '공개' | '비공개',
            }));
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
    /*
     * 컴포넌트 마운트시 리코일의 상태와 동기화하기
     *
     *  */
    React.useEffect(() => {
        // 셀렉트 배열은 3가지: 전체, 공개, 비공개가 있고 현재 리코일 상태값에 일치하는지 체크
        const startItem = selectBtnItems.find((item) => item.text === postStatus.postStatus);
        // 현재 상태값에 따라 일치하는 셀렉트[i] 의 text 값을 현재 컴포넌트 상태값에 동기화
        if (startItem) {
            setShareState(startItem);
        }
    }, [postStatus.postStatus]);

    /* 렌더 */
    return (
        <Stack bgcolor="white" className={clsN(styles['filter-root'], className)} direction="row" gap={1}>
            {DateRangeCont}
            <SelectBox
                value={shareState.value.toString()}
                MenuItems={selectBtnItems}
                MenuRender={(item: MenuItemProps) => menuProvider(item)}
                handleMenuChange={handleSelectChange}
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
