import React from 'react';
import LinkBox from '../../atoms/linkBox/LinkBox';
import Text from '../../atoms/contents/Text';
import { LinkProps } from '@mui/material';
import PropTypes from 'prop-types';

interface myLinkWrapperProps {
    /* LinkBox */
    href?: string; // link 되는 url 혹은 # 아이디
    linkBoxClassName?: string; // 링크 박스의 클래스 네임
    underline?: LinkProps['underline']; // 링크 박스 underline 스타일
    /* Text */
    text?: string; // Text 내부 내용
    textClassName?: string; // Text 의 클래스 네임
}
const LinkBoxWrapper = ({ ...props }: myLinkWrapperProps) => {
    const { href, linkBoxClassName, underline, text, textClassName } = props;
    return (
        <LinkBox href={href}>
            className={linkBoxClassName}
            underline={underline}
            <Text text={text} className={textClassName} />
        </LinkBox>
    );
};

LinkBoxWrapper.prototype = {
    href: PropTypes.string,
    linkBoxClassName: PropTypes.string,
    underline: PropTypes.oneOf(['none', 'hover', 'always']),
    text: PropTypes.string,
    textClassName: PropTypes.string,
};
LinkBoxWrapper.defaultProps = {
    href: undefined,
    linkBoxClassName: undefined,
    underline: 'none',
    text: undefined,
    textClassName: undefined,
};
export default LinkBoxWrapper;
