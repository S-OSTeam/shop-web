import React from 'react';
import { SvgIcon } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import Icon, {IconProps} from '../../atoms/icon/Icon';
import styles from './styles/IconBox.module.scss';

interface IconBoxProps {
    icon: React.ReactElement;
    svgClassName?: string;
    iconClassName?: string;
    fontSize?: IconProps['fontSize'];
}
const IconBox = ({ ...props }: IconBoxProps) => {
    const { icon, svgClassName, iconClassName, fontSize } = props;
    return (
        <SvgIcon className={clsN(svgClassName, `${styles.svgIcon}`)}>
            <Icon className={clsN(iconClassName, `${styles.icon}`)} fontSize={fontSize}>
                {icon}
            </Icon>
        </SvgIcon>
    );
};
IconBox.propTypes = {
    icon: PropTypes.string.isRequired,
    svgClassName: PropTypes.string,
    iconClassName: PropTypes.string,
    fontSize: PropTypes.oneOf([ "small", "inherit", "medium", "large", undefined]),
};
IconBox.defaultProps = {
    svgClassName: `${styles.svgIcon}`,
    iconClassName: `${styles.icon}`,
    fontSize: 'inherit',
};
export default IconBox;
