import React from 'react';
import { MenuItem, Select } from '@mui/material';
import { TestOption } from '../../templates/product/SubInfo';

interface CustomSelectProps {
    options: TestOption[];
}

const CustomSelect = ({ options }: CustomSelectProps) => {
    return (
        <Select>
            {options.map((option) => (
                <MenuItem value={option.price}>{option.option}</MenuItem>
            ))}
            ;
        </Select>
    );
};

export default CustomSelect;
