import React from 'react';
import { Stack } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/collapsedListResult.module.scss';

// 콜랩스 매니저 인터페이스
interface CollapsedManagerProps {
    // root 크래스명
    className?: string;
}

const CollapsedListResult = ({ className }: CollapsedManagerProps) => {
    return (
        <Stack direction="column" className={clsN(className, styles.root)}>
            {/* 총 몇 건이 조회됬는지 알려주는 count 영역 */}
            {/* 콜랩스아이템 리스트 들이 렌더가 되는 영역 */}
            {/* 선택된  */}
        </Stack>
    );
};
