import React, { useState } from 'react';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import classNames from 'classnames';
import { OptionItem } from '../../../../util/GlobalTest';
// import Option from '../../../atoms/option/Option';

interface SelectOptionProps {
    className?: string;
    options: OptionItem[];
}

const SelectOption = ({ className, options }: SelectOptionProps) => {
    const [option, setOption] = useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {
        setOption(event.target.value as string);
    };

    return (
        <Select className={classNames(className)} onChange={handleChange} value={option}>
            {options.map((opt) => (
                <MenuItem value={opt.price}>{opt.option}</MenuItem>
            ))}
            ;
        </Select>
    );
};

export default SelectOption;
