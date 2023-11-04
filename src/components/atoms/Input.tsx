import React from 'react';
import TextField from '@mui/material/TextField';
import classNames from 'classnames';

interface InputProps {
    className?: string;
    type: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputAtom: React.FC<InputProps> = ({ className,type, value, onChange ,placeholder}) => {
    return <TextField className={classNames(className)} type={type} value={value} onChange={onChange} placeholder={placeholder}/>;
};
InputAtom.defaultProps = {
    className:undefined,
    placeholder: undefined,
};
export default InputAtom;