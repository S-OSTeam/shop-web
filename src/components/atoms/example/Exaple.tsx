/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/Example.module.scss';

interface ExapleProps {
    children: React.ReactNode;
    className?: string;
    isBackBgn?: boolean;
}
const Exaple = (
    {
        children,
        className,
        isBackBgn
    }:ExapleProps
) => {
    // Myclass
    const activeClsN = isBackBgn? styles.this__red : '';

    return(
        <span className={clsN(styles.this, activeClsN)}>
            {children}
        </span>
    );
}
Exaple.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    isBackBgn: PropTypes.bool,
}
Exaple.defaultProps = {
    className: styles.this,
    isBackBgn: false
}
export default Exaple;