import React from 'react';
import '../../../styles/ImageButton.scss';
import classNames from 'classnames';

interface AddOnButtonProps {
    imgPath: string;
    onClick?: () => void;
    alt: string;
    size?: string;
}

const ImageButton = ({ imgPath, onClick, alt, size }: AddOnButtonProps) => {
    return (
        <img
            className={classNames('imgBtn', size)}
            src={require(`../../../asset/images/${imgPath}`)}
            alt={alt}
            onKeyDown={onClick}
            onClick={onClick}
        />
    );
};
ImageButton.defaultProps = {
    size: undefined,
    onClick: undefined,
};
export default ImageButton;
