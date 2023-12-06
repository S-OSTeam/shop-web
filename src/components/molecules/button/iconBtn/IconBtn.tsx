import React from 'react';
import Button from '@atoms/button/Button';
import clsN from 'classnames';
import Icon from '@atoms/icon/Icon';
import PropTypes from 'prop-types';
import styles from './styles/IconBtn.module.scss';


interface myProps{
    icon: React.ReactNode;
    btnClass?: string;
    svgClass?: string;
}

const IconBtn = (
    {
        icon,
        btnClass,
        svgClass,
    }:myProps) => {
    return(
        <Button type='button' className={clsN(btnClass, `${styles.button}`)} >
            <Icon className={clsN(svgClass, `${styles.svg}`)}>
                {icon}
            </Icon>
        </Button>
    );
}

IconBtn.propTypes = {
    icon: PropTypes.node.isRequired,
    btnClass: PropTypes.string,
    svgClass: PropTypes.string,
};
IconBtn.defaultProps = {
    btnClass: `${styles.button}`,
    svgClass: `${styles.svg}`,
};

export default IconBtn;