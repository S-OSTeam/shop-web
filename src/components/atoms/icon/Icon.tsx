import React from 'react';
import { SvgIcon, IconProps as MuiIconProps,} from '@mui/material';
import clsN from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles/Icon.module.scss';

export interface IconProps extends MuiIconProps {
    children: React.ReactElement;
    fontSize?: MuiIconProps['fontSize'];
    className?: string;
}

const Icon = ({ children, fontSize, className }: IconProps) => {
    return (
        <SvgIcon className={clsN(className, `${styles.atomIcon}`)} style={{ fontSize }}>
            {children}
        </SvgIcon>
    );
};
Icon.propTypes = {
    children: PropTypes.element.isRequired,
    fontSize: PropTypes.oneOf(['inherit', 'large', 'medium', 'small', undefined]),
    className: PropTypes.string,
};
Icon.defaultProps = {
    fontSize: 'medium',
    className: `${styles.atomIcon}`,
};

export default Icon;
