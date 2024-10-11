import React from 'react';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import Image from '@atoms/source/image/Image';
import Button from '@atoms/button/Button';
import { ButtonProps } from '@mui/base';
import style from './style/ImageButton.module.scss';

export interface ImageBtnProps extends ButtonProps {
    className?: string;
    imgClsN?: string;
    imgPath: string;
    alt?: string;
    onClick?: ButtonProps['onClick'];
    onMouseOver?: ButtonProps['onMouseOver'];
}

const ImageButton = ({ className, imgClsN, imgPath, alt, onClick, onMouseOver }: ImageBtnProps) => {
    return (
        <Button className={clsN(className, `${style.imgButton}`)} onClick={onClick} onMouseOver={onMouseOver}>
            <Image className={clsN(imgClsN, `${style.img}`)} imgPath={imgPath} alt={alt} />
        </Button>
    );
};
ImageButton.propTypes = {
    ...Image.propTypes,
    imgClsN: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
};
ImageButton.defaultProps = {
    ...Image.defaultProps,
    className: `${style.btnIcon}`,
    onClick: undefined,
    onMouseOver: undefined,
};
export default ImageButton;
