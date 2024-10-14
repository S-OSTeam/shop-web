import React from 'react';
import { Box, Button as MuiButton, IconButton, IconButtonProps, PopoverProps } from '@mui/material';
import { PopOver } from '@atoms/popover/PopOver';
import clsN from 'classnames';
import styles from './styles/PopoverButton.module.scss';

// 원본 버튼 타입
type ButtonProps = React.ComponentProps<typeof MuiButton>;

/**
 * PopoverButton : '버튼' 클릭이벤트를 참조해 해당 컴포넌트 위치로 popover 이벤트를 발생해 특정 컴포넌트 렌더
 */
interface PopoverButtonProps {
    // 버튼 속성
    buttonProps: {
        children: React.ReactNode; // 자식 요소
        className?: string; // 클래스명(선택적)
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // 버튼 클릭 이벤트
        isIconButton?: boolean; // 아이콘 버튼 여부(조건부 렌더링)
        iconButtonProps?: Omit<IconButtonProps, 'onClick'>; // 아이콘 버튼 특정 속성(onclick)을 제외한 나머지 속성을 포함하여 타입 생성
    };
    // popover 속성
    popoverProps: {
        children: React.ReactNode; // 자식 요소
        open: boolean; // popover 활성화 여부 상태
        onClose: () => void; // popover 소멸 이벤트
        /**
         * 클래스명 객체
         * root: root 클래스명
         * paper : popover 컨텐츠를 감싸는 클래스명
         */
        classes?: {
            root: string;
            paper: string;
        };
        anchorEl: HTMLElement | null;
        // popover 가 표시될 좌표값
        anchorOrigin?: PopoverProps['anchorOrigin'];
    };
}

export const PopoverButton = ({ buttonProps, popoverProps }: PopoverButtonProps) => {
    // 앵커 선택된 요소 상태 (popover의 위치값이 될 요소)
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    // 버튼 클릭 이벤트 : 해당 버튼의 이벤트를 참고해 앵커를 지정함
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget); // 이벤트를 통한 앵커 설정
        buttonProps.onClick(e); // 버튼 속성의 onClick 이벤트
    };

    // 공통 버튼들의 속성 모음
    const commonButtonProps: ButtonProps = {
        onClick: handleClick, // 현재 handleClick 의 이벤트를 실행
        className: buttonProps.className, // 버튼속성의 클래스명 상속
    };

    // 조건부 렌더링
    const renderButton = () => {
        if (buttonProps.isIconButton) {
            // 아이콘 버튼 속성일 경우 아이콘 버튼 컴포넌트 반환
            return (
                <IconButton {...commonButtonProps} {...buttonProps.iconButtonProps}>
                    {buttonProps.children}
                </IconButton>
            );
        }
        // 이외에는 기본 버튼 반환
        return <MuiButton {...commonButtonProps}>{buttonProps.children}</MuiButton>;
    };

    return (
        <Box className={clsN(styles.root)}>
            {renderButton()}
            <PopOver
                anchorOrigin={popoverProps.anchorOrigin}
                anchorEl={anchorEl}
                classes={popoverProps.classes}
                open={popoverProps.open}
                onClose={() => {
                    setAnchorEl(null);
                    popoverProps.onClose();
                }}
            >
                {popoverProps.children}
            </PopOver>
        </Box>
    );
};
