/* eslint-disable */
import React from 'react';
import { ItemNavCsResponse } from '@util/test/data/itemNavCsResponse';
import Headline from '@organisms/headline/Headline';
import { Box } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/CustomerServiceLayout.module.scss';
import Tab from '@atoms/tab/Tab';
import TabPanel from '@components/layout/tabPanel/TabPanel';
import Tabs from '@molecules/tabs/Tabs';
import FaqSearch, { FaqOptions } from '@organisms/faq/faqSearch/FaqSearch';
import { CsSuggest } from '@util/test/data/CustomerServiceSuggestResponse';
import FaqQue from '@organisms/faq/faqQue/FaqQue';

interface CsPageProps {
    tabList: Array<string>;
}

const CustomerServiceLayout = () => {
    // 상태

    // 네비 상태
    const [tabVal, setTabVal] = React.useState(0);

    // 검색창 엔터 상태
    const [isEnter, setIsEnter] = React.useState<boolean>(false);


    /** 그래프 큐엘을 통해 데이터를 받는다 가정 */
    // 문의 관련 내용들 카테고리별 객체 배열로 정리되어 있음
    // CsSuggest

    /** 탭 활성/비활성 클래스 상태 변경 */
    const parentCall = (boolArr: boolean) => {
        setIsEnter(boolArr);
    }

    const handleTabClick = (newVal: number) => {
        // 부모 상태 업데이트
        setTabVal(newVal);
    };

    // fc for tab components
    const allyProps = (index: number) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    };

    // faq 에 전달할 데이터 정리하기
    const optionProvider:FaqOptions[] = [];
    //
    CsSuggest.forEach(section=> {
        // 배열의 인덱스인 첫번째 뎁스를 Object.value 활용하여 객체들을 배열로 처리
        // 객체를 배열로
        Object.values(section).forEach(category => {
            // announce... 레벨의 속성에 접근함,
            category.forEach(item => {
                // 실질적인 값들 접속 가능
                const {id, question, answer} = item;
                optionProvider.push({id, question, answer});
            });
        })

    })

    const TabRender = ItemNavCsResponse.map((item, idx) => {
        const tabClsN = styles['sub-nav__tab'];
        const tabActive = styles['sub-nav__tab-active'];
        return (
            <Tab
                className={clsN(tabClsN, { [tabActive]: tabVal === idx})}
                value={idx}
                label={item}
                onTabClick={handleTabClick}
            />
        );
    });
    return (
        /* intro */
        <Box component='section' className={`${styles['section-cs']}`}>
            <Headline
                wrapper={clsN(styles.article)}
                headline01={{ text: 'LOGO PLACE', classname: clsN(styles['article__headline-01']) }}
                subtitle01={{ text: '무엇을 도와드릴까요?', classname: clsN(styles['article__subtitle-01']) }}
            />
            <Tabs value={tabVal} ariaLabel='simple-tab' className={clsN(styles['sub-nav'])}>
                {TabRender}
            </Tabs>
            <TabPanel value={tabVal} index={0} className={styles['panel']}>
                <FaqSearch
                    optionData={optionProvider}
                    parentCall={parentCall}
                />
                {/* 검색 결과 */}
                <h1>자주 묻는 질문들</h1>
                <h4>ALL</h4>
                <FaqQue isAllowed={isEnter} parentCall={parentCall} />
            </TabPanel>
            <TabPanel value={tabVal} index={1} className={styles['panel']}>content2</TabPanel>
            <TabPanel value={tabVal} index={2} className={styles['panel']}>content3</TabPanel>
            <TabPanel value={tabVal} index={3} className={styles['panel']}>content4</TabPanel>

        </Box>
    );
};
export default CustomerServiceLayout;