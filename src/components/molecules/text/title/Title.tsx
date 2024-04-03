import React from 'react';
import { Box } from '@mui/material';
import clsN from 'classnames';
import Text from '@atoms/text/Text';
import PropTypes from 'prop-types';
import styles from './styles/Title.module.scss';

interface TitleProps {
    className?: string;
    textClsN?: string;
    content: string;
}

const Title = ({ className, textClsN, content }: TitleProps) => {
    return (
        <Box className={clsN(className, styles['title-wrapper'])}>
            <Text className={clsN(textClsN, styles['title-wrapper__text'])} text={content} />
        </Box>
    );
};

Title.propTypes = {
    className: PropTypes.string,
    textClsN: PropTypes.string,
    content: PropTypes.string,
};

Title.defaultProps = {
    className: styles[''],
    textClsN: styles[''],
    content: '',
};

export default Title;
