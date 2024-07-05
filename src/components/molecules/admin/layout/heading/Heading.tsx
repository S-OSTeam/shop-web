import React from 'react';
import { Stack } from '@mui/material';
import Text from '@atoms/text/Text';
import clsN from 'classnames';
import styles from './styles/Heading.module.scss';
// 컴포넌트 인터페이스
interface HeadingProps{
    // root 클래스명(stack)
    className?: string;
    // 제목
    heading: string;
    // 제목 클래스명
    headingClsN?: string;
    // 부제목
    subtitle1?: string;
    // 부제목 클래스명
    subtitle1ClsN?: string;
    // 부제목 2
    subtitle2?: string;
    // 부제목 2 클래스명
    subtitle2clsN?: string;
}
export const Heading = (
    {
        className,
        heading,
        subtitle1,
        subtitle2,
        headingClsN,
        subtitle1ClsN,
        subtitle2clsN
    }:HeadingProps
) => {

    /* 상태 */

    /* JSX 모듈 */
    // 제목
    const headingModule = (
        <Text text={heading} variant='h1' className={clsN(styles.stack__heading, headingClsN)}/>
    )
    // 부제목

    const subTitle1Module = subtitle1&&
        (<Text text={subtitle1} variant='subtitle1' className={clsN(styles.stack__subtitle1, subtitle1ClsN)} />);

    // 부제목2 subtitle2?: string 이므로 값이 있는 상태를 체크해서 컴포넌트 선언
    const subTitle2Module = subtitle2 && (
        <Text text={subtitle2} variant='subtitle2' className={clsN(styles.stack__subtitle2, subtitle2clsN)}/>
    )
    /* 함수 */

    return(
        <Stack className={clsN(styles.stack, className)} flexGrow={4}>
            {headingModule}
            {subTitle1Module}
            {subTitle2Module}
        </Stack>
    );
}
Heading.defaultProps = {
    className: styles.stack,
    subtitle1: undefined,
    subtitle2: undefined,
    headingClsN: styles.stack__heading,
    subtitle1ClsN: styles.stack__subtitle1,
    subtitle2clsN: styles.stack__subtitle2
}