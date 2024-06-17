interface NotificationProps {
    // 고유번호
    uid: string;
    // 업로더
    uploader: string;
    // 업로드일
    uploadDate: Date;
    // 수정일
    fixDate?: Date;
    // 공개 상태
    postState: 'public' | 'private';
    // 제목
    title: string;
    // 내용
    context: string;
}
export const Notification: NotificationProps[] = [
    {
        uid: '3354151',
        uploadDate: new Date('2024/06/06/'),
        uploader: 'Admin1',
        fixDate: undefined,
        postState: 'public',
        title: '제목',
        context: '내용',
    },
];
