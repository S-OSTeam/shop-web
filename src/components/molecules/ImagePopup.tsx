import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ButtonAtom from '../atoms/Button';

interface ImagePopupProps {
    imageUrl: string;
    open: boolean;
    onClose: () => void;
}

const ImagePopupMolecule: React.FC<ImagePopupProps> = ({ imageUrl, open, onClose }) => {
    const [hideForToday, setHideForToday] = useState(false);

    const handleHideForToday = () => {
        localStorage.setItem('hideForToday', 'true');
        setHideForToday(true);
        onClose();
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog open={open && !hideForToday} onClose={handleClose}>
            <DialogTitle>이미지</DialogTitle>
            <DialogContent>
                <img src={imageUrl} alt="광고" style={{ maxWidth: '100%' }} />
            </DialogContent>
            <DialogActions>
                <FormControlLabel
                    control={<Checkbox checked={hideForToday} onChange={handleHideForToday} />}
                    label="오늘 하루 동안 보지 않기"
                />
                <ButtonAtom type="button" onClick={handleClose}>닫기</ButtonAtom>
            </DialogActions>
        </Dialog>
    );
};

export default ImagePopupMolecule;