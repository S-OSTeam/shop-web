import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import classNames from 'classnames';

interface CheckboxMoleculeProps {
    name: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
}

const CheckboxMolecule: React.FC<CheckboxMoleculeProps> = ({ name, checked, onChange, label }) => {
    return (
        <div>
            <Checkbox
                className={classNames(name)}
                name={name}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={name}>{label}</label>
        </div>
    );
};

export default CheckboxMolecule;
