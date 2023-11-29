import type {Meta, StoryObj} from '@storybook/react';
/* 스토리북 타입 불러옴
Meta: 메타데이터는 컴포넌트의 stories 비교하기위해 사용됨
storyObj: 스토리북으로 해당컴포넌트의 렌더링된 예시로 사용(제너릭?)
*/
import Input  from './Input';
// 스토리북으로 확인할 컴포넌트 불러옴

// 스토리 타입, StoryObj 의 제너릭 컴포넌트의 타입을 넘김
type InputStories = StoryObj<typeof Input>;

/*
* name?: string | undefined;
* className?: string;
* label?: React.ReactNode;
* type?: React.HTMLInputTypeAttribute | undefined;
* variant?: "filled" | "outlined" | "standard" | undefined;
* rows?: string | number | undefined;
* autoFocus?: boolean | undefined;
* onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
* placeholder?: string | undefined;
* multiline?: boolean | undefined;
* value?: unknown;
* defaultValue?: unknown;
* fullWidth?: boolean | undefined;
* helperText?: React.ReactNode;
* required?: boolean | undefined;
* maxRows?: string | number;
* error?: boolean;
*/

// 컴포넌트에 필요한 요소(args)는 리액트 props와 같음
export const StandardInput:InputStories = {
    args:{
        variant: 'standard',
        placeholder: 'Standard',
        helperText: `it's like label..!`,
    },
};
export const OutlinedInput:InputStories = {
    args:{
        variant: 'outlined',
        placeholder: 'Outlined',
        helperText: `it's like label..!`,
    },
};
export const FilledInput:InputStories = {
    args:{
        variant: 'filled',
        placeholder: 'Filled',
        helperText: `it's like label..!`,
    },
};

// 메타데이터 default export

// 메타데이터, 제너릭에 해당 컴포넌트 타입을 넘겨줌
const meta: Meta<typeof Input> = {
    title: 'Components/Atoms/Input',
    component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;
export const Primary: Story = {};

/* 이전
// 메타데이터 default export
export default {
    // 스토리북 미리보기 사이드바에 표시할 카테고리
    title: "Components/Atoms/Input",
    // 컴포넌트에 대한 문서를 자동으로 생성
    tags: ['autodocs'],
    // 해당 컴포넌트
    component: Input,
} as Meta<typeof Input>;
// 메타데이터, 제너릭에 해당 컴포넌트 타입을 넘겨줌
* */