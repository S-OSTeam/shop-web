import React from 'react';
import FormLabel, { FormLabelProps } from '@mui/material/FormLabel';
import PropTypes from 'prop-types';

const MyFormLabel = ({...props}:FormLabelProps) => {
    return(
      <FormLabel>
          {props.children}
      </FormLabel>
    );
};
MyFormLabel.prototype = {
    component: PropTypes.element,
};
MyFormLabel.defaultProps = {
    component: 'legend',
    children: '',
}
export default MyFormLabel;