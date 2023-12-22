/* eslint-disable */
import React from 'react';
import { Box } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/FeaturesCont.module.scss';
import TextGroup from '#molecules/textGroup/TextGroup';

// 프로바이더
interface myProv {
    totalNum?: string;
}

interface myPropsStatus {
    newStatus?: string;
    overAllStatus?: string;
    anonStatus?: string;
    pendingStatus?: string;
    featOrgModified?: string;
}

export const FeaturesCont = (
    {
        newStatus,
        overAllStatus,
        anonStatus,
        pendingStatus,
        featOrgModified,
    }: myPropsStatus) => {
    // status
    const [current, setCurrent] = React.useState<myProv[]>([
        { totalNum: newStatus },
        { totalNum: overAllStatus },
        { totalNum: anonStatus },
        { totalNum: pendingStatus },
    ]);
    const myTitles: string[] = ['신규 문의', '전체 문의', '익명 문의', '문의 보류'];
    // dataProvider
    const makeCells = current.map((items, idx) => {
        return (
            <TextGroup
                wrapperClsN={clsN(`${styles.textGroup}`)}
                textList={[
                    {
                        text: myTitles[idx],
                        clsName: clsN(`${styles.title}`),
                    },
                    {
                        // css after 로 '건' 합치기
                        text: items.totalNum + '건',
                        clsName: clsN(`${styles.totalTitle}`),
                    },
                ]}/>
        )
    })


    // async 사용해서 데이터 들어오면 SetCurrent 처리하기
    // 아니면 useEffect로

    return (
        <Box
            component='article'
            className={clsN(featOrgModified, `${styles.featOrg}`)}
        >
            <Box
                component='section'
                className={clsN(`${styles.sectionArea}`)}
            >
                {makeCells}
            </Box>
        </Box>
    );
};