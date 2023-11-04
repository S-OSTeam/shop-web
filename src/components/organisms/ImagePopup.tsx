import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import { Link } from 'react-router-dom';
import CheckboxMolecule from '../molecules/CheckboxMolecules';
import CustomButton from '../atoms/ButtonCustom';
import ImageCustom from '../atoms/ImageCustom';
import "../../styles/PopupImage.scss"

interface ImagePopupProps {
    imageUrl: string;
    open: boolean;
    onClose: () => void;
}

const ImagePopup: React.FC<ImagePopupProps> = ({ imageUrl, open, onClose }) => {
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
        console.log("hide");
    };

    const handleCheckboxChange = () => {
        setCheckboxChecked(!isCheckboxChecked);
        console.log("check");
    };

    const handleClose = () => {
        if (isCheckboxChecked) {
            handleHideForToday();
        }
        console.log("close");
        onClose();
    };

    if (hideForToday) {
        return null;
    }

    return (
        <Dialog open={open && !hideForToday} onClose={handleClose}>
            <DialogTitle>이미지</DialogTitle>
            <DialogContent className="popimage">
                <Link to="/image-details">
                    <ImageCustom img={imageUrl} size="popup" alt="광고"  />
                </Link>
            </DialogContent>
            <DialogActions>
                <CheckboxMolecule
                    name="today is not"
                    checked={isCheckboxChecked}
                    onChange={handleCheckboxChange}
                    label="오늘 하루 동안 보지 않기"
                />
                <CustomButton className="PopupClose" onClick={handleClose}>닫기</CustomButton>
            </DialogActions>
        </Dialog>
    );
};

export default ImagePopup;