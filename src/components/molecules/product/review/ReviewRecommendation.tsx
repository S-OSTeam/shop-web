import React from 'react';
import { Box, Stack } from '@mui/material';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import { ReviewData } from '../../../../util/GlobalTest';
import ButtonCustom from '../../../atoms/button/ButtonCustom';
import TextCustom from '../../../atoms/text/TextCustom';
import IconCustom from '../../../atoms/icon/IconCustom';
import ReviewInfo from './ReviewInfo';

interface ReviewRecommendationProps {
    review: ReviewData;
}

const ReviewRecommendation = ({ review }: ReviewRecommendationProps) => {
    return (
        <Box className="reviewRecommendation">
            <Stack direction="row">
                <ButtonCustom className="recommendationBtn">
                    <Stack direction="row" spacing={1}>
                        <TextCustom className="recommendationTxt" content="추천" />
                        <TextCustom className="recommendationCnt" content={review.recommendation} />
                    </Stack>
                </ButtonCustom>
                <ButtonCustom className="reviewReport">
                    <Stack direction="row">
                        <IconCustom size="reportIcon" icon={<ErrorOutlinedIcon fontSize="inherit" />} />
                        <TextCustom className="reportTxt" content="신고" />
                    </Stack>
                </ButtonCustom>
            </Stack>
            <ReviewInfo review={review} />
        </Box>
    );
};

export default ReviewRecommendation;
