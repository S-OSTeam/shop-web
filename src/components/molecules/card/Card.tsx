import React from 'react';
import { Card as MuiCard, CardProps as MuiCardProps, CardContent, CardMedia } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './style/Card.module.scss';

interface CardProps extends MuiCardProps {
    className?: string;
    imgClsN?: string;
    contentClsN?: string;
    imgPath: string;
    children?: React.ReactNode;
    onClick?: MuiCardProps['onClick'];
}

const Card = ({ className, imgClsN, contentClsN, imgPath, children, onClick }: CardProps) => {
    return (
        <MuiCard className={clsN(className, styles.card)} onClick={onClick}>
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
    onClick: PropTypes.func,
};

Card.defaultProps = {
    className: styles[''],
    imgClsN: styles[''],
    contentClsN: styles[''],
    onClick: undefined,
};

export default Card;
