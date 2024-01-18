/* eslint-disable */
import React from 'react';
import usePagination from '@mui/material/usePagination';
import Button from '@atoms/button/Button';
import Text from '@atoms/text/Text';
import { Box, Stack } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import style from './style/ButtonlessPagination.module.scss';

interface BtnLessProps {
    // totalPageNumber
    count: number;
    // onChange
    onChange: (e: React.ChangeEvent<unknown>, value: number) => void;
    // containerWrapperClassName
    contClsN?: string;
    // nav class
    navClsN?: string;
    // btns
    prevIcon?: React.ReactElement,
    nextIcon?: React.ReactElement,
    // btnClassName
    btnCls?: string;
    // currentPage Box ClassName
    currPageClsN?: string;
    // CurrentPage > text element className
    contextClsN?: string;
}

const ButtonlessPagination = (
    {
        count,
        onChange,
        contClsN,
        navClsN,
        btnCls,
        currPageClsN,
        contextClsN,
        prevIcon,
        nextIcon,
    }: BtnLessProps) => {
    const { items } = usePagination({ count, onChange });
    const result = items.map((
        {
            page,
            type,
            selected,
            ...items
        }) => {
        let children = null;
        let foo: any;
        foo = {
            value: page,
        };
        if (type === 'previous') {
            if ((foo!.value > 0)) {
                children = (
                    <Button
                        className={clsN(btnCls,`${style.btnColor}`)}
                        type='button'
                        {...items}
                    >
                        {prevIcon}
                    </Button>
                );
            } else {
                children = (
                    <Button
                        className={clsN(btnCls,`${style.btnColor}`)}
                        type='button'
                        {...items}
                        disabled
                    >
                        {prevIcon}
                    </Button>
                );
            }
            return children;
        }
        if (type === 'next') {
            if ((foo!.value <= 1) || (foo!.value <= count)) {
                children = (
                    <Button
                        className={clsN(btnCls, `${style.btnColor}`)}
                        type='button'
                        {...items}
                    >
                        {nextIcon}
                    </Button>
                );
            } else {
                children = (
                    <Button
                        className={clsN(btnCls, `${style.btnColor}`)}
                        type='button'
                        {...items}
                        disabled
                    >
                        {nextIcon}
                    </Button>
                );
            }
            return children;
        }
        if (selected) {
            children = (
                <Box className={clsN(currPageClsN, `${style.currPage}`)}>
                    <Text text={`${page}/${count}`} className={clsN(contextClsN, `${style.currText}`)} />
                </Box>
            );
            return children;
        }
    });
    return (
        <Stack className={clsN(contClsN, `${style.paginationWrapper}`)}>
            <nav className={clsN(navClsN, `${style.nav}`)}>
                <ul>
                    {result}
                </ul>
            </nav>
        </Stack>
    );
};
ButtonlessPagination.propTypes = {
    count: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    contClsN: PropTypes.string,
    navClsN: PropTypes.string,
    btnCls: PropTypes.string,
    currPageClsN: PropTypes.string,
    contextClsN: PropTypes.string,
    prevIcon: PropTypes.element,
    nextIcon: PropTypes.element
};
ButtonlessPagination.defaultProps = {
    contClsN: `${style.paginationWrapper}`,
    navClsN: `${style.nav}`,
    btnCls: `${style.btnColor}`,
    currPageClsN: `${style.currPage}`,
    contextClsN: `${style.currText}`,
    prevIcon: <ArrowBackIosNew />,
    nextIcon: <ArrowForwardIos />
}
export default ButtonlessPagination;