import React from 'react';
import { CircleSharp } from '@mui/icons-material';
import Icon from './Icon';
// 스토리북으로 확인할 컴포넌트 불러옴
import type { Meta, StoryObj } from '@storybook/react';


/* 스토리북 *타입 불러옴
Meta: 메타데이터는 컴포넌트의 stories 비교하기위해 사용됨
storyObj: 스토리북으로 해당컴포넌트의 렌더링된 예시로 사용(제너릭?)
*/

// 스토리 타입, StoryObj 의 제너릭 컴포넌트의 타입을 넘김
type IconStories = StoryObj<typeof Icon>;

// children: React.ReactNode, fontSize?: "small" | "inherit" | "large" | "medium" | undefined, className?: string,
export const InheritIcon:IconStories = {
    // 컴포넌트에 필요한 요소(args)는 리액트 ({...props}) 와 같음
    args:{
        children: <CircleSharp/>,
        fontSize: 'inherit',
        className: 'iconInherit',
    },
};
export const SmallIcon:IconStories = {
    // 컴포넌트에 필요한 요소(args)는 리액트 ({...props}) 와 같음
    args:{
        children: <CircleSharp/>,
        fontSize: 'small',
        className: 'iconSmall',
    },
};
export const MediumIcon:IconStories = {
    // 컴포넌트에 필요한 요소(args)는 리액트 ({...props}) 와 같음
    args:{
        children: <CircleSharp/>,
        fontSize: 'medium',
        className: 'iconMedium',
    },
};
export const LargeIcon:IconStories = {
    // 컴포넌트에 필요한 요소(args)는 리액트 ({...props}) 와 같음
    args:{
        children: <CircleSharp/>,
        fontSize: 'large',
        className: 'iconLarge',
    },
};

// 메타데이터 default export
export default {
    // 하나의 스토리, 스토리는 named export 처리함으로써 스토리 이름도 사이드바 카테고리에 표시
    title: "Components/Atoms/Icon",
    // 해당 컴포넌트
    component: Icon,

} as Meta<typeof Icon>;
// 메타데이터, 제너릭에 해당 컴포넌트 타입을 넘겨줌
