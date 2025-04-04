import React, { useMemo } from 'react';
import { Fade, Modal as MuiModal, Box } from '@mui/material';
import styles from './styles/Modal.module.scss';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    body?: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Modal = ({ open, onClose, title, body, footer, children, className, style }: ModalProps) => {
    const combinedStyle = useMemo<React.CSSProperties>(
        () => ({
            ...style,
        }),
        [style],
    );
    return (
        <MuiModal open={open} onClose={onClose}>
            <Fade in={open}>
                <Box className={`${styles.modalBox} ${className || ''}`} style={combinedStyle}>
                    {title && <h2 className={styles.modalTitle}>{title}</h2>}

                    {body}

                    {footer && <div className={styles.modalFooter}>{footer}</div>}

                    {children}
                </Box>
            </Fade>
        </MuiModal>
    );
};

export default Modal;
