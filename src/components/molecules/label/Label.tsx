import React from 'react';
import { InputLabel } from '@mui/material';
import PropTypes from 'prop-types';

interface MyInputLabelProps {
    id?: string,
    htmlFor?: string,
    className?: string
    children?: React.ReactNode | string | undefined;
    variant?: 'standard' | 'outlined' | 'filled';
}

const InputLabelComponent = ({ id, htmlFor, className, children, variant }: MyInputLabelProps) => {
    return (
        <InputLabel
            sx={{
                display: 'block',
                position: 'relative'
            }}
            id={id}
            htmlFor={htmlFor}
            className={className}
            variant={variant}
        >
            {children}
        </InputLabel>
    );
};

InputLabelComponent.prototype = {
    id: PropTypes.string,
    htmlFor: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.string,
};
InputLabelComponent.defaultProps = {
    id: '',
    htmlFor: '',
    className: '',
    children: undefined,
    variant: 'standard',
};

export default InputLabelComponent;
