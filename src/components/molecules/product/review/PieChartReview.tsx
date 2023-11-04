import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Box } from '@mui/material';
import { PieChartData } from '../../../../util/GlobalTest';

interface PieChartReviewProps {
    data: PieChartData[];
}

const PieChartReview = ({ data }: PieChartReviewProps) => {
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
                <div />
            </PieChart>
        </Box>
    );
};

export default PieChartReview;
