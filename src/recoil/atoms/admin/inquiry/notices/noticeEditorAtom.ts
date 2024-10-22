import { atom } from 'recoil';
import { NotificationProps } from '@interface/inquiry/inquiryStateInterface';

export interface NotificationState extends NotificationProps {
    isNew: boolean; // post or edit 구분
}

export const noticeEditorStateAtom = atom<NotificationState>({
    key: 'noticeEditorStateAtom',
    default: {
        uid: '',
        uploader: '',
        uploadDate: new Date(),
        // 공개 상태
        postState: 'private',
        // 제목
        title: '',
        // 내용
        context: '',
        // 카테고리
        category: 'all',
        imageUrls: [],
        isNew: true,
    },
});
