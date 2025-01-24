import React from 'react';
import { Fade, Modal as MuiModal, Box } from '@mui/material';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string; // 제목 (선택 사항)
    body?: React.ReactNode; // 메인 컨텐츠
    footer?: React.ReactNode; // 하단 버튼
    children?: React.ReactNode; // 자유롭게 구성 가능한 컨텐츠
    className?: string; // 커스텀 클래스
    style?: React.CSSProperties; // 커스텀 스타일
}

const Modal = ({ open, onClose, title, body, footer, children, className, style }: ModalProps) => {
    return (
        <MuiModal open={open} onClose={onClose}>
            <Fade in={open}>
                <Box
                    className={className}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        padding: '16px',
                        outline: 'none',
                        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
                        ...style, // 사용자 스타일 병합
                    }}
                >
                    {/* 모달 헤더 */}
                    {title && <h2 style={{ marginBottom: '16px' }}>{title}</h2>}

                    {/* 모달 본문 */}
                    {body}

                    {/* 모달 하단 */}
                    {footer && <div style={{ marginTop: '16px' }}>{footer}</div>}

                    {/* 사용자 지정 children */}
                    {children}
                </Box>
            </Fade>
        </MuiModal>
    );
};

export default Modal;
