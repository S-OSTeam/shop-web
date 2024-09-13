import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import ImageButton from '@molecules/button/imageButton/ImageButton';
import clsN from 'classnames';
import styles from './styles/ImageGroup.module.scss';

interface ImageGroupProps {
    className?: string;
    btnClsN?: string;
    imgClsN?: string;
    imgUrls: string[];
    onClick?: (imgPath: string) => void;
    onMouseOver?: (imgPath: string) => void;
}

const ImageGroup = ({ className, btnClsN, imgClsN, imgUrls, onClick, onMouseOver }: ImageGroupProps) => {
    return (
        <Box className={clsN(className, styles['image-group-wrapper'])}>
            {imgUrls.map((imgPath) => (
                <ImageButton
                    className={clsN(btnClsN, styles['image-group-wrapper__btn'])}
                    imgClsN={clsN(imgClsN, styles['image-group-wrapper__image'])}
                    imgPath={imgPath}
                    onClick={() => onClick && onClick(imgPath)}
                    onMouseOver={() => onMouseOver && onMouseOver(imgPath)}
                />
            ))}
        </Box>
    );
};

ImageGroup.propsType = {
    className: PropTypes.string,
    btnClsN: PropTypes.string,
    imgClsN: PropTypes.string,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
};

ImageGroup.defaultProps = {
    className: styles[''],
    btnClsN: styles[''],
    imgClsN: styles[''],
    onClick: undefined,
    onMouseOver: undefined,
};

export default ImageGroup;
