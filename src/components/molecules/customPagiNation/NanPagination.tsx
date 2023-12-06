/* eslint-disable */
import React from 'react';
import usePagination from '@mui/material/usePagination';
import Button from '../../atoms/button/Button';
import { Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import clsN from 'classnames';
import Text from '../../atoms/text/Text';
import styles from './styles/NanPagienation.module.scss';

interface myProps {
    // totalPageNumber
    count: number;
    // onChange
    onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
    // containerWrapperClassName
    contClsN?: string;
    // nav 클래스명
    navClsN?: string;
    prevIcon?: React.ReactElement,
    nextIcon?: React.ReactElement,
    // 버튼 2개 클래스, 페이지 인덱스 요소 2개 클래스
}

const NanPagination = ({ count, onChange, contClsN, navClsN, nextIcon, prevIcon }: myProps) => {
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
                        className={clsN(`${styles.btnColor}`)}
                        type='button'
                        {...items}
                    >
                        {prevIcon}
                    </Button>
                );
            } else {
                children = (
                    <Button
                        className={clsN(`${styles.btnColor}`)}
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
                        className={clsN(`${styles.btnColor}`)}
                        type='button'
                        {...items}>
                        {nextIcon}
                    </Button>);
            } else {
                children = (
                    <Button
                        className={clsN(`${styles.btnColor}`)}
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
                <div className={clsN('currPage', `${styles.currPage}`)}>
                    <Text text={`${page}/${count}`} className={clsN('currText', `${styles.currText}`)} />
                </div>
            );
            return children;
        }
    });

    return (
        <Stack className={clsN(contClsN, `${styles.paginationWrapper}`)}>
            <nav className={clsN(navClsN, `${styles.nav}`)}>
                <ul>
                    {result}
                </ul>
            </nav>
        </Stack>
    );
};
NanPagination.propsTypes = {
    count: PropTypes.number,
    onChange: PropTypes.func,
    contClsN: PropTypes.string,
    navClsN: PropTypes.string,
    prevIcon: PropTypes.element,
    nextIcon: PropTypes.element,
};
NanPagination.defaultProps = {
    contClsN: `${styles.paginationWrapper}`,
    navClsN: `${styles.nav}`,
    prevIcon: <ArrowBackIosNew />,
    nextIcon: <ArrowForwardIos />,
};

export default NanPagination;