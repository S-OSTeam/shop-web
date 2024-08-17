import React from 'react';
import { formatDate } from '@util/common/FormatDate';
import { Notification } from '@util/test/data/admin/notification/Notification';
import { Heading } from '@molecules/admin/layout/heading/Heading';
import { Box, Divider, Stack } from '@mui/material';
import { FilteredSearch } from '@organisms/admin/filteredSearch/FilteredSearch';
import { CollapsedListResult } from '@organisms/collapsedListResult/collapsedListResult';
import Text from '@atoms/text/Text';
import Chip from '@atoms/chip/Chip';
import clsN from 'classnames';
import styles from './styles/Notices.module.scss';

export const NoticesTemplate = () => {
    /* 상태 */

    // 페이지 상태
    const [tPage, setTPage] = React.useState(0);
    // 페이지에 노출할 행의 갯수 상태
    const [rowPerPage, setRowPerPage] = React.useState(10);

    /* 함수 */
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

    // 본문 컴포넌트 생성
    const productContext = (
        _uid: string,
        _title: string,
        _uploader: string,
        _uploadDate: Date,
        _context: string,
        _fixedDate?: Date,
        _imgUrls?: string[],
    ) => {
        // 상단 영역
        const sectionPrimary = (
            <Stack key={_uid} className={clsN(styles['primary-container'])}>
                <Text text={_title} className={clsN(styles['primary-container__header'])} />
                <Text variant="subtitle2" text={`업로더 - ${_uploader}`} />
                <Stack direction="row" className={clsN(styles['secondary-container__date'])}>
                    <Text
                        variant="caption"
                        text={`등록일 - ${formatDate(_uploadDate)}`}
                        className={clsN(styles['secondary-container__date__upload'])}
                    />
                    {_fixedDate && (
                        <Text
                            variant="caption"
                            text={`수정일 - ${formatDate(_fixedDate)}`}
                            className={clsN(styles['secondary-container__date__fixed'])}
                        />
                    )}
                </Stack>
            </Stack>
        );

        // 하단 영역
        const sectionSecondary = (
            <Stack className={clsN(styles['secondary-container'])}>
                <Text text={_context} variant="body1" />
                <Chip
                    size="small"
                    className={clsN(styles['secondary-container__chip'])}
                    label={`${_imgUrls?.length}건의 이미지`}
                />
            </Stack>
        );
        return (
            <Box key={_uid} className={clsN(styles.collapse)}>
                {sectionPrimary}
                <Divider />
                {sectionSecondary}
            </Box>
        );
    };
    // ts 유틸 데이터 tData 에 전달하기
    const tDataConvert = Notification.slice(tPage * rowPerPage, tPage * rowPerPage + rowPerPage).map((item) => {
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
        const tCollContext = productContext(uid, title, uploader, uploadDate, context, fixDate, imageUrls);
        return { tRowTitle, tCollContext };
    });
    /* JSX 모듈 */
    const headline = <Heading heading="공지사항 관리" subtitle1="고객들께 중요한 소식을 전해주세요" />;

    return (
        <Stack className={clsN(styles['notices-t'])}>
            {headline}
            <FilteredSearch />
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
