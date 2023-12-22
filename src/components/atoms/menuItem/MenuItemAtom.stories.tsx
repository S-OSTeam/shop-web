import MenuItemAtom from './MenuItemAtom';
// 스토리북으로 확인할 컴포넌트 불러옴
import type {Meta, StoryObj} from '@storybook/react';
/* 스토리북 타입 불러옴
Meta: 메타데이터는 컴포넌트의 stories 비교하기위해 사용됨
storyObj: 스토리북으로 해당컴포넌트의 렌더링된 예시로 사용(제너릭?)
*/
// 스토리 타입, StoryObj 의 제너릭에 컴포넌트의 타입을 넘겨줌

const meta: Meta<typeof MenuItemAtom> = {
    component: MenuItemAtom,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof MenuItemAtom>;



// autoFocus?: boolean; className?: string, children: React.ReactNode;
export const MenuItem:Story = {
    args:{
        autoFocus: false,
        children: 'MenuItemAtom',
    },
};
export const FocusedMenuItem:Story = {
    args:{
        autoFocus: true,
        children: 'Focused',
    },
};
export const SelectedMenuItem:Story = {
    args:{
        autoFocus: true,
        selected: true,
        children: 'Selected and Focused',
    },
};
