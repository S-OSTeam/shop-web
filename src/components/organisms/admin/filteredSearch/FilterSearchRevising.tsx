import React from 'react';
import { ButtonProps, MenuItem, SelectChangeEvent, Stack } from '@mui/material';
import { SelectMenuItemProps } from '@organisms/admin/filteredSearch/FilteredSearch';
import { SelectBox } from '@molecules/selectBox/SelectBox';
import Button from '@atoms/button/Button';
import SearchBar from '@molecules/searchBar/SearchBar';
import DateRange from '@molecules/dateRange/DateRange';
import { useRecoilState } from 'recoil';
import { noticeFilterAtom } from '@recoil/atoms/admin/inquiry/notices/filter/noticeFilterAtom';
import { EnumValue, EventFilterType, TypenameDataResponse } from '@interface/evnet/filter/EventFilterType';
import dayjs, { Dayjs } from 'dayjs';
import useGraphQL from '@hooks/useGraphQL';
import { GET_EVENT_TYPE } from '@api/apollo/gql/queries/NoticesResponseQuery.gql';
import clsN from 'classnames';
import styles from './styles/FilteredSearch.module.scss';

// select 변경이벤트를 위한 타입
type SelectType = 'category' | 'postStatus';

export const FilterSearchRevising = () => {
    /** 상태 */
    const [postedDate, setPostedDate] = React.useState<Dayjs | null>(null); // 수정일일 범위 1 상태
    const [fixedDate, setFixedDate] = React.useState<Dayjs | null>(null); // 등록일 범위 2 상태

    const [eventFromDate, setEventFromDate] = React.useState<Dayjs | null>(null); // 등록일 범위 1 상태 (이벤트)
    const [eventEndDate, setEventEndDate] = React.useState<Dayjs | null>(null); // 등록일 범위 2 상태 (이벤트)

    // 카테고리, 등록상태 gql 로 데이터와 패치 받기 아래는 구조 예시
    const [categoryList, setCategoryList] = React.useState<ButtonProps[]>([
        {
            value: '0',
            title: '전체 임시로 공지',
            children: 'NOTICE',
        },
    ]);

    const postStatusList: ButtonProps[] = [
        {
            value: '0',
            title: '전체',
            children: 'ALL',
        },
        {
            value: '1',
            title: '공개',
            children: 'published',
        },
        {
            value: '2',
            title: '비공개',
            children: 'privated',
        },
    ];
    // 클래스 이름
    const dateRangeClassNames = [
        styles['filter-root__button'],
        styles['filter-root__button__date'],
        styles['date-range'],
    ];
    const popoverAreaClassNames = [
        styles['filter-root__button'],
        styles['filter-root__button__date'],
        styles['date-range__picker'],
    ];
    const [searchFilterState, setSearchFilterState] = useRecoilState(noticeFilterAtom); // 검색 필터 리코일 상태
    const [keywardValue, setKeywardValue] = React.useState<string>(''); // 검색 키워드 상태

    const [categoryValue, setCategoryValue] = React.useState<ButtonProps>(categoryList[0]); // 카테고리 셀렉트 값

    const [postStatusValue, setPostStatusValue] = React.useState<ButtonProps>(postStatusList[0]); // 공개상태 셀렉트 값

    const { data: eventTypeData } = useGraphQL({
        query: GET_EVENT_TYPE,
        type: 'query',
        request: {},
        option: {},
    }); // 이벤트 타입목록 enum 조회

    /** 필터 리코일 상태가 변경될때마다 셀렉트 박스 갱신 */
    React.useEffect(() => {
        // 카테고리 검색
        const startItem = categoryList.find((item) => item.children === searchFilterState.eventType);
        const startItemPost = postStatusList.find((item) => item.children === searchFilterState.postStatus);
        if (startItem) {
            setCategoryValue(startItem);
        }
        if (startItemPost) {
            setPostStatusValue(startItemPost);
        }
    }, [searchFilterState.eventType, setSearchFilterState.prototype]);

    // 마운트 될때 카테고리 목록 불러오기
    React.useEffect(() => {
        // eslint-disable-next-line no-underscore-dangle
        if (!eventTypeData?.__typename?.enumValues) return;

        const defaultButtonOption: ButtonProps = {
            value: '0',
            title: '전체 임시 공지',
            children: 'NOTICE',
        }; // 기본 버튼 속성

        // eslint-disable-next-line no-underscore-dangle
        const eventTypes: ButtonProps[] = (eventTypeData as TypenameDataResponse).__typename.enumValues.map(
            (enumType: EnumValue, index: number) => ({
                value: (index + 1).toString(),
                title: enumType.name,
                children: enumType.name,
            }),
        ); // 쿼리 조회 성공 시 버튼 속성에 맞게 매핑
        setCategoryList([defaultButtonOption, ...eventTypes]); // 카테고리 리스트 갱신
        if (!searchFilterState.eventType) {
            // 이벤트 타입 값이 없을 경우 : selectBox, recoil 값을 default 로 설정
            setCategoryValue(defaultButtonOption); // 선택된 카테고리 상태 기본값으로 설정
            setSearchFilterState((prev) => ({
                ...prev,
                eventType: 'NOTICE',
            }));
        }
    });

    /** 함수 */
    // MenuItem 컴포넌트 제공 함수
    const menuItemProvider = (menuItem: SelectMenuItemProps) => {
        const menuItemCode = menuItem.children?.toString();
        return <MenuItem value={menuItem.value}>{menuItemCode}</MenuItem>;
    };
    // 키워드 입력 이벤트
    const handleKeywardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeywardValue(e.target.value);
    };
    // selectBox : Category 셀렉트박스 이벤트
    const handleselectChange = (e: SelectChangeEvent, type: SelectType, buttonGroupProps: ButtonProps[]) => {
        const selectedValue = e.target.value; // 선택된 값
        const filtedValue = buttonGroupProps.find((item) => item.value === selectedValue); // 조회된 값
        if (filtedValue) {
            // 필터를 통한 값이 존재하면...
            if (type === 'category') {
                // 카테고리 분기
                setCategoryValue(filtedValue); // 상태 변경
                // 리코일 상태 수정
                setSearchFilterState((prev) => ({
                    ...prev,
                    eventType: 'NOTICE', // 이벤트 타입 배포되기전에 default 는 NOTICE
                    // eventType: filtedValue.children as string,
                }));
            } else if (type === 'postStatus') {
                // 공개상태 분기
                setPostStatusValue(filtedValue); // 상태 변경
                // 리코일 상태 수정
                setSearchFilterState((prev) => ({
                    ...prev,
                    postStatus: filtedValue.children as string,
                }));
            }
        }
    };

    // DateRange 등록일 수정일 이벤트
    const handleDateChange = (startDate: Date | undefined, endDate: Date | undefined) => {
        setSearchFilterState((prev) => ({
            ...prev,
            startedAt: startDate,
            endedAt: endDate,
        }));
        setPostedDate(startDate ? dayjs(startDate) : null);
        setFixedDate(endDate ? dayjs(endDate) : null);
    };

    // DateRange 이벤트기간 이벤트
    const handleEventDateChange = (startDate: Date | undefined, endDate: Date | undefined) => {
        setSearchFilterState((prev) => ({
            ...prev,
            postedAt: startDate,
            fixedAt: endDate,
        }));
        setEventFromDate(startDate ? dayjs(startDate) : null);
        setEventEndDate(endDate ? dayjs(startDate) : null);
    };

    // 초기화 이벤트
    const handleResetClick = () => {
        setSearchFilterState(() => ({
            startedAt: undefined,
            endedAt: undefined,
            postedAt: undefined,
            fixedAt: undefined,
            postStatus: '',
            eventType: '',
            keyword: '',
        })); // 리코일 상태 초기화
        setKeywardValue(''); // 키워드 입력 초기화
        setCategoryValue(categoryList[0]);
        setPostStatusValue(postStatusList[0]);
        setPostedDate(null);
        setFixedDate(null);
        setEventFromDate(null);
        setEventEndDate(null);
    };
    // 검색 이벤트
    const handleSearchClick = () => {
        const newFilters: Partial<EventFilterType> = {
            keyword: keywardValue,
            eventType: categoryValue.children as string,
            postStatus: postStatusValue.children as string,
            postedAt: searchFilterState.startedAt,
            fixedAt: searchFilterState.fixedAt,
            startedAt: searchFilterState.startedAt,
            endedAt: searchFilterState.endedAt,
        };
        setSearchFilterState((prev) => ({
            ...prev,
            ...newFilters,
        }));
    };

    /* TSX */
    // 날짜 조회 DateContainer 컴포넌트

    // 초기화 버튼 컴포넌트
    const ClearBtn = (
        <Button
            variant="outlined"
            className={clsN(styles.submit__button, styles['submit__button-clear'])}
            onClick={handleResetClick}
        >
            Clear
        </Button>
    );
    // 조회 버튼 컴포넌트
    const SearchBtn = (
        <Button
            variant="contained"
            className={clsN(styles.submit__button, styles['submit__button-search'])}
            onClick={handleSearchClick}
        >
            Apply
        </Button>
    );
    /** 렌더 */
    return (
        <Stack className={clsN(styles['filter-root'])}>
            <Stack className={clsN(styles['filter-root__field'])}>
                <SearchBar
                    wrapperClsN={clsN(styles['filter-root__field__form'])}
                    inputVal={keywardValue}
                    onChange={handleKeywardChange}
                    label="키워드 입력"
                />
                <SelectBox
                    formClsN={clsN(styles['filter-root__field__form'])}
                    value={categoryValue.value}
                    MenuItems={categoryList}
                    inputLabel="카테고리"
                    MenuRender={(item: SelectMenuItemProps) => menuItemProvider(item)}
                    handleMenuChange={(e) => handleselectChange(e, 'category', categoryList)}
                />
                <SelectBox
                    formClsN={clsN(styles['filter-root__field__form'])}
                    value={postStatusValue.value}
                    MenuItems={postStatusList}
                    inputLabel="공개상태"
                    MenuRender={(item: SelectMenuItemProps) => menuItemProvider(item)}
                    handleMenuChange={(e) => handleselectChange(e, 'postStatus', categoryList)}
                />
            </Stack>
            <Stack className={clsN(styles['date-range-box'])} gap={1}>
                <DateRange
                    rootClsN={styles['date-range-box__calender']}
                    className={clsN(dateRangeClassNames)}
                    pickerClsN={clsN(popoverAreaClassNames)}
                    fromDate={postedDate}
                    endDate={fixedDate}
                    onDateChange={handleDateChange}
                    onReset={handleResetClick}
                    defaultText="From"
                    inputLabel="등록 날짜"
                    inputLabelId="post-daterange"
                />
                <DateRange
                    rootClsN={styles['date-range-box__calender']}
                    className={clsN(dateRangeClassNames)}
                    pickerClsN={clsN(popoverAreaClassNames)}
                    fromDate={eventFromDate}
                    endDate={eventEndDate}
                    onDateChange={handleEventDateChange}
                    onReset={handleResetClick}
                    defaultText="End"
                    inputLabel="이벤트 날짜"
                    inputLabelId="event-daterange"
                />
            </Stack>
            <Stack className={clsN(styles.submit)}>
                {ClearBtn}
                {SearchBtn}
            </Stack>
        </Stack>
    );
};
