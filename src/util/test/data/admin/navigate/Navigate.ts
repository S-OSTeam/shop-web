// 1차 뎁스
export interface NavigateITF {
    navigateId: number;
    title: string;
    route: string;
    // 2차 뎁스
    depthItem?:secondItem[];
}
interface secondItem {
    id: string;
    title: string;
    ref: string;
}

// 1차 ts
export const NavigateItem:NavigateITF[] = [
    {
        navigateId: 0,
        title: 'Dashboard',
        route: '/manager/dashboard'
    },
    {
        navigateId: 1,
        title: 'Product',
        route: '/manager/product',
        depthItem: [
            {
                id: 'productManagement',
                title: '상품 관리',
                ref: '0',
            }
        ]
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
        route: '/manager/clients'
    },
    {
        navigateId: 5,
        title: 'Inquiry',
        route: '/manager/inquiry',
        depthItem:[
            {
                id: 'InquiryTotal',
                title: '문의 관리 현황',
                ref: '0',
            },
            {
                id: 'InquiryResponsive',
                title: '미답변',
                ref: '1',
            },
            {
                id: 'InquiryEnd',
                title: ' 답변완료',
                ref: '2',
            }

        ]
    },


]