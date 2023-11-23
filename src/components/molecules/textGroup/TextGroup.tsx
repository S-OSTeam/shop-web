import React from 'react';
import { Box } from '@mui/material';
import Text from '../../atoms/text/Text';
import PropTypes from 'prop-types';

interface textBoxListInterface {
    text: string;
    clsName: string;
}

interface myProps {
    textList: textBoxListInterface[];
}

const TextGroup = ({ textList }: myProps) => {

    const tempProvide = textList.map((item, idx) => {
        const {clsName, text} = item;
        return (
            <li key={`${idx}-${text}`}>
                <Text text={text} className={clsName} variant='body1'/>
            </li>
        );
    });

    return (
        <Box component='ul'>
            {tempProvide}
        </Box>
    );
};

TextGroup.prototype={
    textList: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            clsName: PropTypes.string,
        }),
    ),
}

TextGroup.defaultProps={
    textList: undefined,
}

export default TextGroup;