import React from 'react';
import { Box } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/QnaAdmin.module.scss';
import QnaData from '#util/Storage/QnaData';
import CurrCont from '#organisms/faq/admin/AdminQna/currCont/CurrCont';
import { FeaturesCont } from '#organisms/faq/admin/AdminQna/featuresCont/FeaturesCont';

export const QnaAdminTemplate = () => {

// 제너릭 활용해보기
    return (
        <Box component='main' className={clsN(`${styles.main}`)}>
            <Box component='section' className={clsN(`${styles.sectionFirst}`)}>
                <CurrCont props={QnaData} />
                <FeaturesCont newStatus='1' overAllStatus='1' anonStatus='1' pendingStatus='1' featOrgModified={`${styles.featModified}`}
                />
            </Box>
            <Box component='section' className={clsN(``)}>
                empty
            </Box>
        </Box>
    );
};