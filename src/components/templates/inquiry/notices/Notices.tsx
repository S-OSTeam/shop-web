/* eslint-disable */
import React from 'react';
import { formatDate } from '@util/common/FormatDate';
import { Notification, NotificationProps } from '@util/test/data/admin/notification/Notification';
import { Heading } from '@molecules/admin/layout/heading/Heading';
import { ButtonProps, SelectChangeEvent, Stack } from '@mui/material';
import { FilteredSearch } from '@organisms/admin/filteredSearch/FilteredSearch';
import { CollapsedListResult } from '@organisms/collapsedListResult/collapsedListResult';
import Text from '@atoms/text/Text';
import Chip from '@atoms/chip/Chip';
import { CollapseForm } from '@molecules/admin/notice/collapseForm/CollapseForm';
import { useRecoilState } from 'recoil';
import { noticesFilterStateAtom } from '@recoil/atoms/admin/inquiry/notices/noticesFilterAtom';
import { filteringNotices } from '@util/test/data/admin/notification/NoticeFilter';
import { useSearchChange } from '@hooks/search/useSearchChange.hook';
import { NotificationButtonGroup } from '@util/test/data/admin/buttonGroup/notification/notificationButtonGroup';
import { useDebounce } from '@hooks/input/useDebounce.hook';
import clsN from 'classnames';
import styles from './styles/Notices.module.scss';
import { ModalEditor } from '@organisms/admin/modalEditor/ModalEditor';
import { TRowTitleArea } from '@molecules/admin/notice/collapseForm/tRowTitle/TRowTitle';
import Button from '@atoms/button/Button';
import { pcickedCollapsedButton, pickedPostButton } from '@util/common/admin/data/button/buttonItems';

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
    const [selectBtnState, setSelectBtnState] = React.useState<ButtonProps>(NotificationButtonGroup[0]);
    // Debounced 입력 상태 : 2초 제한
    const debounceSearchValue = useDebounce(searchVal, 200);
    // 에디터 상태
    const [editorContent, setEditorContent] = React.useState<string>('');
    // 에디터 ref
    const editorRef = React.useRef(null);
    // 모달 상태
    const [modalState, setModalState] = React.useState<boolean>(false);
    // 현재 선택된 uid 값
    const [currentUid, setCurrentUid] = React.useState<string>('');
    // 모달 활성화 이전에 버튼 입력 상황
    const [clickAction, setClickAction] = React.useState<'post' | 'edit' | undefined>(undefined);

    // filterState.postStatus > 등록상태값을 의존성으로 체크하면서 상태 변화함
    React.useEffect(() => {
        const startItem = NotificationButtonGroup.find((item) => item.children === filterState.postStatus);
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
                postStatus: selectedData.children as 'all' | 'posted' | 'private',
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
    // 에디터 활성화 : 모달 상태변경
    const handleModalChange = (e: Event, reason: 'backdropClick' | 'escapeKeyDown') => {
        if (reason == 'backdropClick') {
            // 뒷배경 클릭일 경우 활성화 유지
            setModalState(true);
        } else {
            setModalState((prevState) => !prevState);
        }
    };
    // 에디터 활성화 : 콜렙스 케밥 버튼 실행, 해당 콜랩스
    const loadCollapsedItem = (uid: string) => {};

    const getUidFromButton = (uid: string) => {};

    // 콜랩스 제목 혹은 컨텐츠 제목 버튼을 통한 에디터 활성화 :
    const handleEditClick = (uid: string) => {
        setClickAction('edit'); // 클릭 이벤트 edit 상태로 설정
        setModalState(true); // 모달 활성화
        setCurrentUid(uid); // 선택된 uid 설정
        // gql 실행
        // 불러오기 로딩 아이콘 애니메이션 스켈레톤
    };
    // Post 버튼 이벤트
    const handlePostClick = () => {
        setClickAction('post'); // 클릭 이벤트 post 상태로 설정
        setModalState(true); // 모달 활성화
    };

    // buttonItems 들의 이벤트 (커스텀 훅으로 고민하기)
    const handleCancel = () => {
        // 취소
        setModalState(false); // 모달 취소
    };
    const handleSave = () => {
        // 갱신
    };
    const handleDelete = () => {
        // 삭제
    };
    const handlePost = () => {
        // 등록
    };

    // 분기별 버튼요소 설정
    const buttonItemProvider = (action: 'post' | 'edit' | undefined): ButtonProps[] => {
        const appendClsN = 'modal__button-';
        if (action == 'edit') {
            return pcickedCollapsedButton.map((button) => ({
                ...button,
                onClick:
                    button['aria-label'] === 'cancel'
                        ? handleCancel
                        : button['aria-label'] === 'save'
                          ? handleSave
                          : button['aria-label'] === 'delete'
                            ? handleDelete
                            : button['aria-label'] === 'post'
                              ? handlePost
                              : undefined,
                className:
                    button['aria-label'] === 'cancel'
                        ? styles[`${appendClsN}cancel`]
                        : button['aria-label'] === 'save'
                          ? styles[`${appendClsN}save`]
                          : button['aria-label'] === 'delete'
                            ? styles[`${appendClsN}delete`]
                            : button['aria-label'] === 'post'
                              ? styles[`${appendClsN}post`]
                              : undefined,
            }));
        }
        if (action == 'post') {
            return pickedPostButton.map((button) => ({
                ...button,
                onClick:
                    button['aria-label'] === 'cancel'
                        ? handleCancel
                        : button['aria-label'] === 'post'
                          ? handlePost
                          : undefined,
                className:
                    button['aria-label'] === 'cancel'
                        ? styles[`${appendClsN}cancel`]
                        : button['aria-label'] === 'post'
                          ? styles[`${appendClsN}post`]
                          : undefined,
            }));
        }
        return [];
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
                <TRowTitleArea
                    uid={uid}
                    tRowClassNames={{
                        titleClsN: '',
                        IconClsN: '',
                        stackClsN: '',
                    }}
                    title={title}
                    onClick={() => handleEditClick(uid)}
                />,
                <Text text={uploader} className={clsN()} />,
                <Chip size="small" label={postState} className={clsN()} />,
                <Text text={formatDate(uploadDate)} className={clsN()} />,
                fixDateTemp,
            ];
            // tableContext 영역
            const tCollContext = (
                <CollapseForm
                    onClick={() => handleEditClick(uid)}
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
                selectValue={selectBtnState.value}
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
            <Button className={clsN(styles['post-button'])} onClick={handlePostClick}>
                Post
            </Button>
            <ModalEditor
                editorRef={editorRef}
                initialValue={editorContent}
                open={modalState}
                onClose={handleModalChange}
                buttonItems={buttonItemProvider(clickAction)}
            />
        </Stack>
    );
};
