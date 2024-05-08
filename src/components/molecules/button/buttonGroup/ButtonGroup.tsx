import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import { ButtonProps } from '@atoms/button/Button';
import {IconBtnProps} from '@molecules/button/iconButton/IconButton';
import { ImageBtnProps } from '@molecules/button/imageButton/ImageButton';
import style from './style/ButtonGroup.module.scss';


interface BtnGroupProps {
    wrapperClsN?: string;
    buttons: React.ReactElement<IconBtnProps|ButtonProps|ImageBtnProps>[];
}

const ButtonGroup = (
    {
        wrapperClsN,
        buttons
    }:BtnGroupProps) => {

    return(
        <Box component='div' className={clsN(wrapperClsN, `${style.btnWrapper}`)}>
            {buttons}
        </Box>
    )
}
ButtonGroup.propTypes = {
    wrapperClsN: PropTypes.string,
    buttons: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
}
ButtonGroup.defaultProps = {
    wrapperClsN: `${style.btnWrapper}`
}