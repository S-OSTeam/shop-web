import React from 'react';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import Button from '@atoms/button/Button';
import style from './style/ImageButton.module.scss';

export interface ImageBtnProps {
    className?: string;
    children: React.ReactNode;
}

const ImageButton = ({ className, children }: ImageBtnProps) => {
    return <Button className={clsN(className, `${style.imgButton}`)}>{children}</Button>;
};
ImageButton.propTypes = {
    className: PropTypes.string,
};
ImageButton.defaultProps = {
    className: `${style.btnIcon}`,
};
export default ImageButton;
