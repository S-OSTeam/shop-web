import React from 'react';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import Icon, { IconProps } from '@components/atoms/source/icon/Icon';
import Button from '@components/atoms/button/Button';
import style from './style/IconButton.module.scss';

export interface IconBtnProps {
    className?: string;
    iconClsN?: string;
    icon: React.ReactNode;
    fontSize?: IconProps['fontSize'];
}

const IconButton = ({ className, iconClsN, icon, fontSize }: IconBtnProps) => {
    return (
        <Button className={clsN(className, `${style.btnIcon}`)} variant="text">
            <Icon icon={icon} fontSize={fontSize} className={clsN(iconClsN, `${style.icon}`)} />
        </Button>
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
