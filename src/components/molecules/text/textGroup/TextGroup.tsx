import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Text from '@atoms/text/Text';
import clsN from 'classnames';
import styles from './styles/TextGroup.module.scss';

interface TextGroupProps {
    className?: string;
    textClsNs?: string[] | undefined;
    textGroup: string[];
}

const TextGroup = ({ className, textClsNs, textGroup }: TextGroupProps) => {
    const textClsN = (textData: string[] | undefined, index: number) => {
        if (textData === undefined || textData[index] === undefined) {
            return undefined;
        }
        return textData[index];
    };

    return (
        <Box className={clsN(className, styles['text-group'])}>
            {textGroup.map((text, index) => (
                <Text className={clsN(textClsN(textClsNs, index))} text={text} />
            ))}
        </Box>
    );
};

TextGroup.propTypes = {
    className: PropTypes.string,
    textClsNs: PropTypes.oneOf([PropTypes.arrayOf(PropTypes.string), undefined]),
};

TextGroup.defaultProps = {
    className: styles['text-group'],
    textClsNs: undefined,
};

export default TextGroup;
