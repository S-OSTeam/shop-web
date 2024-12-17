import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { noticeFilterAtom } from '@recoil/atoms/admin/inquiry/notices/filter/noticeFilterAtom';
import { EventInfoResponse } from '@interface/evnet/response/EventItemResponse';

export const useNoticeData = () => {
    const [filterState] = useRecoilState(noticeFilterAtom); //
    const [data, setData] = useState<EventInfoResponse[]>([]); // 공지글 데이터 목록
    const [loading, setLoading] = useState(false); // 로딩 현황

    // 필터 리코일 상태가 변경될때마다...
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
        };
    }, []);
};
