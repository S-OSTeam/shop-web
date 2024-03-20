/* eslint-disable */
import React from 'react';
import List from '@components/layout/list/List';
import searchItemAtom from '@recoil/atoms/cs/searchItemAtom';
import { useRecoilValue } from 'recoil';
import CollapsedList from '@molecules/collapsedList/CollapsedList';
import styles from './styles/FaqQue.module.scss';
import clsN from 'classnames';

import {ReactComponent as QueIcon} from '@asset/image/icons/faq/Que.svg';

// 검색한 결과를 보여주는 유기체 구간

interface FaqQueProps {
    // 부모에게 전달받을 신호
    isAllowed: boolean;
    parentCall: (val:boolean)=>void;
}

const FaqQue = (
    {
        isAllowed,
        parentCall
    }: FaqQueProps) => {
    /*
    * 아톰이 바뀌므로 그냥 map 으로 렌더 처리하기
    * 처음 렌더시 useEffect로 마운트 해서 데이터 파일들 모두 넣기
    * */

    // 아톰 해당 값이 바뀐게 submit 을 한게 의미하므로 useEffect 로 체크
    const searchResult = useRecoilValue(searchItemAtom);

    // 상태
    const [isRender, setIsRender] = React.useState<boolean>(false);

    // collapse 토글 상태 관리
    const [collRow, setCollRow] = React.useState<boolean[]>([]);

    // collapse 클릭 이벤트
    const collapseClick = (idx: number) => {
        // 불변성 유지를 위한 원본 복사
        const newCollState = [...collRow];
        // 해당 인덱스 반전 처리
        newCollState[idx] = !newCollState[idx];
        // 상태 업데이트
        setCollRow(newCollState);
    }

    // 랜더 함수
    const resultTemp = searchResult.map((item, idx) => {
        // 속성
        const { id, question, answer } = item;
        // 상태
        const collState = collRow[idx];
        // 이벤트
        const onClick = () => {
            collapseClick(idx);
        }

        return (
            <CollapsedList
                primary={question}
                innerChildren={answer}
                isOpen={collState}
                onClick={onClick}
                className={clsN(styles['list'])}
                listBtnClsN={clsN(styles['list-btn'])}
                listIconClsN={clsN(styles['list-btn__icon'])}
                primaryClsN={clsN(styles['list-btn__content'])}
                collClsN={clsN(styles['list__collapse'])}
                collListClsN={clsN(styles['list__collapse__list'])}
                listIcon={<QueIcon/>}
            />
        );
    });

    // 처음 받는 값이 참일경우 특정 이벤트 실행하고 다시 펄스로 처리하기
    const ListCall = () => {
        if(isAllowed){
            setIsRender(true);
            parentCall(isRender);
        }
    }
    // coll 상태 초기화 이벤트
    // 아톰이 바뀌거나 마운트시
    React.useEffect(()=>{
        const tempState = collRow.map(()=>false);
        setCollRow(tempState);
    },[])

    // useEffect 상태가 바뀔 때
    React.useEffect(() => {
        // 랜더 함수 실행

        // 상태 다시 false 로
        setIsRender(false);
    }, [isRender]);

    return (
        <List className={clsN(styles['list'])}>
            {resultTemp}
        </List>
    );
};

export default FaqQue;