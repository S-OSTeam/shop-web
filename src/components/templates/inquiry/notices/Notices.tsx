/* eslint-disable */
import React from 'react';
import { formatDate } from '@util/FormatDate';
import { Notification, NotificationProps } from '@util/test/data/admin/notification/Notification';
import { Heading } from '@molecules/admin/layout/heading/Heading';
import { Stack } from '@mui/material';
import { FilteredSearch } from '@organisms/admin/filteredSearch/FilteredSearch';
import { CollapsedListResult } from '@organisms/collapsedListResult/collapsedListResult';
import Text from '@atoms/text/Text';
import Chip from '@atoms/chip/Chip';
import { CollapseForm } from '@molecules/admin/notice/collapseForm/CollapseForm';
import { useRecoilState } from 'recoil';
import { noticesFilterStateAtom, noticesFilterState } from '@recoil/atoms/admin/inquiry/notices/noticesFilterAtom';
import clsN from 'classnames';
import styles from './styles/Notices.module.scss';
import { filteringNotices } from '@util/test/data/admin/notification/NoticeFilter';

export const NoticesTemplate = () => {
    /* 상태 */
    // 필터 리코일 상태
    const [filterState, setFilterState] = useRecoilState(noticesFilterStateAtom);

    // searchBar 상태
    const [searchVal, setSearchVal] = React.useState('');

    // 페이지 상태
    const [tPage, setTPage] = React.useState(0);
    // 페이지에 노출할 행의 갯수 상태
    const [rowPerPage, setRowPerPage] = React.useState(10);

    // 필터링된 타입 공지사항 상태값
    const [filteredNtcItems, setFilteredNtcItems] = React.useState<NotificationProps[]>([]);
    // 데이터 리셋 상태
    const [resetDateRange, setResetDateRange] = React.useState(false);

    // selectBtn 아이템들
    const SelectBtnItems = [
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

    /*
     * !!! : GQL 적용 해야됨
     * 임시로 .ts 파일을 활용해 데이터 불러오기
     */
    const noticesStorage: NotificationProps[] = [];
    // 해당 공지 데이터 저장 적용하기

    /* 함수 */

    /* UssEffect */
    React.useEffect(() => {
        // 인자로 ts 공지사항 데이터와 필터속성을 필터링 함수에 활용
        const filtered = filteringNotices(Notification, filterState);
        // 필터링된 값 적용
        setFilteredNtcItems(filtered);
    }, [filterState]);

    // 검색바 입력 이벤트
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchVal(e.target.value);
    };

    // 검색필터 초기화 이벤트
    const handelFilterReset = () => {
        setFilterState(() => ({
            startDate: undefined,
            endDate: undefined,
            category: 'all',
            postStatus: '전체',
            keyword: undefined,
        }));
        setSearchVal('');
        setResetDateRange((prevState) => !prevState);
    };
    // 검색필터 적용 이벤트
    const handleSearch = () => {
        // 기존 필터 속성들을 유지하되 키워드 변경만 적용하기
        setFilterState((prev) => ({
            ...prev,
            keyword: searchVal,
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

    // ts 유틸 데이터 tData 에 전달하기
    /* 규모가 너무 큰 렌더링 방식임 수정 고려중 */
    // 필터링된 값을 잘라서 랜더
    const tDataConvert = filteredNtcItems.slice(tPage * rowPerPage, tPage * rowPerPage + rowPerPage).map((item) => {
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
    });
    /* JSX 모듈 */
    const headline = <Heading heading="공지사항 관리" subtitle1="고객들께 중요한 소식을 전해주세요" />;

    return (
        <Stack className={clsN(styles['notices-t'])}>
            {headline}
            <FilteredSearch
                searchVal={searchVal}
                onSearch={handleSearchChange}
                onBtnClear={handelFilterReset}
                onBtnSearch={handleSearch}
                selectBtnItems={SelectBtnItems}
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
        </Stack>
    );
};
