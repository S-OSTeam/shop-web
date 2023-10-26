import React from 'react';
import Checkbox from '@mui/material/Checkbox';

interface CheckboxAtomProps {
    checked: boolean;
    onChange: () => void;
    label: string;
}

const CheckboxAtom: React.FC<CheckboxAtomProps> = ({ checked, onChange, label }) => {
    return (
        <div>
            <Checkbox checked={checked} onChange={onChange} id="checkbox" />
            <label htmlFor="checkbox">{label}</label>
        </div>
    );
};

export default CheckboxAtom;