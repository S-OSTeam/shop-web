import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import PropTypes from 'prop-types';

interface AtomProps extends ButtonProps {
    id?: string;
    className?: string;
    variant?: ButtonProps['variant'];
    children: React.ReactNode;
    onClick?: ButtonProps['onClick'];
    onMouseOver?: ButtonProps['onMouseOver'];
}

const ButtonComponet = ({ id, className, variant, children, onClick, onMouseOver, disabled }: AtomProps) => {
    return (
        <Button
            id={id}
            aria-label="Button label"
            className={className}
            variant={variant}
            onClick={onClick}
            onMouseOver={onMouseOver}
            disabled={disabled}
        >
            {children}
        </Button>
    );
};

ButtonComponet.prototype = {
    id: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['text', 'outlined', 'contained', undefined]),
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
};

ButtonComponet.defaultProps = {
    id: '',
    className: ``,
    variant: 'contained',
    onClick: () => {},
    onMouseOver: () => {},
};

export default ButtonComponet;
