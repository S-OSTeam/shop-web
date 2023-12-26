import React from 'react';
import { TextField ,TextFieldProps } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/SelectCustom.module.scss';

interface selectProps{
    variant?: 'filled' | 'outlined' | 'standard';
    value?: string;
    label: React.ReactNode;
    onChange?: TextFieldProps['onChange'];
    InputProps?: TextFieldProps['InputProps'];
    className?: string;
    children: React.ReactNode;
}
const SelectCustom = ({ ...props }: selectProps, required:TextFieldProps['required']) => {
    // const ariaLabel = {'aria-label': props.inputProps};
    return (
        <TextField
            variant={props.variant}
            value={props.value}
            label={props.label}
            onChange={props.onChange}
            InputProps={props.InputProps}
            className={clsN(props.className, `${styles.select}`)}
            select
            fullWidth
            required={required}
        >
            {props.children}
        </TextField>
    );
};
SelectCustom.propTypes = {
    variant: PropTypes.oneOf([ 'filled', 'outlined', 'standard', undefined]),
    label: PropTypes.node.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    InputProps: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
SelectCustom.defaultProps = {
    variant: 'outlined',
    value: '',
    onChange: ()=>{},
    className: `${styles.select}`,
    InputProps: undefined,
};
export default SelectCustom;