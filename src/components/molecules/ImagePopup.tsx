import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import { Link } from 'react-router-dom';
import ButtonAtom from '../atoms/Button';
import CheckboxAtom from '../atoms/Checkbox'; // 추가된 부분

interface ImagePopupProps {
    imageUrl: string;
    open: boolean;
    onClose: () => void;
}

const ImagePopupMolecule: React.FC<ImagePopupProps> = ({ imageUrl, open, onClose }) => {
    const [hideForToday, setHideForToday] = useState(false);
    const [isCheckboxChecked, setCheckboxChecked] = useState(false);

    useEffect(() => {
        const hideForTodayFlag = localStorage.getItem('hideForToday');
        if (hideForTodayFlag) {
            const storedTimestamp = parseInt(hideForTodayFlag, 10);
            const today = new Date();
            const storedDate = new Date(storedTimestamp);
            if (storedDate.getDate() === today.getDate() &&
                storedDate.getMonth() === today.getMonth() &&
                storedDate.getFullYear() === today.getFullYear()) {
                setHideForToday(true);
            }
        }
    }, []);

    const handleHideForToday = () => {
        const timestamp = Date.now();
        localStorage.setItem('hideForToday', timestamp.toString());
        setHideForToday(true);
    };

    const handleCheckboxChange = () => {
        setCheckboxChecked(!isCheckboxChecked);
    };

    const handleClose = () => {
        if (isCheckboxChecked) {
            handleHideForToday();
        }
        onClose();
    };

    if (hideForToday) {
        return null;
    }

    return (
        <Dialog open={open && !hideForToday} onClose={handleClose}>
            <DialogTitle>이미지</DialogTitle>
            <DialogContent>
                <Link to="/image-details">
                    <img src={imageUrl} alt="광고" style={{ maxWidth: '100%' }} />
                </Link>
            </DialogContent>
            <DialogActions>
                <CheckboxAtom
                    checked={isCheckboxChecked}
                    onChange={handleCheckboxChange}
                    label="오늘 하루 동안 보지 않기"
                />
                <ButtonAtom type="button" onClick={handleClose}>닫기</ButtonAtom>
            </DialogActions>
        </Dialog>
    );
};

export default ImagePopupMolecule;