/* 스토리북 타입 불러옴
Meta: 메타데이터는 컴포넌트의 stories 비교하기위해 사용됨
storyObj: 스토리북으로 해당컴포넌트의 렌더링된 예시로 사용(제너릭?)
*/
import styles from '@atoms/button/style/Button.module.scss';

import Button from '@atoms/button/Button';
// 스토리북으로 확인할 컴포넌트 불러옴
import type { Meta, StoryObj } from '@storybook/react';

// 스토리 타입, StoryObj 의 제너릭 컴포넌트의 타입을 넘김
type Story = StoryObj<typeof Button>;

//  variant : "text" | "outlined" | "contained" | undefined
export const Basic: Story = {
    // 컴포넌트에 필요한 요소(args)는 리액트 props와 같음
    args: {
        variant: 'contained',
        children: 'Button',
    },
};
export const Text: Story = {
    args: {
        variant: 'text',
        children: 'text',
    },
};
export const OutLined: Story = {
    args: {
        variant: 'outlined',
        children: 'OutLined',
        className: `${styles.button}`,
    },
};
export const UnDefBtn: Story = {
    args: {
        variant: undefined,
        children: 'undefined',
    },
};

// 메타데이터 default export
export default {
    // 하나의 스토리, 스토리는 named export 처리함으로써 스토리 이름도 사이드바 카테고리에 표시
    title: 'Components/Atoms/Button',
    // 해당 컴포넌트
    component: Button,
    // 컴포넌트에 대한 문서를 자동으로 생성
    tags: ['autodocs'],
} as Meta<typeof Button>;
// 메타데이터, 제너릭에 해당 컴포넌트 타입을 넘겨줌
