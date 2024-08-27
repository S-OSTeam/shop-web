/* eslint-disable */
import React from 'react';
import { faqFilterState, faqFilterStateAtom } from '@recoil/atoms/admin/inquiry/faq/faqFilterAtome';
import { SelectChangeEvent, Stack } from '@mui/material';
import { Heading } from '@molecules/admin/layout/heading/Heading';
import { useRecoilState } from 'recoil';
import styles from './styles/Faq.module.scss';
import { ButtonGroup } from '@util/test/interface/ButtonGroup';
import { FaqCategoryButtonGroup, FaqPostButtonGroup } from '@util/test/data/admin/buttonGroup/faq/faqPostButtonGroup';
import { FilteredSearch } from '@organisms/admin/filteredSearch/FilteredSearch';
import { useSearchChange } from '@hooks/search/useSearchChange.hook';
import { useDebounce } from '@hooks/input/useDebounce.hook';
import { FaqData, FaqDataProps } from '@util/test/data/admin/faq/FaqData';
import Text from '@atoms/text/Text';
import { formatDate } from '@util/common/FormatDate';
import Chip from '@atoms/chip/Chip';
import { CollapseForm } from '@molecules/admin/notice/collapseForm/CollapseForm';
import { CollapsedListResult } from '@organisms/collapsedListResult/collapsedListResult';
import clsN from 'classnames';
import { faqDataFilter } from '@util/test/data/admin/faq/FaqDataFilter';

interface FaqProps {
    className?: string;
}

export const Faq = ({ ...props }: FaqProps) => {
    /* 상태 */
    // 필터 리코일 상태
    const [filterState, setFilterState] = useRecoilState(faqFilterStateAtom);
    // 검색 키워드 상태
    // 페이지 상태
    const [tPage, setTPage] = React.useState(0);
    // 페이지에 노출할 행의 갯수 상태
    const [rowPerPage, setRowPerPage] = React.useState(10);
    // 날짜 리셋 상태
    const [resetDateRange, setResetDateRange] = React.useState(false);

    // 등록 상태 버튼 그룹의 상태
    const [postSelectBtnState, setPostSelectBtnState] = React.useState<ButtonGroup>(FaqPostButtonGroup[0]);

    // 카테고리 버튼 그룹의 상태
    const [categoryBtnState, setCategoryBtnState] = React.useState<ButtonGroup>(FaqCategoryButtonGroup[0]);

    // searchBar input 상태 : hook 이벤트를 통해 재활용하기
    const { searchVal, handleChange, resetSearch } = useSearchChange();

    /* 함수 */
    // useEffect
    React.useEffect(() => {
        const startItem = FaqPostButtonGroup.find((item) => item.text === filterState.postStatus);
        if (startItem) {
            setPostSelectBtnState(startItem);
        }
    }, [filterState.postStatus]);
    // FaqData.ts 범위 추출
    const sliceFaqData = (param: FaqDataProps[], cutStart: number, cutEnd: number) => {
        // 시작 ~ 끝 부분 데이터 리턴
        return param.slice(cutStart, cutEnd);
    };

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
        const selectedData = FaqPostButtonGroup.find((item) => item.value === selectVal);
        if (selectedData) {
            setPostSelectBtnState(selectedData);
            // recoil 상태 변경
            setFilterState((prev) => ({
                ...prev,
                postStatus: selectedData.text as faqFilterState['postStatus'],
            }));
        } else {
            alert('value of Select is not same with e:Event');
        }
    };
    // 페이지당 노출될 행 갯수
    const handlePerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // 페이지당 보여줄 행 설정, 클릭 이벤트를 통해 선택된 값, "+": 문자열을 숫자로 변환
        setRowPerPage(+e.target.value);
        // 페이지 초기화
        setTPage(0);
    };

    // 페이지네이션 이벤트
    const handlePageChange = (e: unknown, newPage: number) => {
        setTPage(newPage);
    };

    // 리코일의 상태에 따른 필터 적용
    const filteredFaqLists = React.useMemo(() => {
        // useMemo 를 통해 filterState 상태가 변경될 때만 필터링 데이터 반환
        return faqDataFilter(FaqData, filterState);
    }, [filterState]);

    /* TSX */
    /** Faq 헤드라인 컴포넌트 */
    const headline = <Heading heading="(FAQ)자주묻는 질문" subtitle1="자주 묻는 질문과 답변을 확인해 보세요" />;

    /* TODO : 해당 데이터는 GQL 로 구현해야함 */
    // FAQ 더미데이터 .ts 로 불러오기
    const faqDataConvert = sliceFaqData(filteredFaqLists, tPage * rowPerPage, tPage * rowPerPage + rowPerPage).map(
        (item) => {
            const { ...itemParam } = item;
            // 수정내역 여부
            const fixDateTemp = itemParam.fixDate && <Text text={formatDate(itemParam.fixDate)} className={clsN()} />;
            // tableTitle 영역
            const tRowTitle = [
                <Text text={itemParam.title} className={clsN()} />,
                <Text text={itemParam.uploader} className={clsN()} />,
                <Chip size="small" label={itemParam.postState} className={clsN()} />,
                <Text text={formatDate(itemParam.uploadDate)} className={clsN()} />,
                fixDateTemp,
            ];
            // tableContext 영역
            const tCollContext = (
                <CollapseForm
                    uid={itemParam.uid}
                    uploadDate={itemParam.uploadDate}
                    uploader={itemParam.uploader}
                    context={itemParam.context}
                    title={itemParam.title}
                    fixedDate={itemParam.fixDate}
                    imgUrls={itemParam.imageUrls}
                />
            );
            return { tRowTitle, tCollContext };
        },
    );

    /* 렌더 */
    return (
        <Stack className={clsN(styles['faq-root'], props.className)}>
            {headline}
            <FilteredSearch
                searchVal={searchVal}
                onSearch={handleChange}
                selectValue={postSelectBtnState.value.toString()}
                selectBtnItems={FaqPostButtonGroup}
                resetTrigger={resetDateRange}
                onSelectChange={handleSelectChange}
                onBtnSearch={handleSunmitButton}
                onBtnClear={handleSearchFilterReset}
            />
            <CollapsedListResult
                classesList={{
                    root: clsN(),
                    tableContainer: clsN(),
                    pagination: clsN(),
                }}
                tHeaders={['제목', '작성자', '상태', '등록일', '수정일']}
                tableLabel="테이블 라벨"
                tableDB={faqDataConvert}
                tablePageProps={{
                    rowsPerPageOptions: [10, 25, 100],
                    rowsPerPage: rowPerPage,
                    count: FaqData.length,
                    page: tPage,
                    onPageChange: handlePageChange,
                    onRowsPerPageChange: handlePerPageChange,
                }}
            />
        </Stack>
    );
};
Faq.defaultProps = {
    className: styles['faq-root'],
};
