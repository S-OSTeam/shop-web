import React from 'react';
import '../../styles/AddOnButton.scss';

interface AddOnButtonProps {
    imgPath: string;
    onClick: () => void;
    alt: string;
}

const AddOnButton = ({ imgPath, onClick, alt }: AddOnButtonProps) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLImageElement>) => {
        if (e.key === 'enter' || e.key === ' ') {
            onClick();
        }
    };
    return <img src={require(`../../asset/images/${imgPath}`)} alt={alt} onKeyDown={handleKeyDown} onClick={onClick} />;
};
export default AddOnButton;
