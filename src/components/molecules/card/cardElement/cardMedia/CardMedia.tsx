import React from 'react';
import { CardMedia as MuiCardMedia, CardMediaProps as MuiCardMediaProps } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import style from './style/CardMedia.module.scss';

interface CardMediaProps extends MuiCardMediaProps{
    className?: string;
    image?: MuiCardMediaProps['image'];
    ariaLabel?: MuiCardMediaProps['aria-label'];
}
const CardMedia = (
    {
        className,
        image,
        ariaLabel,
    }:CardMediaProps) => {
    return(
        <MuiCardMedia
            className={clsN(className, `${style.cardMedia}`)}
            image={image}
            aria-label={ariaLabel}
        />
    )
}
CardMedia.propTypes = {
    className: PropTypes.string,
    image: PropTypes.string,
    ariaLabel: PropTypes.string,
}
CardMedia.defaultProps = {
    className: `${style.cardMedia}`,
    image: undefined,
    ariaLabel: undefined,
}
export default CardMedia;