/* eslint-disable */
import React from 'react';
import List from '@components/layout/list/List';
import searchItemAtom from '@recoil/atoms/cs/searchItemAtom';
import { useRecoilValue } from 'recoil';
import CollapsedList from '@molecules/collapsedList/CollapsedList';

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

    // 랜더 함수
    const resultTemp = searchResult.map((item, idx) => {
        // 아톰 배열 길이
        const arrLength = searchResult.length;

        const { id, question, answer } = item;
        // 미리 배열로 상태관리하기
        const innerState: boolean[] = new Array(arrLength).fill(false);
        // 콜랩스 이벤트
        const inChangeEvent = (arrIdx: number) => {
            innerState[arrIdx] = !innerState[arrIdx];
        };
        return (
            <CollapsedList primary={question} innerChildren={answer} isOpen={innerState[idx]} onClick={() => {
                inChangeEvent(idx);
            }} />
        );
    });

    // 처음 받는 값이 참일경우 특정 이벤트 실행하고 다시 펄스로 처리하기
    const ListCall = () => {
        if(isAllowed){
            setIsRender(true);
            parentCall(isRender);
        }
    }


    // useEffect 상태가 바뀔 때
    React.useEffect(() => {
        // 랜더 함수 실행

        // 상태 다시 false 로
        setIsRender(false);
    }, [isRender]);

    return (
        <List>
            {resultTemp}
        </List>
    );
};

export default FaqQue;