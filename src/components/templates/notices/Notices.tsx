import React from 'react';
import { Heading } from '@molecules/admin/layout/heading/Heading';
import { Stack } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/Notices.module.scss';

/*
interface NoticesTemplateProps {

}
*/

export const NoticesTemplate = () => {
    /* JSX 모듈 */
    const headline = <Heading heading="공지사항 관리" subtitle1="고객들께 중요한 소식을 전해주세요" />;

    return <Stack className={clsN(styles['notices-t'])}>{headline}</Stack>;
};
