/* eslint-disable */
import React from 'react';
import { Box, Divider, Pagination, Paper } from '@mui/material';
import { Heading } from '@molecules/admin/layout/heading/Heading';
import { EventPageRequest } from '@interface/evnet/filter/EventFilterType';
import { useRecoilState, useRecoilValue } from 'recoil';
import { eventIdAtom } from '@recoil/atoms/admin/inquiry/notices/noticesFilterAtom';
import clsN from 'classnames';
import styles from './styles/FilteredList.module.scss';
import { CollapsibleTable } from '@organisms/collapsibleTable/CollapsibleTable';
import { TableDB } from '@interface/table/TableDB';
import { EventInfoResponse, EventItemResponse } from '@interface/evnet/response/EventItemResponse';
import useGraphQL from '@hooks/useGraphQL';
import { GET_EVENT_INFO, GET_EVENT_LIST, GET_EVENT_TYPE } from '@api/apollo/gql/queries/NoticesResponseQuery.gql';
import { noticeFilterAtom } from '@recoil/atoms/admin/inquiry/notices/filter/noticeFilterAtom';

interface FilteredListInterface {
    filteredTitle?: string;
}

export const FilteredList = ({ ...props }: FilteredListInterface) => {
    const [tableData, setTableData] = React.useState<TableDB[]>([]); // 테이블 데이터
    const [selectedEventInfo, setSelectedEventInfo] = React.useState<EventInfoResponse | null>(null); // 선택된 이벤트의 상세 정보
    const [page, setPage] = React.useState<number>(1); // 선택된 페이지
    const [pageSize] = React.useState<number>(10); // 페이지 범위
    const filterState = useRecoilValue(noticeFilterAtom); // 필터 리코일 상태

    // 테이블 th 부분 gql 을 통해 불러오기
    const thItem = ['제목', '카테고리', '상태', '기간', '등록일', '수정일'];

    const { data: eventTypeData } = useGraphQL({
        query: GET_EVENT_TYPE,
        type: 'query',
        request: {},
        option: {},
    }); // 이벤트 타입(enum)목록 조회

    const { data: eventListData, refetch: refetchEventData } = useGraphQL({
        query: GET_EVENT_LIST,
        type: 'query',
        request: { eventType: 'NOTICE' },
        option: {},
    }); // 타입에 맞는 이벤트 목록 조회

    const { refetch } = useGraphQL({
        query: GET_EVENT_INFO,
        type: 'query',
        request: { evenId: 0 },
        option: { skip: 1 },
    }); // eventId를 통해 등록한 글 조회

    React.useEffect(() => {
        refetchEventData({
            variables: {
                eventType: 'NOTICE',
            },
        }); // 리패치
    }, [refetchEventData]);

    React.useEffect(() => {
        if (!eventListData?.getEventList) return; // 이벤트 체크
        const convertedData: TableDB[] = eventListData.getEventList.map((event: EventItemResponse) => {
            return {
                id: event.id,
                tRowTitle: [
                    event.title, // 제목

                    new Date(event.startedAt).toLocaleDateString(),
                    new Date(event.endedAt).toLocaleDateString(),
                    event.thumbnail ? <img src={event.thumbnail} alt={event.title} /> : null,
                ],
                tCollContext: (
                    <Box>
                        <Heading heading={event.title} />
                        {event.content && <div dangerouslySetInnerHTML={{ __html: event.content }} />}
                    </Box>
                ),
            };
        });
        setTableData(convertedData);
    }, [eventListData]);

    return (
        <Paper className={clsN(styles.paper)}>
            <Heading
                className={styles.paper__heading}
                headingClsN={clsN(styles.paper__title)}
                heading={`${props?.filteredTitle} : ${tableData.length}`}
            />
            <Divider />
            <CollapsibleTable tableData={tableData} tHeaders={thItem} tableLabel="notice-posted-list" />
        </Paper>
    );
};
