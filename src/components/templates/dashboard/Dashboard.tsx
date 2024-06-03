import React from 'react';
import AnnualIncome from '@organisms/admin/page/dashboard/chart/annualIncome/AnnualIncome';
import { Stack } from '@mui/material';
// import PropTypes from 'prop-types';
import { ProductState } from '@organisms/admin/page/dashboard/productSection/ProductState';
import { InquiryListView } from '@organisms/admin/page/dashboard/inquiryListView/inquiryListView';
import Orders from '@organisms/admin/page/dashboard/orders/Orders';
import { Heading } from '@molecules/admin/layout/heading/Heading';
import clsN from 'classnames';
import styles from './styles/Dashboard.module.scss';

interface DashboardTemplateProps{
    className?: string;
    // 리스트 클래스명
    chartClsN?: string;
}

const DashboardTemplate = (
    {
        className,
        chartClsN
    }:DashboardTemplateProps
) => {
    /* 상태 */


    /* JSX 모듈 */
    const headline = <Heading heading="Dashboard" subtitle1="대시보드 페이지입니다."/>

    /* 함수 */
    // 시간 반환

    return(
        <Stack className={clsN(styles.main, className)} spacing={1}>
            {headline}
            <Orders/>
            {/* 중앙 영역 */}
            <Stack direction='row' className={clsN(styles.stack)} justifyContent='space-between' gap={1}>
                <AnnualIncome className={clsN(chartClsN, styles.stack__chart)}/>
                <ProductState className={clsN(styles['stack__product-state'])}/>
            </Stack>
            {/* 하단 영역 */}
            <InquiryListView/>
        </Stack>
    );
}
DashboardTemplate.defaultProps = {
    className: styles.main,
    chartClsN: styles.stack__chart
}
export default DashboardTemplate;