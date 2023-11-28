import React from 'react';
import { SvgIcon } from '@mui/material';
import Icon, { myIconProps } from '../../atoms/icon/IconCustom';
import clsN from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles/IconBox.module.scss';

interface IconProps {
    icon: React.ReactNode;
    svgClassName?: string;
    iconClassName?: string;
    fontSize?: myIconProps['fontSize'];
}
const IconBox = ({ ...props }: IconProps) => {
    const { icon, svgClassName, iconClassName, fontSize } = props;
    return (
        <SvgIcon className={clsN(svgClassName, `${styles.svgIcon}`)}>
            <Icon className={clsN(iconClassName, `${styles.icon}`)} fontSize={fontSize}>
                {icon}
            </Icon>
        </SvgIcon>
    );
};
IconBox.prototype = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string,
    size: PropTypes.string,
};
IconBox.defaultProps = {
    className: '',
    size: 'small',
};
export default IconBox;
