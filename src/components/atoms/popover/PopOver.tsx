import React from 'react';
import { Popover, PopoverProps } from '@mui/material';

/**
 * popover : 클릭 후 다음 요소가 활성화 되는 컴포넌트
 * 기존의 PopoverProps 를 Omit 하여 children 을 제외한 모든 인터페이스를 상속하였으나 아토믹 디자인 관점으론 그리 유익하지 않음
 */
interface PopOverProps extends Omit<PopoverProps, 'children'> {
    children?: React.ReactNode; // 리액트 노드(선택적)
}

export const PopOver = ({ ...props }: PopOverProps) => {
    return <Popover {...props}>{props.children}</Popover>;
};
PopOver.defaultProps = {
    children: undefined,
};
