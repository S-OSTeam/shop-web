/* eslint-disable */
import React from 'react';
import LineChart from '@molecules/chart/line/Line';
import PropTypes, { number } from 'prop-types';
import clsN from 'classnames';
import styles from './styles/AnnualIncome.module.scss';
import { Box } from '@mui/material';
import { AnnualIncomeItem, Month } from '@util/test/data/admin/annualIncome/AnnualIncome';
import { LineSeriesType } from '@mui/x-charts';
import { MakeOptional } from '@mui/x-charts/models/helpers';

interface AnnualIncomeProps {
    // root 클래스명
    className?: string;
}

const AnnualIncome = (
    {
        className,
    }: AnnualIncomeProps,
) => {
    // test
    const pData = [50000, 30000, 120000, 155000];
    const cData = [40000, 20000, 620000, 455000];


    // 데이터 [] 얻기 : 그래프큐엘 쓴다 가정
    const chartDB = AnnualIncomeItem;

    // series 객체 전달자
    const siresProvider = chartDB.map((item, idx) => {
        const index: number = idx + 1;
        const { year, history } = item;
        const currentMonthSales = { sellValue: 0, incomeValue: 0, label: Month[index].toString() };
        // 월별판매기록
        for (const month in history) {
            if (history.hasOwnProperty(month)) {
                // enum Month 열겨형의 킬르 숫자로 파싱하여 자기 자신의 월(키)를 얻음
                const monthNumber = parseInt(month, 12);
                // 현재 월 판매수량과 값 얻기
                const salesRecords = history[monthNumber];
                console.log(`salesRecords: ${salesRecords}`);
                if (salesRecords) {
                    // 해당 값이 존재할 경우 [Object...] 이므로 forEach 로 객체 속성에 접근하기
                    salesRecords.forEach(record => {
                        // 객체 속성 접근
                        console.log(`sold: ${record.totalSold}`);
                        currentMonthSales.incomeValue = record.totalSold;
                        console.log(`income: ${record.sellingPrice}`);
                        currentMonthSales.incomeValue = record.sellingPrice;
                    });
                }
            }
        }
        // 결과물 타입은 [] 배열 내에 오브젝트로 { data: [데이터들:number], label: 라인 이름 } 으로 해야됨
    });

    // xAxis 가로 하단 레이블 영역 열거형 ENUM MONTH 재활용
    // const monthsArr: string[] = Object.keys(Month).filter(key=>(Month[key])); // 안됨
    const monthsArr: string[] = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    // 상태


    return (
        <Box component='div' className={clsN(styles.component, className)} boxShadow={1}>
            <LineChart
                className={clsN(styles.grid)}
                gridClsN={clsN(styles.grid__graph)}
                // series={[{ data: pData, label: '2023'}, { data: cData, label: '2024'}]}
                series={[{data: pData, label:'2023'}, {data: cData, label:'2024'}]}
                xAxis={[{ scaleType: 'point', data: monthsArr}]}
                yAxis={[{valueFormatter: (value) => `${(value / 10000).toLocaleString()}만원`}]}
            />

        </Box>
    );
};
export default AnnualIncome;