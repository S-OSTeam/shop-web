import React from 'react';
import { Link as MuiLink, LinkProps as MuiLinkProps} from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/Link.module.scss';

interface LinkProps extends MuiLinkProps{
    // 컴포넌트 root 클래스명
    className?: string;
    // 자식요소
    children: React.ReactNode;
    // href
    href?: string;
}
const LinkComponent = (
    {
        className,
        children,
        href
    }: LinkProps
) => {
    return (
        <MuiLink
            className={clsN(className, styles.link)}
            href={href}
        >
            {children}
        </MuiLink>
    );
};
LinkComponent.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
}
LinkComponent.defaultProps = {
    className: styles.link,
    href: undefined,
}
export default LinkComponent;
