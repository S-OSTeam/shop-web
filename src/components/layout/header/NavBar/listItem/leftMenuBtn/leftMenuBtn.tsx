import React from 'react';
import IconButton from '@molecules/button/iconButton/IconButton';
import clsN from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles/leftMenuBtn.module.scss';

interface leftMenuBtnProps {
    ariaLabel?: string;
    edge?: 'start' | 'end' | false;
    className?: string;
    icon: React.ReactNode;
    onClick?: () => void;
}
const LeftMenuBtn = ({ ariaLabel, edge, className, icon, onClick }: leftMenuBtnProps) => {
    return (
        <IconButton
            aria-label={ariaLabel}
            edge={edge}
            className={clsN(className, `${styles.iconBtn}`)}
            icon={icon}
            onClick={onClick}
        />
    );
};

LeftMenuBtn.propTypes = {
    ariaLabel: PropTypes.string,
    edge: PropTypes.oneOf(['start', 'end', false]),
    className: PropTypes.string,
    icon: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

LeftMenuBtn.defaultProps = {
    ariaLabel: 'CategoryMenu',
    edge: 'start',
    className: `${styles.iconBtn}`,
    onClick: undefined,
};

export default LeftMenuBtn;
