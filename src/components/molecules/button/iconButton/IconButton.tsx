import React from 'react';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import {IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps} from '@mui/material';
import Icon, { IconProps } from '@components/atoms/source/icon/Icon';
import style from './style/IconButton.module.scss';

export interface IconBtnProps extends MuiIconButtonProps{
    className?: string;
    iconClsN?: string;
    icon: React.ReactNode;
    fontSize?: IconProps['fontSize'];
}

const IconButton = ({ className, iconClsN, icon, fontSize }: IconBtnProps) => {
    return (
        <MuiIconButton className={clsN(className, `${style.btnIcon}`)} >
            <Icon icon={icon} fontSize={fontSize} className={clsN(iconClsN, `${style.icon}`)} />
        </MuiIconButton>
    );
};
IconButton.propTypes = {
    className: PropTypes.string,
    iconClsN: PropTypes.string,
    icon: PropTypes.node.isRequired,
    fontSize: PropTypes.oneOf(['small', 'inherit', 'large', 'medium', undefined]),
};
IconButton.defaultProps = {
    className: `${style.btnIcon}`,
    iconClsN: `${style.icon}`,
    fontSize: 'inherit',
};
export default IconButton;
