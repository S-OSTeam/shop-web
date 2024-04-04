import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import clsN from 'classnames';
import Text from '@atoms/text/Text';
import styles from './styles/Headline.module.scss';

// 렌더에 사용될 헤딩 기본 인터페이스
interface defaultHeading {
    text: string;
    classname: string;
}

// 분야별 헤딩 인터페이스
interface headlineProps {
    wrapper?: string;
    headline01?: defaultHeading;
    headline02?: defaultHeading;
    subtitle01?: defaultHeading;
    subtitle02?: defaultHeading;
}

const Headline = (
    {
        wrapper,
        headline01,
        headline02,
        subtitle01,
        subtitle02,
    }: headlineProps) => {

    // 배열 타입
    const idxVar: ('h1' | 'h2' | 'subtitle1' | 'subtitle2')[] = ['h1', 'h2', 'subtitle1', 'subtitle2'];
    // props 를 무작정 받아서 사용하는건 좋지 않음
    const container = [headline01, headline02, subtitle01, subtitle02];
    // 타이포그래피 랜딩
    const headingRender = container.map((item, idx) => {
        // 배열 인덱스 순서대로 variant 타입 받기
        const variant = idxVar[idx];
        // nullish coalescing 연산자 활용해 반환 값이 항상 <string> 으로 바꾸도록 하기
        const title = item?.text ?? '';
        const titleClsN = item?.classname ?? '';
        // 옵셔널 체이닝 연산으로 프로퍼티가 존재하지 않을경우 undefined 반환하므로 안전함
        return (item?.text &&
            <Text text={title} className={clsN(titleClsN, `${styles.headingDefault}`)} variant={variant} />);
    });
    return (
        <Box component='article' className={clsN(wrapper,`${styles.headingArticle}`)}>
            {headingRender}
        </Box>
    );
};
Headline.propTypes = {
    wrapper: PropTypes.string,
    headline01: PropTypes.shape({
        text: PropTypes.string,
        classname: PropTypes.string,
    }),
    headline02: PropTypes.shape({
        text: PropTypes.string,
        classname: PropTypes.string,
    }),
    subtitle01: PropTypes.shape({
        text: PropTypes.string,
        classname: PropTypes.string,
    }),
    subtitle02: PropTypes.shape({
        text: PropTypes.string,
        classname: PropTypes.string
    }),
}
Headline.defaultProps = {
    wrapper: `${styles.headingArticle}`,
    headline01: { text: undefined, classname: `${styles.headingDefault}` },
    headline02: { text: undefined, classname: `${styles.headingDefault}` },
    subtitle01: { text: undefined, classname: `${styles.headingDefault}` },
    subtitle02: { text: undefined, classname: `${styles.headingDefault}` }
}

export default Headline;