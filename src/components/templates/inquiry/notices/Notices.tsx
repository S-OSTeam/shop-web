import React from 'react';
import { formatDate } from '@util/common/FormatDate';
import { Notification, NotificationProps } from '@util/test/data/admin/notification/Notification';
import { Heading } from '@molecules/admin/layout/heading/Heading';
import { SelectChangeEvent, Stack } from '@mui/material';
import { FilteredSearch } from '@organisms/admin/filteredSearch/FilteredSearch';
import { CollapsedListResult } from '@organisms/collapsedListResult/collapsedListResult';
import Text from '@atoms/text/Text';
import Chip from '@atoms/chip/Chip';
import { CollapseForm } from '@molecules/admin/notice/collapseForm/CollapseForm';
import { useRecoilState } from 'recoil';
import { noticesFilterStateAtom } from '@recoil/atoms/admin/inquiry/notices/noticesFilterAtom';
import { filteringNotices } from '@util/test/data/admin/notification/NoticeFilter';
import { useSearchChange } from '@hooks/search/useSearchChange.hook';
import { ButtonGroup } from '@util/test/interface/ButtonGroup';
import { NotificationButtonGroup } from '@util/test/data/admin/buttonGroup/notification/notificationButtonGroup';
import { useDebounce } from '@hooks/input/useDebounce.hook';
import { TinyMCEditor } from '@molecules/tinyMCEditor/TinyMCEditor';
import clsN from 'classnames';
import styles from './styles/Notices.module.scss';

export const NoticesTemplate = () => {
    /* 상태 */
    // 커스텀 훅을 통한 상태관리 : 검색 입력
    const { searchVal, handleChange, resetSearch } = useSearchChange();
    // 필터 리코일 상태
    const [filterState, setFilterState] = useRecoilState(noticesFilterStateAtom);
    // 페이지 상태
    const [tPage, setTPage] = React.useState(0);
    // 페이지에 노출할 행의 갯수 상태
    const [rowPerPage, setRowPerPage] = React.useState(10);
    // 데이터 리셋 상태
    const [resetDateRange, setResetDateRange] = React.useState(false);
    // selectBtn 아이템들, NoticeFilterAtom 에 맞춰 가져오기
    const [selectBtnState, setSelectBtnState] = React.useState<ButtonGroup>(NotificationButtonGroup[0]);
    // Debounced 입력 상태 : 2초 제한
    const debounceSearchValue = useDebounce(searchVal, 200);
    // 에디터 상태
    const [editorContent, setEditorContent] = React.useState<string>('');

    // filterState.postStatus > 등록상태값을 의존성으로 체크하면서 상태 변화함
    React.useEffect(() => {
        const startItem = NotificationButtonGroup.find((item) => item.text === filterState.postStatus);
        if (startItem) {
            setSelectBtnState(startItem);
        }
    }, [filterState.postStatus]);

    /* 함수 */
    // 버튼그룹 변경 이벤트 (selectButtonGroup)
    const handleSelectChange = (e: SelectChangeEvent) => {
        const selectedVal = e.target.value;
        const selectedData = NotificationButtonGroup.find((item) => item.value === selectedVal);
        if (selectedData) {
            setSelectBtnState(selectedData);
            // recoil atom 변경
            setFilterState((prev) => ({
                ...prev,
                postStatus: selectedData.text as 'all' | 'posted' | 'private',
            }));
        } else {
            alert('value of Select is not same with e:Event');
        }
    };

    // TData 테이블 범위 추출 처리
    const sliceTData = (param: NotificationProps[], cutStart: number, cutEnd: number) => {
        return param.slice(cutStart, cutEnd);
    };

    // 검색필터 초기화 이벤트
    const handelFilterReset = () => {
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
    // 검색 submit 버튼 이벤트
    const handleSearch = () => {
        // 기존 필터 속성들을 유지하되 키워드 변경만 적용하기
        setFilterState((prev) => ({
            ...prev,
            // 스패밍 방지 입력중인 searchVal 이 아닌 디바운스 상태값 적용
            keyword: debounceSearchValue,
        }));
    };
    // 페이지 전환 이벤트
    const handleChangePage = (e: unknown, newPage: number) => {
        setTPage(newPage);
    };
    // 페이지에 노출할 행 갯수 전환 이벤트
    const handleChangePerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
        // 페이지당 보여줄 행 설정, 클릭 이벤트를 통해 선택된 값, "+": 문자열을 숫자로 변환
        setRowPerPage(+e.target.value);
        // 페이지 초기화
        setTPage(0);
    };
    // 에디터 입력 이벤트
    const handleEditorChange = (newConetnt: string) => {
        setEditorContent(newConetnt);
    };

    // TODO : GQL 적용 해야됨, 임시로 .ts 파일을 활용해 데이터 불러오기
    // 필터링된 타입 공지사항 상태값
    const filteredNtcItems = React.useMemo(() => {
        // useMemo 를 통해 filterState 상태가 변경될때만 필터링된 데이터 반환
        return filteringNotices(Notification, filterState);
    }, [filterState]);
    /* JSX 모듈 */
    const headline = <Heading heading="공지사항 관리" subtitle1="고객들께 중요한 소식을 전해주세요" />;
    // ts 유틸 데이터 tData 에 전달하기

    // TODO : GQL 적용 해야됨, 임시로 .ts 파일을 활용해 데이터 불러오기
    // TODO: 렌더링 규모가 너무 큰 방식임 수정 예정
    // 변환된 데이터 sliceTData 함수 활용
    const tDataConvert = sliceTData(filteredNtcItems, tPage * rowPerPage, tPage * rowPerPage + rowPerPage).map(
        (item) => {
            const { uid, title, postState, uploader, uploadDate, fixDate, context, imageUrls } = item;
            // 수정한 내역이 있는지 체크
            const fixDateTemp = fixDate && <Text text={formatDate(fixDate)} className={clsN()} />;

            // tableTitle 영역
            const tRowTitle = [
                <Text text={title} className={clsN()} />,
                <Text text={uploader} className={clsN()} />,
                <Chip size="small" label={postState} className={clsN()} />,
                <Text text={formatDate(uploadDate)} className={clsN()} />,
                fixDateTemp,
            ];
            // tableContext 영역
            const tCollContext = (
                <CollapseForm
                    uid={uid}
                    uploadDate={uploadDate}
                    uploader={uploader}
                    context={context}
                    title={title}
                    fixedDate={fixDate}
                    imgUrls={imageUrls}
                />
            );
            return { tRowTitle, tCollContext };
        },
    );

    return (
        <Stack className={clsN(styles['notices-t'])}>
            {headline}
            <FilteredSearch
                searchVal={searchVal}
                onSearch={handleChange}
                selectValue={selectBtnState.value.toString()}
                selectBtnItems={NotificationButtonGroup}
                onBtnClear={handelFilterReset}
                onBtnSearch={handleSearch}
                onSelectChange={handleSelectChange}
                resetTrigger={resetDateRange}
            />
            <CollapsedListResult
                classesList={{
                    root: styles['table-root'],
                    tableContainer: styles['table-root__table'],
                    pagination: styles['table-root__pagination'],
                }}
                tHeaders={['제목', '작성자', '상태', '등록일', '수정일']}
                tableLabel="테이블 라벨"
                tableDB={tDataConvert}
                tablePageProps={{
                    rowsPerPageOptions: [10, 25, 100],
                    count: Notification.length,
                    rowsPerPage: rowPerPage,
                    page: tPage,
                    onPageChange: handleChangePage,
                    onRowsPerPageChange: handleChangePerPage,
                }}
            />
            <TinyMCEditor
                initialValue="<p>welcome to Tiny 뭐시기</p>"
                value={editorContent}
                onChange={handleEditorChange}
            />
        </Stack>
    );
};
