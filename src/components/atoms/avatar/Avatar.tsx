import React from 'react';
import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import style from './style/Avatar.module.scss';


export interface AvatarProps extends MuiAvatarProps {
    alt: MuiAvatarProps['alt'];
    className?: MuiAvatarProps['className'];
    children?: React.ReactNode;
    ariaLabel?: MuiAvatarProps['aria-label'];
    variant?: MuiAvatarProps['variant'];
    src?: MuiAvatarProps['src'];
}

const Avatar = (
    {
        alt,
        className,
        ariaLabel,
        children,
        variant,
        src,
    }: AvatarProps) => {

    return (
        <MuiAvatar
            alt={alt}
            className={clsN(className, `${style.avatar}`)}
            aria-label={ariaLabel}
            variant={variant}
            src={src}
        >
            {children}
        </MuiAvatar>
    );
};
Avatar.propTypes = {
    alt: PropTypes.string,
    className: PropTypes.string,
    ariaLabel: PropTypes.string,
    children: PropTypes.node,
    variant: PropTypes.oneOf(['circular', 'rounded', 'square', undefined]),
    src: PropTypes.string,
};
Avatar.defaultProps = {
    alt: undefined,
    className: undefined,
    children: undefined,
    ariaLabel: undefined,
    variant: 'circular',
    src: undefined,
};
export default Avatar;