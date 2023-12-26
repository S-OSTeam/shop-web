import React from 'react';
import PropTypes from 'prop-types';
import { LinkProps } from '@mui/material';
import LinkTag from '../../atoms/link/LinkTag';
import Text from '../../atoms/text/Text';

interface myLinkWrapperProps {
    /* LinkTag */
    href?: string; // link 되는 url 혹은 # 아이디
    linkBoxClassName?: string; // 링크 박스의 클래스 네임
    underline?: LinkProps['underline']; // 링크 박스 underline 스타일
    /* Text */
    text?: string; // Text 내부 내용
    textClassName?: string; // Text 의 클래스 네임
}
const LinkBox = ({ ...props }: myLinkWrapperProps) => {
    // // 접두사 클래스
    // const prefixCls = 'cp-li-wrapper';
    //
    // const getClassNames = ({})

    const { href, linkBoxClassName, underline, text, textClassName } = props;
    return (
        <LinkTag href={href} className={linkBoxClassName} underline={underline} >
            <Text text={text} className={textClassName} />
        </LinkTag>
    );
};

LinkBox.prototype = {
    href: PropTypes.string,
    linkBoxClassName: PropTypes.string,
    underline: PropTypes.oneOf(['none', 'hover', 'always']),
    text: PropTypes.string,
    textClassName: PropTypes.string,
};
LinkBox.defaultProps = {
    href: undefined,
    linkBoxClassName: undefined,
    underline: 'none',
    text: undefined,
    textClassName: undefined,
};
export default LinkBox;
