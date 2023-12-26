import React from 'react';
import { FormHelperText, useFormControl } from '@mui/material';
import PropTypes from 'prop-types';

interface MyProps {
    requiredText?: string,
    defaultText?: string,
}

const HelperText = ({ ...props }: MyProps) => {
    const { requiredText, defaultText } = props;

    const { focused } = useFormControl() || {};
    const helperText = React.useMemo(() => {
        if (focused) {
            return requiredText;
        }
        return defaultText;
    }, [focused]);
    return <FormHelperText>{helperText}</FormHelperText>;
};

HelperText.prototype = {
    requiredText: PropTypes.string,
    defaultText: PropTypes.string,
};
HelperText.defaultProps = {
    requiredText: '',
    defaultText: '',
};
export default HelperText;