import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ImagePopup from './ImagePopup';

const ImageDetails = () => {
    return <div>이미지 상세 정보 페이지</div>;
}

const AppOrganism = () => {
    const [open, setOpen] = useState(false);
    const imageUrl = 'cute-7973191_1280.jpg';

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
                    <ImagePopup
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