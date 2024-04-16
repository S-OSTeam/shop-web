/* eslint-disable */
import React from 'react';
import DashboardItem from '@molecules/admin/layout/dashboardItem/DashboardItem';
import { PlaylistAddCheck } from '@mui/icons-material';
import { Stack } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/Order.module.scss';

interface OrdersProps {

}

const Orders = (
    {

    }:OrdersProps
) => {

    /* 상태 */

    // GQL로 데이터 받았다 가정
    const orderData = [
        {
            title: '총 주문',
            amount: 8,
        },
        {
            title: '신규 주문',
            amount: 6,
        },
        {
            title: '예약 주문',
            amount: 2,
        },
    ]
    const placingAnOrderData = [
        {
            title: '발주 확인',
            amount: 6,
        },
        {
            title: '예약 발주',
            amount: 3,
        },
        {
            title: '옵션 변경',
            amount: 3,
        },
    ]

    const deliveryData = [
        {
            title: '배송 현황',
            amount: 8,
        },
        {
            title: '배송중',
            amount: 6,
        },
        {
            title: '배송 완료',
            amount: 2,
        },
    ]

    const refundData = [
        {
            title: '클레임',
            amount: 4,
        },
        {
            title: '배송 지연',
            amount: 3,
        },
        {
            title: '반품/취소',
            amount: 5,
        },
    ]


    /* 함수 */

    return(
        <Stack direction='row' className={clsN(styles.wrapper)}>
            <DashboardItem
                iconPlace={<PlaylistAddCheck/>}
                moduleLabel='테스트'
                data={orderData}
            />
        </Stack>
    );
}
export default Orders;