import React from 'react';
import { Box, Stack } from '@mui/material';
import { ReviewData } from '../../../../util/GlobalTest';
import TextCustom from '../../../atoms/text/TextCustom';

interface ReviewInfoProps {
    review: ReviewData;
}

const ReviewInfo = ({ review }: ReviewInfoProps) => {
    return (
        <Box className="ReviewInfo">
            <Stack direction="row">
                <TextCustom className="info" content="작성자" />
                <TextCustom content={review.writer} />
            </Stack>
            <Stack direction="row">
                <TextCustom className="info" content="등록일" />
                <TextCustom content={review.registerDate} />
            </Stack>
            <Stack direction="row">
                <TextCustom className="info" content="평점" />
                <TextCustom content={review.review} />
            </Stack>
            <Stack direction="row">
                <TextCustom className="info" content="옵션" />
                <TextCustom content={review.option} />
            </Stack>
        </Box>
    );
};

export default ReviewInfo;
