import React from 'react';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import {IconButton, IconButtonProps} from '@mui/material';
import Icon, { IconProps } from '@components/atoms/source/icon/Icon';
// import Button from '@components/atoms/button/Button';
import style from './style/IconButton.module.scss';
import './style/defaultStyle.scss';

export interface IconBtnProps extends IconButtonProps{
    className?: string;
    iconClsN?: string;
    icon: React.ReactNode;
    fontSize?: IconProps['fontSize'];
}

const IconButtonComponent = ({ className, iconClsN, icon, fontSize }: IconBtnProps) => {
    return (
        <IconButton className={clsN(className, `${style.btnIcon}`)} >
            <Icon icon={icon} fontSize={fontSize} className={clsN(iconClsN, `${style.icon}`)} />
        </IconButton>
    );
};
IconButtonComponent.propTypes = {
    className: PropTypes.string,
    iconClsN: PropTypes.string,
    icon: PropTypes.node.isRequired,
    fontSize: PropTypes.oneOf(['small', 'inherit', 'large', 'medium', undefined]),
};
IconButtonComponent.defaultProps = {
    className: `${style.btnIcon}`,
    iconClsN: `${style.icon}`,
    fontSize: 'inherit',
};
export default IconButtonComponent;
