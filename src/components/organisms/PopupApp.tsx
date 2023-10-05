import React, { useState, useEffect } from 'react';
import ImagePopupMolecule from '../molecules/ImagePopup';

const PopupApp = () => {
    const [open, setOpen] = useState(false);
    const imageUrl = 'https://cdn.pixabay.com/photo/2023/05/05/21/00/cute-7973191_1280.jpg';

    useEffect(() => {
        setOpen(true);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <ImagePopupMolecule imageUrl={imageUrl} open={open} onClose={handleClose} />
        </div>
    );
};

export default PopupApp;