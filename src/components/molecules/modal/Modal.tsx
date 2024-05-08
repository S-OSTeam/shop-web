import React from 'react';
import { Fade, Modal as MuiModal } from '@mui/material';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
    return (
        <MuiModal open={open} onClose={onClose}>
            <Fade in={open}>
                <div>{children}</div>
            </Fade>
        </MuiModal>
    );
};

export default Modal;
