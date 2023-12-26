import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import Text from '../../atoms/text/Text';
import styles from './styles/TextGroup.module.scss';

interface textBoxListInterface {
    text: string;
    clsName: string;
}

interface myProps {
    textList: textBoxListInterface[];
    wrapperClsN?: string;
}

const TextGroup = ({ textList, wrapperClsN }: myProps) => {

    const tempProvide = textList.map((item) => {
        const {clsName, text} = item;
        return (
                <Text text={text} key={`${text}`} className={clsName}/>
        );
    });

    return (
        <Box component='div' className={clsN(`${styles.textGroup}`, wrapperClsN,)}>
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
    wrapperClsN: PropTypes.string,
}
TextGroup.defaultProps={
    wrapperClsN: undefined,
}
export default TextGroup;