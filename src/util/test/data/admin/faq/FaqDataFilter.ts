import { FaqDataProps } from '@util/test/data/admin/faq/FaqData';
import { faqFilterState } from '@recoil/atoms/admin/inquiry/faq/faqFilterAtome';

/* TODO : NoticeFilter.ts 와 동일한 로직임, 제너릭으로 수정하기 */
export const faqDataFilter = (faqItems: FaqDataProps[], faqFilter: faqFilterState) => {
    return faqItems.filter((faqItem) => {
        // 인자의 업로드날짜 값 받기
        const noticeUploadDate = faqItem.uploadDate;
        // 시작일이 존재하고 등록일이 시작일보다 이전일경우 탈출
        if (faqFilter.startDate && noticeUploadDate < faqFilter.startDate) return false;
        // 종료이 존재하고 등록일이 종료일보다 이후일경우 탈출
        if (faqFilter.endDate && noticeUploadDate > faqFilter.endDate) return false;
        // 카테고리 선택 : 아직 없음 검색필터에 구현하기

        // 등록 상태가 전체가 아니고 받은 인자의 값과 상태의 값이 일치하지 않으면 탈출
        if (faqFilter.postStatus !== 'all' && faqItem.postState !== faqFilter.postStatus) return false;
        // 키워드 검색바 필터
        return !(faqFilter.keyword && !faqItem.title.toLowerCase().includes(faqFilter.keyword.toLowerCase()));
    });
};
