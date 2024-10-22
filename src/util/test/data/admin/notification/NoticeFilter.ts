import { noticesFilterState } from '@recoil/atoms/admin/inquiry/notices/noticesFilterAtom';
import { NotificationProps } from '@interface/inquiry/inquiryStateInterface';

/**
 *
 * @param noticeItems : 받을 속성값
 * @param ntcfilter : 현재 필터의 상태
 */
export const filteringNotices = (noticeItems: NotificationProps[], ntcfilter: noticesFilterState) => {
    return noticeItems.filter((noticeItems) => {
        // 인자의 업로드날짜 값 받기
        const noticeUploadDate = noticeItems.uploadDate;
        // 시작일이 존재하고 등록일이 시작일보다 이전일경우 탈출
        if (ntcfilter.startDate && noticeUploadDate < ntcfilter.startDate) return false;
        // 종료이 존재하고 등록일이 종료일보다 이후일경우 탈출
        if (ntcfilter.endDate && noticeUploadDate > ntcfilter.endDate) return false;
        // 카테고리 선택 : 아직 없음 검색필터에 구현하기

        // 등록 상태가 전체가 아니고 받은 인자의 값과 상태의 값이 일치하지 않으면 탈출
        if (ntcfilter.postStatus !== 'all' && noticeItems.postState !== ntcfilter.postStatus) return false;
        // 키워드 검색바 필터
        return !(ntcfilter.keyword && !noticeItems.title.toLowerCase().includes(ntcfilter.keyword.toLowerCase()));
    });
};
