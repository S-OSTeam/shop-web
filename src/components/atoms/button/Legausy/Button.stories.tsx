/* eslint-disable */
import Button from './Button';
import type {Meta, StoryObj} from '@storybook/react';
// 메타데이터, 제너릭에 버튼 컴포넌트 타입을 넘겨줌
const meta:Meta<typeof Button> = {
    // 스토리북 미리보기 사이드바에 표시할 카테고리
    title: 'Component/Common/Button',
    // 컴포넌트
    component: Button,
    // 컴포넌트에 대한 문서를 자동으로 생성
    tags: ['autodocs'],
    argTypes: {
        variant: {
            type: 'string',
            /*name: ,
            defaultValue: ,
            if: ,
            description: ,*/

        }
    },
};

// 메타 데이터를 디폴트로 export
export default meta;

// 스토리 타입, StoryObj 의 제너릭에 컴폰너트의 타입을 넘겨줌
type Story = StoryObj<typeof Button>;

// 하나의 스토리, 스토리는 named export 해줌, 스토리 이름도 사이드바 카테고리에 표시됨
export const Contained: Story = {
    // 컴포넌트에 필요한 arguments, 리액트 컴포넌트에게는 Props
    args:{
        variant: 'contained',
        children:'Contained',
    },
};
// 다른 스토리 (Outlined)
export const Outlined: Story = {
    args: {
        variant: 'outlined',
        children: 'OutLined',
    },
};
// Contained 스토리의 args 값을 재사용
export const Disabled: Story = {
    args:{
        ...Contained.args,
        children: 'Disabled',
        disabled: false,
    },
};
