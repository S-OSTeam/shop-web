import React from 'react';
import { Stack } from '@mui/material';
import { Heading } from '@molecules/admin/layout/heading/Heading';
import { FilterSearchRevising } from '@organisms/admin/filteredSearch/FilterSearchRevising';
import { FilteredList } from '@organisms/admin/filteredList/FilteredList';
import clsN from 'classnames';
import styles from './styles/NoticeRevising.module.scss';

export const NoticeRevising = () => {
    /* TSX 모듈 */
    /** 제목 헤드라인 */
    const Headline = (
        <Heading
            heading="공지사항 관리"
            subtitle1="고객분들께 중요한 소식을 전해주세요"
            headingClsN={styles.headline}
            subtitle1ClsN={styles.headline__subline}
        />
    );

    /* 렌더 */
    return (
        <Stack className={clsN(styles['notices-t'])}>
            {Headline}
            <FilterSearchRevising />
            <FilteredList filteredTitle="공지사항" />
        </Stack>
    );
};
