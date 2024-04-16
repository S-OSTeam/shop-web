import React from 'react';
import {LineChart, LineChartProps} from '@mui/x-charts';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/Line.module.scss';

interface LineProps extends LineChartProps{
    // root 클래스명
    className?: string;
    // 차트 클래스명
    gridClsN?: string;
}

/**
 * 함수형 컴포넌트 = <T, > : 타입스크립트에서 제너릭 사용시 콤마를 붙임, 문법적 요구사항이라고함
 * 인터페이스<T> : 제너릭 명시
 * @param className
 * @param data
 * @param xAxis
 * @constructor
 */
const Line =(
    {
        className,
        gridClsN,
        series,
        xAxis,
        yAxis
        ,...props
    }:LineProps
) => {
    // 상태

    return(
        <div className={clsN(className, styles.wrapper)}>
            <LineChart className={clsN(gridClsN, styles.wrapper__grid)} series={series} xAxis={xAxis} yAxis={yAxis} {...props}/>
        </div>
    );
}
Line.propTypes = {
    className: PropTypes.string
};
Line.defaultProps = {
    className: styles.chart
}
export default Line;
