import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Box } from '@mui/material';
import { PieChartData } from '../../../../util/GlobalTest';

interface PieChartReviewProps {
    data: PieChartData[];
}

const PieChartReview = ({ data }: PieChartReviewProps) => {
    const totalReview =
        data[0].value * 1 + data[1].value * 2 + data[2].value * 3 + data[3].value * 4 + data[4].value * 5;
    const totalReviewCount = data[0].value + data[1].value + data[2].value + data[3].value + data[4].value;
    const reviewScor = () => {
        const review: number = (totalReview / (totalReviewCount * 5)) * 5;
        const roundedReview = Math.floor(review * 2) / 2;
        return roundedReview.toFixed(1);
    };

    const reviewTxt = () => {
        const review = parseFloat(reviewScor());
        if (review > 4.5) return '매우긍정적';
        if (review > 3.5) return '긍정적';
        if (review > 2.5) return '보통';
        if (review > 1.5) return '부정적';
        return '매우부정적';
    };

    return (
        <Box className="pieChartReview">
            <PieChart
                series={[
                    {
                        paddingAngle: 5,
                        innerRadius: 60,
                        outerRadius: 80,
                        data,
                    },
                ]}
                margin={{ right: 5 }}
                width={180}
                height={180}
                legend={{ hidden: true }}
            >
                <text
                    x={90} // x 좌표
                    y={75} // y 좌표
                    textAnchor="middle" // 텍스트 정렬
                    dominantBaseline="middle" // 텍스트 기준선
                    fontSize={28} // 텍스트 크기
                    fill="#000000" // 텍스트 색상
                >
                    {reviewScor()}
                </text>
                <text
                    x={90} // x 좌표
                    y={105} // y 좌표
                    textAnchor="middle" // 텍스트 정렬
                    dominantBaseline="middle" // 텍스트 기준선
                    fontSize={18} // 텍스트 크기
                    fill="#000000" // 텍스트 색상
                >
                    {reviewTxt()}
                </text>
            </PieChart>
        </Box>
    );
};

export default PieChartReview;
