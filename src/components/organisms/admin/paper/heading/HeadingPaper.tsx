import React from 'react';
import { Paper } from '@mui/material';
import { Heading, HeadingProps } from '@molecules/admin/layout/heading/Heading';
import clsN from 'classnames';
import styles from './styles/HeadingPaper.module.scss';

interface HeadingPaperProps {
    title: string;
    headingRootClsN?: string;
    children?: React.ReactNode;
    headingProps?: Partial<HeadingProps>;
}

export const HeadingPaper = ({ ...props }: HeadingPaperProps) => {
    /*
     * Partial :
     * ...props.headingProps || {} 스프레드 연산자를 통한 Heading 컴포넌트에 속성들을 전달함
            위 props.headingProps 속성중 undefined 라면 빈 객체 {} 를 반환한다
     * */

    return (
        <Paper className={clsN(styles.paper)}>
            <Heading
                className={clsN(props.headingRootClsN, styles.heading)}
                heading={props.title}
                {...(props.headingProps || {})}
            />
            {props.children && props.children}
        </Paper>
    );
};
HeadingPaper.defaultProps = {
    headingRootClsN: styles.heading,
    children: undefined,
    /* headingProps 의 경우 이미 해당 컴포넌트의 속성체크를 함 */
};
