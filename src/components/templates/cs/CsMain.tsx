/* eslint-disable */
import React from 'react';
import { ItemNavCsResponse } from '@util/test/data/itemNavCsResponse';
import Headline from '@organisms/headline/Headline';
import { Box, Divider } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/CsMain.module.scss';
import Tab from '@atoms/tab/Tab';
import TabPanel from '@components/layout/tabPanel/TabPanel';
import Tabs from '@molecules/tabs/Tabs';
import FaqSearch from '@organisms/faq/faqSearch/FaqSearch';
import { CsSuggest } from '@util/test/data/CustomerServiceSuggestResponse';
import FaqQue from '@organisms/faq/faqQue/FaqQue';
import Button from '@atoms/button/Button';
import { category } from '@util/test/data/CategoryResponse';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';

export interface FaqOptions {
    id: number;
    question: string;
    answer: string;
}

interface CsPageProps {
    tabList: Array<string>;
}

const CsMain = () => {
    // 상태

    // 네비 상태
    const [tabVal, setTabVal] = React.useState(0);

    // 검색창 엔터 상태
    const [isEnter, setIsEnter] = React.useState<boolean>(false);

    /** 그래프 큐엘을 통해 데이터를 받는다 가정 */
    // 문의 관련 내용들 카테고리별 객체 배열로 정리되어 있음
    // CsSuggest
    // 미디어 쿼리 훅 활용
    /**
     * 다른 돔사이즈 훅과 호출이 겹쳐서 이벤트가 서로 엇갈림
     */

    /** 탭 활성/비활성 클래스 상태 변경 */
    const parentCall = (boolArr: boolean) => {
        setIsEnter(boolArr);

    };

    const handleTabClick = (newVal: number) => {
        // 부모 상태 업데이트
        setTabVal(newVal);
    };

    // faq 에 전달할 데이터 정리하기
    const optionProvider: FaqOptions[] = [];
    //
    CsSuggest.forEach((section) => {
        // 배열의 인덱스인 첫번째 뎁스를 Object.value 활용하여 객체들을 배열로 처리
        // 객체를 배열로
        Object.values(section).forEach((category) => {
            // announce... 레벨의 속성에 접근함,
            category.forEach((item) => {
                // 실질적인 값들 접속 가능
                const { id, question, answer } = item;
                optionProvider.push({ id, question, answer });
            });
        });
    });

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
            <Tabs
                value={tabVal}
                ariaLabel='simple-tab'
                className={clsN(styles['sub-nav'])}
                variant='scrollable'
                allowScrollButtonsMobile
                scrollButtons = 'auto'
            >
                {TabRender}
            </Tabs>
            <TabPanel value={tabVal} index={0} className={styles['panel']}>
                <FaqSearch
                    optionData={optionProvider}
                    parentCall={parentCall}
                />
                <div className={clsN(styles['divider-wrapper'])}>
                    <Divider className={clsN(styles['divider-wrapper__divider'])} variant='middle' />
                </div>
                <FaqQue
                    className={clsN(styles['que-block'])}
                    wrapperClsN={clsN(styles['que-block__list'])}
                    itemClsN={clsN(styles['que-block__list__collapse'])}
                    expendClsN={clsN(styles['que-block__expend'])}
                    buttonClsN={clsN(styles['que-block__expend__button'])}
                    isAllowed={isEnter}
                    parentCall={parentCall}
                    optionData={optionProvider}
                />
            </TabPanel>
            <TabPanel value={tabVal} index={1} className={styles['panel']}>content2</TabPanel>
            <TabPanel value={tabVal} index={2} className={styles['panel']}>content3</TabPanel>
            <TabPanel value={tabVal} index={3} className={styles['panel']}>content4</TabPanel>

        </Box>
    );
};
export default CsMain;

