import React from 'react';
import { AvatarProps, CardHeader as MuiCardHeader } from '@mui/material';
import PropTypes from 'prop-types';
import { IconBtnProps } from '@molecules/button/iconButton/IconButton';

interface ActionProps {
    IconBtn: React.ReactElement<IconBtnProps>
}
export interface CardHeaderProps {
    avatar?: React.ReactElement<AvatarProps>;
    action?: ActionProps['IconBtn'];
    title: string;
    subheader?: string;
}
const CardContent = (
    {
        avatar,
        action,
        title,
        subheader
    }:CardHeaderProps) => {

    return(
        <MuiCardHeader
            avatar={avatar}
            action={action}
            title={title}
            subheader={subheader}
        />
    );
}
CardContent.propTypes = {
    avatar: PropTypes.element,
    action: PropTypes.element,
    title: PropTypes.string.isRequired,
    subheader: PropTypes.string,
}
CardContent.defaultProps = {
    avatar: undefined,
    action: undefined,
    subheader: undefined,
}
export default CardContent;