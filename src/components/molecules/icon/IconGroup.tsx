import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Icon from '@atoms/source/icon/Icon';
import clsN from 'classnames';
import styles from './styles/IconGroup.module.scss';

interface IconGroupProps {
    className?: string;
    IconGroups: React.ReactNode[];
}

const IconGroup = ({ className, IconGroups }: IconGroupProps) => {
    return (
        <Box className={clsN(className, styles['icon-group'])}>
            {IconGroups.map((icon) => (
                <Icon icon={icon} fontSize="inherit" />
            ))}
        </Box>
    );
};

IconGroup.propTypes = {
    className: PropTypes.string,
};

IconGroup.defaultProps = {
    className: styles[''],
};

export default IconGroup;
