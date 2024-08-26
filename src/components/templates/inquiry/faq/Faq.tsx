/* eslint-disable */
import React from 'react';
import { faqFilterStateAtom } from '@recoil/atoms/admin/inquiry/faq/faqFilterAtome';
import { SelectChangeEvent, Stack } from '@mui/material';
import { Heading } from '@molecules/admin/layout/heading/Heading';
import { AutoComplete } from '@molecules/autoComplete/AutoComplete';
import { useRecoilState } from 'recoil';
import clsN from 'classnames';
import styles from './styles/Faq.module.scss';
import { ButtonGroup } from '@util/test/interface/ButtonGroup';
import { FaqButtonGroup } from '@util/test/data/admin/buttonGroup/faq/faqButtonGroup';
import { FilteredSearch } from '@organisms/admin/filteredSearch/FilteredSearch';
import { useSearchChange } from '@hooks/search/useSearchChange.hook';
import { useDebounce } from '@hooks/input/useDebounce.hook';

interface FaqProps {
    className?: string;
}

export const Faq = ({ ...props }: FaqProps) => {
    /* 상태 */
    // 필터 리코일 상태
    const [filterState, setFilterState] = useRecoilState(faqFilterStateAtom);
    // 검색 키워드 상태
    // const [searchVal, setSearchVal] = React.useState('');
    // 페이지 상태
    const [tPage, setTPage] = React.useState(0);
    // 페이지에 노출할 행의 갯수 상태
    const [rowPerPage, setRowPerPage] = React.useState(10);
    // 날짜 리셋 상태
    const [resetDateRange, setResetDateRange] = React.useState(false);

    // 버튼 그룹의 상태
    const [selectBtnState, setSelectBtnState] = React.useState<ButtonGroup>(FaqButtonGroup[0]);

    // hook 이벤트를 통해 재활용하기
    const { searchVal, handleChange, resetSearch } = useSearchChange();

    /* 함수 */
    // useEffect
    React.useEffect(() => {
        const startItem = FaqButtonGroup.find((item) => item.text === filterState.postStatus);
        if (startItem) {
            setSelectBtnState(startItem);
        }
    }, [filterState.postStatus]);
    // 검색 이벤트
    // TODO : 다른 컴포넌트와 겹치는 기능은 따로 유틸로 빼놓기
    // TODO : 스패밍, unBounce 이벤트 고려하기
    const debounceSearchValue = useDebounce(searchVal, 200);
    // 검색 submit 버튼 이벤트
    const handleSunmitButton = () => {
        setFilterState((prev) => ({
            ...prev,
            keyword: debounceSearchValue,
        }));
    };
    // 검색필터 초기화 이벤트
    const handleSearchFilterReset = () => {
        setFilterState(() => ({
            startDate: undefined,
            endDate: undefined,
            category: 'all',
            postStatus: 'all',
            keyword: undefined,
        }));
        resetSearch();
        setResetDateRange((prevState) => !prevState);
    };
    // 버튼그룹 번경 이벤트
    const handleSelectChange = (e: SelectChangeEvent) => {
        const selectVal = e.target.value;
        const selectedData = FaqButtonGroup.find((item) => item.value === selectVal);
        if (selectedData) {
            setSelectBtnState(selectedData);
            // recoil 상태 변경
            setFilterState((prev) => ({
                ...prev,
                postStatus: selectedData.text as 'all' | 'posted' | 'private',
            }));
        } else {
            alert('value of Select is not same with e:Event');
        }
    };

    /* TSX */
    /** Faq 헤드라인 컴포넌트 */
    const headline = <Heading heading="(FAQ)자주묻는 질문" subtitle1="자주 묻는 질문과 답변을 확인해 보세요" />;

    /* 렌더 */
    return (
        <Stack className={clsN(styles['faq-root'], props.className)}>
            {headline}
            <FilteredSearch
                searchVal={searchVal}
                onSearch={handleChange}
                selectValue={selectBtnState.value.toString()}
                selectBtnItems={FaqButtonGroup}
                resetTrigger={resetDateRange}
                onSelectChange={handleSelectChange}
                onBtnSearch={handleSunmitButton}
                onBtnClear={handleSearchFilterReset}
            />
        </Stack>
    );
};
Faq.defaultProps = {
    className: styles['faq-root'],
};
