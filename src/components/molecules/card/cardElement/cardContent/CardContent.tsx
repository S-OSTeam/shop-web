import React from 'react';
import { CardContent as MuiCardContent } from '@mui/material';
import PropTypes from 'prop-types';
import { TextProps } from '@atoms/text/Text';

export interface CardContentProps {
    contents: React.ReactElement<TextProps>[];
}
const CardContent = ({ contents }: CardContentProps) => {
    return <MuiCardContent>{contents}</MuiCardContent>;
};
CardContent.propTypes = {
    contents: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
};
CardContent.defaultProps = {};
export default CardContent;
