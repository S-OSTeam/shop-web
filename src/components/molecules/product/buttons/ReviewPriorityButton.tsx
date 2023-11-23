import React from 'react';
import { Stack } from '@mui/material';
import ButtonCustom from '../../../atoms/button/ButtonCustom';
import TextCustom from '../../../atoms/text/TextCustom';

interface ReviewPriorityButtonProps {
    totalReview: number;
    onClick?: () => void;
}

const ReviewPriorityButton = ({ totalReview, onClick }: ReviewPriorityButtonProps) => {
    return (
        <Stack className="reviewPriorityButton" direction="row">
            <ButtonCustom className="Popularity" onClick={() => onClick && onClick()}>
                <TextCustom content="인기순" align="center" />
            </ButtonCustom>
            <ButtonCustom className="latest" onClick={() => onClick && onClick()}>
                <TextCustom content="최신순" align="center" />
            </ButtonCustom>
            <TextCustom className="reviewCount" content={`${totalReview}개의 후기`} align="center" />
        </Stack>
    );
};

export default ReviewPriorityButton;
