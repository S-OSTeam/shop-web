export interface itemResponseITF {
    publicId: number;
    categoryPublicId: number;
    title: string;
    categoryType: 'announce' | 'delivery' | 'return' | 'refund' | 'account';
    imageUrls?: string;
    alt?: string;
    // 업로드일
    uploadDate: Date;
    // 수정일
    fixDate?: Date;
    // 공개 상태
    postState: 'posted' | 'clear';
}
export const itemResponse: itemResponseITF[] = [
    {
        publicId: 1,
        categoryPublicId: 1,
        title: '공지사항',
        categoryType: 'announce',
        imageUrls: undefined,
        alt: undefined,
        uploadDate: new Date('2024/06/06/'),
        postState: 'posted',
    },
    {
        publicId: 2,
        categoryPublicId: 2,
        title: '배송',
        categoryType: 'delivery',
        imageUrls: undefined,
        alt: undefined,
        uploadDate: new Date('2024/06/06/'),
        postState: 'posted',
    },
    {
        publicId: 3,
        categoryPublicId: 3,
        title: '반품',
        categoryType: 'return',
        imageUrls: undefined,
        alt: undefined,
        uploadDate: new Date('2024/06/06/'),
        postState: 'posted',
    },
    {
        publicId: 4,
        categoryPublicId: 4,
        title: '취소',
        categoryType: 'refund',
        imageUrls: undefined,
        alt: undefined,
        uploadDate: new Date('2024/06/06/'),
        postState: 'posted',
    },
    {
        publicId: 5,
        categoryPublicId: 5,
        title: '계정',
        categoryType: 'account',
        imageUrls: undefined,
        alt: undefined,
        uploadDate: new Date('2024/06/06/'),
        postState: 'posted',
    },
];
