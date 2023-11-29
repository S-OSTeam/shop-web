import React from 'react';
import { OutlinedInput } from '@mui/material';
import PropTypes from 'prop-types';


interface myProps {
    label: React.ReactNode;
}
const OutLinedIpt = (
    {
        label
    }: myProps) => {

    return <OutlinedInput label={label} />
}
OutLinedIpt.propTypes = {
    label: PropTypes.string,
};
OutLinedIpt.defaultProps = {
};
export default OutLinedIpt;