/* eslint-disable */
import React from 'react';
import AnnualIncome from '@organisms/admin/chart/annualIncome/AnnualIncome';
// import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/Dashboard.module.scss';
import Orders from '@organisms/admin/layOut/orders/Orders';

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

    return(
        <div className={clsN(styles.main, className)}>
            <AnnualIncome className={clsN(chartClsN)} />
            <Orders/>
        </div>
    );
}
export default DashboardTemplate;