import React from 'react';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import { IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps } from '@mui/material';
import Icon, { IconProps } from '@components/atoms/source/icon/Icon';
import style from './style/IconButton.module.scss';

export interface IconBtnProps extends MuiIconButtonProps {
    className?: string;
    iconClsN?: string;
    icon: React.ReactNode;
    fontSize?: IconProps['fontSize'];
    onClick?: MuiIconButtonProps['onClick'];
}

const IconButton = ({ className, iconClsN, icon, fontSize, onClick }: IconBtnProps) => {
    return (
        <MuiIconButton className={clsN(className, `${style.btnIcon}`)} onClick={onClick}>
            <Icon icon={icon} fontSize={fontSize} className={clsN(iconClsN, `${style.icon}`)} />
        </MuiIconButton>
    );
};
IconButton.defaultProps = {
    className: `${style.btnIcon}`,
    iconClsN: `${style.icon}`,
    fontSize: 'inherit',
    onClick: undefined,
};
export default IconButton;
