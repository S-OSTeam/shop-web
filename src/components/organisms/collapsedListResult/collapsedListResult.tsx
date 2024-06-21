/* eslint-disable */
import React from 'react';
import { CollapsedTable, CollapsedTableClasses } from '@molecules/collapsedTable/CollapsedTable';
import { Stack } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/collapsedListResult.module.scss';

//

// 콜랩스 매니저 인터페이스
interface CollapsedManagerProps {
    // root 클래스명
    className?: string;
    // classes 요소
    classesList?: CollapsedTableClasses;
}

const CollapsedListResult = ({ ...props }: CollapsedManagerProps) => {
    /* 상태 */
    // 구조분해로 테이블에 사용되는 클래스명들 불러오기
    const { classesList } = props;
    // 부모인 CollapsedTable 컴포넌트가 자식들의 상태 관리하기
    const tableLength = tBodyItems.length;
    // 현재 리스트들의 공개 (on/off) 상태
    const [coll, setColl] = React.useState<boolean[]>(() => Array(tableLength).fill(false));
    /* 함수 */
    /* TSX */
    /* 이벤트 */
    /* 렌더 */
    return (
        <Stack direction="column" className={clsN(className, styles.root)}>
            {/* 총 몇 건이 조회됬는지 알려주는 count 영역 */}

            <CollapsedTable />
            {/* 콜랩스아이템 리스트 들이 렌더가 되는 영역 */}
            {/* 선택된  */}
        </Stack>
    );
};
