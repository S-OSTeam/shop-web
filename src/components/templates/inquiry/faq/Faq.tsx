/* eslint-disable */
import React from 'react';
import { Stack } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/Faq.module.scss';
import { Heading } from '@molecules/admin/layout/heading/Heading';
import { AutoComplete } from '@molecules/autoComplete/AutoComplete';

interface FaqProps {
    className?: string;
}

export const Faq = ({ ...props }: FaqProps) => {
    /* 상태 */
    /* 변수 */
    /** AutoComplete > option 속성 변수 */
    const optionsCont = [
        { label: 'one', number: 1 },
        { label: 'two', number: 2 },
        { label: 'the', number: 3 },
    ];
    /* 함수 */
    /* TSX */
    /** Faq 헤드라인 컴포넌트 */
    const headline = <Heading heading="(FAQ)자주묻는 질문" subtitle1="자주 묻는 질문과 답변을 확인해 보세요" />;

    /* 렌더 */
    return (
        <Stack>
            {headline}
            <AutoComplete options={optionsCont} freeSolo />
        </Stack>
    );
};
