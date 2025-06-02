import React, { useMemo } from 'react';
import { Fade, Modal as MuiModal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
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
    showCloseButton?: boolean;
    width?: string | number;
    maxWidth?: string | number;
}

const Modal = ({ 
    open, 
    onClose, 
    title, 
    body, 
    footer, 
    children, 
    className, 
    style, 
    showCloseButton = true,
    width = '500px',
    maxWidth = '90%'
}: ModalProps) => {
    const combinedStyle = useMemo<React.CSSProperties>(
        () => ({
            width,
            maxWidth,
            ...style,
        }),
        [style, width, maxWidth],
    );
    return (
        <MuiModal 
            open={open} 
            onClose={onClose}
            closeAfterTransition
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box className={`${styles.modalBox} ${className || ''}`} style={combinedStyle}>
                    <div className={styles.modalHeader}>
                        {title && <h2 className={styles.modalTitle}>{title}</h2>}
                        {showCloseButton && (
                            <IconButton 
                                className={styles.closeButton} 
                                aria-label="닫기" 
                                onClick={onClose}
                                size="small"
                            >
                                <CloseIcon />
                            </IconButton>
                        )}
                    </div>

                    {body && <div className={styles.modalBody}>{body}</div>}

                    {children && <div className={styles.modalContent}>{children}</div>}

                    {footer && <div className={styles.modalFooter}>{footer}</div>}
                </Box>
            </Fade>
        </MuiModal>
    );
};

export default Modal;
