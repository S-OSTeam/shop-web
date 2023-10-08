import React from 'react';
import bookMark from '../../asset/images/book_mark.svg';

interface AddOnBookMarkProps {
    onClick: () => void;
}

const AddOnBookMark = ({ onClick }: AddOnBookMarkProps) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLImageElement>) => {
        if (e.key === 'enter' || e.key === ' ') {
            onClick();
        }
    };

    return <img src={bookMark} alt="북마크" onKeyDown={handleKeyDown} onClick={onClick} />;
};
export default AddOnBookMark;
