export interface sectionStateITF{
    subtitle: string;
    count: number;
}

export interface dashboardMainStateITF{
    title: string;
    count: number;
    categoryType: 'newOrders' | 'checkedOrders' | 'delivering' | 'refund',
    sectionItems: sectionStateITF[];
}

export const storeState: dashboardMainStateITF[] = [
    {
        // stateNewOrder
        categoryType: 'newOrders',
        title: '신규 주문',
        count: 2,
        sectionItems:[
            {
                // statePreOrder
                subtitle:'예약주문',
                count: 2
            },
            {
                // stateOrderDelayed
                subtitle:'주문지연',
                count:2
            },
        ]
    },
    {
        categoryType: 'checkedOrders',
        title: '주문 확인',
        count:2,
        sectionItems:[
            {
                // statePreOrdPending
                subtitle:'예약주문',
                count: 2
            },
            {
                // stateProgressDelayed
                subtitle:'처리지연',
                count:2
            },
        ]
    },
    {
        categoryType: 'delivering',
        title: '배송중',
        count: 2,
        sectionItems:[
            {
                // stateShipping
                subtitle:'배송중',
                count: 2
            },
            {
                // stateDeliveryDelayed
                subtitle:'배송지연',
                count:2
            },
        ]
    },
    {
        categoryType: 'refund',
        title: '취소',
        count: 2,
        sectionItems:[
            {
                // stateReturn
                subtitle:'반품',
                count: 2
            },
            {
                // stateExchange
                subtitle:'교환',
                count:2
            },
        ]
    },

]