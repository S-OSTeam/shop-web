import React from 'react';
import { FormControl } from '@mui/material';
import classNames from 'classnames';
import PropTypes from 'prop-types';

interface MySelectorInterface {
    fullWidth?: boolean;
    variant?: 'standard' | 'outlined' | 'filled';
    className?: string;
    children?: React.ReactNode;
}
const CustomFormControl = ({...props}: MySelectorInterface) => {
    const {fullWidth, variant, className, children}= props;
    return (
        <FormControl
            fullWidth={fullWidth}
            variant={variant}
            className={classNames(className)}
        >
            {children}
        </FormControl>
    );
}
CustomFormControl.prototype = {
    fullWidth: PropTypes.bool,
    variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
    className: PropTypes.string,
    children: PropTypes.node,
}
CustomFormControl.defaultProps = {
    fullWidth: true,
    variant: 'standard',
    className: '',
    children: undefined,
}
export default CustomFormControl;