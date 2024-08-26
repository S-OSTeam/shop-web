// 1차 뎁스
export interface NavigateITF {
    navigateId: number;
    title: string;
    route: string;
    // 2차 뎁스
    depthItem?: secondItem[];
}
interface secondItem {
    id: string;
    title: string;
    ref: string;
}

// 1차 ts
export const NavigateItem: NavigateITF[] = [
    {
        navigateId: 0,
        title: 'Dashboard',
        route: '/manager/dashboard',
    },
    {
        navigateId: 1,
        title: 'Product',
        route: '/manager/product',
        depthItem: [
            {
                id: 'Management',
                title: '상품 조회',
                ref: 'prodmgt',
            },
            {
                id: 'ProductPost',
                title: '상품 등록',
                ref: 'prodpost',
            },
            {
                id: 'ProductCategory',
                title: '카테고리',
                ref: 'catmgt',
            },
            {
                id: 'Announce',
                title: '공지사항',
                ref: 'anncmgt',
            },
        ],
    },
    {
        navigateId: 2,
        title: 'Order',
        route: '/manager/order',
    },
    {
        navigateId: 3,
        title: 'Delivery',
        route: '/manager/delivery',
    },
    {
        navigateId: 4,
        title: 'Clients',
        route: '/manager/clients',
    },
    {
        navigateId: 5,
        title: 'Inquiry',
        route: '/manager/inquiry',
        depthItem: [
            {
                id: 'QaList',
                title: 'Q&A 관리',
                ref: 'qna',
            },
            {
                id: 'Faqs',
                title: 'FAQ 관리',
                ref: 'faq',
            },
            {
                id: 'Notices',
                title: '공지사항 관리',
                ref: 'notices',
            },
        ],
    },
];
