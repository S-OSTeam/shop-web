import HelperText from './HelperText';
// 스토리북으로 확인할 컴포넌트 불러옴
import type {Meta, StoryObj} from '@storybook/react';
/* 스토리북 타입 불러옴
Meta: 메타데이터는 컴포넌트의 stories 비교하기위해 사용됨
storyObj: 스토리북으로 해당컴포넌트의 렌더링된 예시로 사용(제너릭?)
*/

// 스토리 타입, StoryObj 의 제너릭 컴포넌트의 타입을 넘김
type Story = StoryObj<typeof HelperText>;

/*
    requiredText?: string,
    defaultText?: string,
 */
export const ErrorText:Story = {
    // 컴포넌트에 필요한 요소(args)는 리액트 props와 같음
    args: {
        requiredText: 'Incorrect entry..!',
    }
}
export const DefaultText:Story = {
    // 컴포넌트에 필요한 요소(args)는 리액트 props와 같음
    args:{
        defaultText: 'Enter Here..!',
    }
}

// 메타데이터 default export
export default {
    // 하나의 스토리, 스토리는 named export 처리함으로써 스토리 이름도 사이드바 카테고리에 표시
    title: "Components/Atoms/HelperText",
    // 해당 컴포넌트
    component: HelperText,
} as Meta<typeof HelperText>;
// 메타데이터, 제너릭에 해당 컴포넌트 타입을 넘겨줌
