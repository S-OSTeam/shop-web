import React from 'react';
import { Collapse } from '@mui/material';
import classNames from 'classnames';
import PropTypes from 'prop-types';

interface MyCollapseProps {
    className?: string;
    propsIn?: boolean;
    timeout?: 'auto' | number | { appear?: number, enter?: number, exit?: number };
    children: React.ReactNode;
}
// 콜랩스 열고닫히는 박스 {내부에 무엇이든 들어갈수 있으므로 ReactNode}
const CustomCollapse = ({ ...props }: MyCollapseProps) => {
    const { propsIn, timeout, className, children} = props;
    return (
        <Collapse
            in={propsIn}
            timeout={timeout}
            className={classNames(className)}
        >
            {children}
        </Collapse>
    );
};
CustomCollapse.prototype = {
    className: PropTypes.string,
    propsIn: PropTypes.bool,
    timeout: PropTypes.oneOfType([
        PropTypes.oneOf(['auto']),
        PropTypes.number,
        PropTypes.shape({
            appear: PropTypes.number,
            enter: PropTypes.number,
            exit: PropTypes.number
        }),
    ]),
    children: PropTypes.node.isRequired,
}
CustomCollapse.defaultProps = {
    className: '',
    propsIn: false,
    timeout: 'auto'
};
export default CustomCollapse;