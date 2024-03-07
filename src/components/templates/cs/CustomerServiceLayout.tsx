import React from 'react';
import { ItemNavCsResponse } from '@util/test/data/itemNavCsResponse';
import Headline from '@organisms/headline/Headline';
import { Box } from '@mui/material';
import SubNav, { SlideItemProps } from '@organisms/subNav/SubNav';
import clsN from 'classnames';
import styles from './styles/CustomerServiceLayout.module.scss';


const CustomerServiceLayout = () => {
    // 그래프 큐엘을 통해 데이터를 받는다 가정
    const subNavData: SlideItemProps[] = ItemNavCsResponse.map(item => ({
        title: item.title,
        url: item.url,
    }));

    return (
        <Box component='section' className={`${styles['section-cs']}`}>
            <Headline
                wrapper={clsN(styles.article)}
                headline01={{ text: 'LOGO PLACE', classname: clsN(styles['article__headline-01']) }}
                subtitle01={{ text: '무엇을 도와드릴까요?', classname: clsN(styles['article__subtitle-01']) }} />

            <SubNav
                items={subNavData}
            />
        </Box>
    );
};
export default CustomerServiceLayout;