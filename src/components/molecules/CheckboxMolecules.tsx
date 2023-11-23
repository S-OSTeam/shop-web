import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import classNames from 'classnames';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';

interface CheckboxMoleculeProps {
    name: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
}

const CheckboxMolecule: React.FC<CheckboxMoleculeProps> = ({ name, checked, onChange, label }) => {
    return (
        <Box sx={{ display: 'flex', ml: 3 }}>
            <FormControlLabel
                className={classNames(name)}
                name={name}
                label={label}
                control={<Checkbox checked={checked} onChange={onChange} />}
            />
        </Box>
    );
};

export default CheckboxMolecule;
