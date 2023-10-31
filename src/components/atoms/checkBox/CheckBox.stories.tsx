import CheckBox from './CheckBox';
import type { Meta, StoryObj } from '@storybook/react';

// 메타데이터, 제너릭에 해당 컴포넌트 타입을 넘겨줌
const meta: Meta<typeof CheckBox> = {
    // 스토리북 미리보기 사이드바에 표시할 카테고리
    title: 'Component/Common/CheckBox',
    // 컴포넌트
    component: CheckBox,
    // 컴포넌트에 대한 문서를 자동으로 생성
    tags: ['autodocs'],
    // 부모로부터 받은 정보들의 타입 지정
    argTypes: {

    },
    args: {
        checked: true,
    }
};


// 메타데이터를 디폴트로 export
export default meta;

// 스토리 타입, StoryObj 의 제너릭에 컴포넌트의 타입을 넘겨줌
type Story = StoryObj<typeof CheckBox>;

// 하나의 스토리, 스토리는 named export 를 한다, 스토리 이름도 사이드바 카테고리에 표시됨
export const CheckDefault: Story = {
    // 컴포넌트에 필요한 argument, 즉 컴포넌트에게 전달하는 Props들
    args: {
        checked: false,
        'aria-label': 'CheckDefault',
    },
};
// 다른 스토리 (Checked)
export const Checked: Story = {
    args: {
        checked: true,
        'aria-label': 'Checked',
    },
};