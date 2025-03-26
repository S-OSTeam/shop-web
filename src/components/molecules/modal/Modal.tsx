import React from 'react';
import { Fade, Modal as MuiModal, Box } from '@mui/material';

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
                        width: '40%',
                        maxWidth: '600px',
                        minWidth: '300px',
                        minHeight: '250px',
                        maxHeight: '60vh',
                        overflowY: 'auto',
                        textAlign: 'center',
                        fontSize: '1.2rem',
                        ...style,
                    }}
                >
                    {title && <h2 style={{ marginBottom: '16px', fontSize: '2rem' }}>{title}</h2>}

                    {body}

                    {footer && <div style={{ marginTop: '16px' }}>{footer}</div>}

                    {children}
                </Box>
            </Fade>
        </MuiModal>
    );
};

export default Modal;
