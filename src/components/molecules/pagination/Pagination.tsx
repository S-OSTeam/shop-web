import React from 'react';
import { Pagination as MuiPagination, PaginationProps as MuiPaginationProps } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/Pagination.module.scss';

interface PaginationProps extends MuiPaginationProps {
    className?: string;
    color?: MuiPaginationProps['color'];
    count: number;
    defaultPage?: number;
    disabled?: boolean;
    hideNextButton?: boolean;
    hidePrevButton?: boolean;
    page: number;
    onChange: MuiPaginationProps['onChange'];
    shape?: MuiPaginationProps['shape'];
    showFirstButton?: boolean;
    showLastButton?: boolean;
    siblingCount?: number;
    size?: MuiPaginationProps['size'];
    variant?: MuiPaginationProps['variant'];
}

const Pagination = ({ ...props }: PaginationProps) => {
    return (
        <MuiPagination
            className={clsN(`${props.className} ${styles.pagination}`)}
            color={props.color}
            count={props.count}
            defaultPage={props.defaultPage}
            disabled={props.disabled}
            hideNextButton={props.hideNextButton}
            hidePrevButton={props.hidePrevButton}
            page={props.page}
            onChange={props.onChange}
            shape={props.shape}
            showFirstButton={props.showFirstButton}
            showLastButton={props.showLastButton}
            siblingCount={props.siblingCount}
            size={props.size}
            variant={props.variant}
        />
    );
};

Pagination.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(['primary', 'secondary', 'standard']),
    count: PropTypes.number,
    defaultPage: PropTypes.number,
    disabled: PropTypes.bool,
    hideNextButton: PropTypes.bool,
    hidePrevButton: PropTypes.bool,
    page: PropTypes.number,
    onChange: PropTypes.func,
    shape: PropTypes.oneOf(['circular', 'rounded']),
    showFirstButton: PropTypes.bool,
    showLastButton: PropTypes.bool,
    siblingCount: PropTypes.number,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    variant: PropTypes.oneOf(['text', 'outlined']),
};

Pagination.defaultProps = {
    className: `${styles.pagination}`,
    color: 'primary',
    defaultPage: 1,
    disabled: false,
    hideNextButton: false,
    hidePrevButton: false,
    shape: 'rounded',
    showFirstButton: false,
    showLastButton: false,
    siblingCount: 1,
    size: 'medium',
    variant: 'text',
};

export default Pagination;
