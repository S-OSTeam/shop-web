import React from 'react';
import { Collapse as MuiCollapse, CollapseProps as MuiCollapseProps } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/Collapse.module.scss';

interface CollapseProps extends MuiCollapseProps {
    className?: string;
    children: React.ReactNode;
    isOpen?: boolean;
}

const Collapse = ({children, className, isOpen}:CollapseProps) => {

    return(
        <MuiCollapse className={clsN(className,styles.collapse)} in={isOpen}>
            {children}
        </MuiCollapse>
    )
}
Collapse.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool,
}
Collapse.defaultProps = {
    className: styles.collapse,
    isOpen: undefined,
}
export default Collapse;