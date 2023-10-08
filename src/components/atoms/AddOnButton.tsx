import React from 'react';
import '../../styles/AddOnButton.scss';

interface AddOnButtonProps {
    imgPath: string;
    onClick: () => void;
}

const AddOnButton = ({ imgPath, onClick }: AddOnButtonProps) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLImageElement>) => {
        if (e.key === 'enter' || e.key === ' ') {
            onClick();
        }
    };
    return (
        <img
            src={require(`../../asset/images/${imgPath}`)}
            alt="장바구니"
            onKeyDown={handleKeyDown}
            onClick={onClick}
        />
    );
};
export default AddOnButton;
