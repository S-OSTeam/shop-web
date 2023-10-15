import React from 'react';
import '../../styles/AddOnButton.scss';
import classNames from 'classnames';

interface AddOnButtonProps {
    imgPath: string;
    onClick: () => void;
    alt: string;
    size?: string;
}

const AddOnButton = ({ imgPath, onClick, alt, size }: AddOnButtonProps) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLImageElement>) => {
        if (e.key === 'enter' || e.key === ' ') {
            onClick();
        }
    };
    return (
        <img
            className={classNames('addOn', size)}
            src={require(`../../asset/images/${imgPath}`)}
            alt={alt}
            onKeyDown={handleKeyDown}
            onClick={onClick}
        />
    );
};
AddOnButton.defaultProps = {
    size: undefined,
};
export default AddOnButton;
