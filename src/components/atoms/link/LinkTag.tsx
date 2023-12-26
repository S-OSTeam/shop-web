import React from 'react';
import { Link, LinkProps } from '@mui/material';
import classNames from 'classnames';
import PropTypes from 'prop-types';

interface myLinkProps {
    children: React.ReactNode;
    href?: string;
    className?: string;
    underline?: LinkProps['underline'];
}
const LinkTag = ({ ...props }: myLinkProps) => {
    const { children, href, className, underline } = props;
    return (
        <Link href={href} underline={underline} className={classNames(className)}>
            {children}
        </Link>
    );
};

LinkTag.prototype = {
    href: PropTypes.string,
    className: PropTypes.string,
    underLine: PropTypes.oneOf(['always', 'hover', 'none']),
};
LinkTag.defaultProps = {
    href: undefined,
    underline: 'none',
    className: '',
};
export default LinkTag;
