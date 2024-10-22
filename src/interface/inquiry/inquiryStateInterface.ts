export interface NotificationProps {
    // 고유번호
    uid: string;
    // 업로더
    uploader: string;
    // 업로드일
    uploadDate: Date;
    // 수정일
    fixDate?: Date;
    // 공개 상태
    postState: 'posted' | 'private';
    // 제목
    title: string;
    // 내용
    context: string;
    imageUrls?: string[];
    // 카테고리
    category: 'all' | 'general' | 'event' | 'update' | 'emergency';
}
