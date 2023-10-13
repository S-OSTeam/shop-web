import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ImagePopupMolecule from '../molecules/ImagePopup';

const ImageDetails = () => {
    return <div>이미지 상세 정보 페이지</div>;
}

const AppOrganism = () => {
    const [open, setOpen] = useState(false);
    const imageUrl = 'https://cdn.pixabay.com/photo/2023/05/05/21/00/cute-7973191_1280.jpg';

    useEffect(() => {
        setOpen(true);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Routes>
            <Route path="/image-details" element={<ImageDetails />} />
            <Route
                path="/"
                element={
                    <ImagePopupMolecule
                        imageUrl={imageUrl}
                        open={open}
                        onClose={handleClose}
                    />
                }
            />
        </Routes>
    );
};

export default AppOrganism;