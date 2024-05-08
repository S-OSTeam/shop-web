import React from 'react';
import { Card as MuiCard, CardContent, CardMedia } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './style/Card.module.scss';

interface CardProps {
    className?: string;
    imgClsN?: string;
    contentClsN?: string;
    imgPath: string;
    children?: React.ReactNode;
}

const Card = ({ className, imgClsN, contentClsN, imgPath, children }: CardProps) => {
    return (
        <MuiCard className={clsN(className, styles.card)}>
            <CardMedia className={clsN(imgClsN, styles['card-img'])} image={imgPath} />
            <CardContent
                classes={{
                    root: clsN(contentClsN, styles['card-content']),
                }}
            >
                {children}
            </CardContent>
        </MuiCard>
    );
};

Card.propTypes = {
    className: PropTypes.string,
    imgClsN: PropTypes.string,
    children: PropTypes.node.isRequired,
    contentClsN: PropTypes.string,
};

Card.defaultProps = {
    className: styles[''],
    imgClsN: styles[''],
    contentClsN: styles[''],
};

export default Card;
