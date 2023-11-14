import React from 'react';
import PropTypes from 'prop-types';
import { LinkProps } from '@mui/material';
import LinkBox from '../../atoms/linkBox/LinkBox';
import Text from '../../atoms/contents/Text';

interface myLinkWrapperProps {
    /* LinkBox */
    href?: string; // link 되는 url 혹은 # 아이디
    linkBoxClassName?: string; // 링크 박스의 클래스 네임
    underline?: LinkProps['underline']; // 링크 박스 underline 스타일
    /* Text */
    text?: string; // Text 내부 내용
    textClassName?: string; // Text 의 클래스 네임
    children?: React.ReactNode;
}
const LinkBoxWrapper = ({ ...props }: myLinkWrapperProps) => {
    const { href, linkBoxClassName, underline, text, textClassName, children } = props;
    return (
        <LinkBox href={href} className={linkBoxClassName} underline={underline} >
            <Text text={text} className={textClassName} />
            {children}
        </LinkBox>
    );
};

LinkBoxWrapper.prototype = {
    href: PropTypes.string,
    linkBoxClassName: PropTypes.string,
    underline: PropTypes.oneOf(['none', 'hover', 'always']),
    text: PropTypes.string,
    textClassName: PropTypes.string,
    children: PropTypes.node,
};
LinkBoxWrapper.defaultProps = {
    href: undefined,
    linkBoxClassName: undefined,
    underline: 'none',
    text: undefined,
    textClassName: undefined,
    children: undefined,
};
export default LinkBoxWrapper;
