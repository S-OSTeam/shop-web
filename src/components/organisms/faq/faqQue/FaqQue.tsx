/* eslint-disable */
import React from 'react';
import List from '@components/layout/list/List';
import searchItemAtom, { searchItemType } from '@recoil/atoms/cs/searchItemAtom';
import { useRecoilCallback, useRecoilValue, useSetRecoilState } from 'recoil';
import CollapsedListUnUsed from '@molecules/collapsedList_origin/CollapsedListUnUsed';
import styles from './styles/FaqQue.module.scss';
import clsN from 'classnames';

import { ReactComponent as QueIcon } from '@asset/image/icons/faq/Que.svg';
import { Box, Divider } from '@mui/material';
import Button from '@atoms/button/Button';
import Text from '@atoms/text/Text';
import { OptionDataType } from '@molecules/searchBarAuto/SearchBarAuto';
import { CsObject, CsSuggest, FaqItem } from '@util/test/data/CustomerServiceSuggestResponse';
import { FaqOptions } from '@templates/cs/CsMain';
import { category } from '@util/test/data/CategoryResponse';

// 검색한 결과를 보여주는 유기체 구간

interface FaqQueProps {
    className?: string;
    wrapperClsN?: string;
    itemClsN?: string;
    // 버튼확장 박스
    expendClsN?: string;
    // 버튼클래스
    buttonClsN?: string;
    isAllowed: boolean;
    // 부모에게 전달받을 신호
    parentCall: (val: boolean) => void;
    // 받을 데이터
    optionData: FaqOptions[];
}

const FaqQue = ({
    className,
    wrapperClsN,
    itemClsN,
    expendClsN,
    buttonClsN,
    isAllowed,
    parentCall,
    optionData,
}: FaqQueProps) => {
    /*
     * 아톰이 바뀌므로 그냥 map 으로 렌더 처리하기
     * 처음 렌더시 useEffect로 마운트 해서 데이터 파일들 모두 넣기
     * */

    // 아톰 값 수정하기 위해 훅 사용
    const setSearchAtom = useSetRecoilState(searchItemAtom);
    // 리코일 읽기
    const searchResult = useRecoilValue(searchItemAtom);
    // 현재 출력할 리스트 갯수
    const [currentCount, setCurrentCount] = React.useState<number>(5);
    // 확장 버튼 활성화 여부
    const [isMoreExpand, setIsMoreExpand] = React.useState<boolean>(true);

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
    };
    // 공지사항 토글
    const [annRow, setAnnRow] = React.useState<boolean[]>([]);
    const collapseAnnClick = (idx: number) => {
        // 불변성 유지, 원본 복사
        const newCollState = [...annRow];
        // 인덱스 반전처리
        newCollState[idx] = !newCollState[idx];
        // 업데이트
        setAnnRow(newCollState);
    };

    // expendMore 이벤트 처리
    const handleExpend = () => {
        setCurrentCount((prevState) => prevState + 5);
    };
    // 랜더 함수
    const resultTemp = searchResult.slice(0, currentCount).map((item, idx) => {
        /**
         * 보여줄 컨텐츠 갯수 상태 까지 자름
         */
        // 속성
        const { id, question, answer } = item;
        // 상태
        const collState = collRow[idx];
        // 이벤트
        const onClick = () => {
            collapseClick(idx);
        };
        return (
            <CollapsedListUnUsed
                primary={question}
                innerChildren={answer}
                isOpen={collState}
                onClick={onClick}
                className={clsN(itemClsN, styles['list'])}
                listBtnClsN={clsN(styles['list-btn'])}
                listIconClsN={clsN(styles['list-btn__icon'])}
                primaryClsN={clsN(styles['list-btn__content'])}
                collClsN={clsN(styles['list__collapse'])}
                collListClsN={clsN(styles['list__collapse__list'])}
                listIcon={<QueIcon />}
                listItemRootClsN={clsN(styles['list-btn__content__primary'])}
            />
        );
    });

    // 버튼 참 거짓 여부 값 설정
    const checkExpand = searchResult.length > currentCount;

    // coll 상태 초기화 이벤트
    // 아톰이 바뀌거나 마운트시
    React.useEffect(() => {
        setIsMoreExpand(checkExpand);
        const tempState = collRow.map(() => false);
        setCollRow(tempState);
    }, []);
    React.useEffect(() => {
        // 객체 배열의 객체 특정 키값을 제외한 나머지를 가져옴
        // const prevData:CsObject[] = CsSuggest.map(({announce, ...rest})=> {
    }, []);
    // searchResult(아톰) 변환시 CurrentCount 0 초기화
    React.useEffect(() => {
        setCurrentCount(5);
    }, [searchResult]);
    // 렌더할 템플릿을 체크하면서 전역 변수로 값 설정
    React.useEffect(() => {
        setIsMoreExpand(checkExpand);
    }, [resultTemp]);

    return (
        <Box component="div" className={clsN(className, styles['wrapper'])}>
            <Box component="div" className={clsN(styles['wrapper__headline'])}>
                <Text text="자주 묻는 질문들" className={clsN(styles['wrapper__headline__title'])} />
                <Text text="ALL" className={clsN(styles['wrapper__headline__subtitle'])} />
            </Box>
            <List className={clsN(wrapperClsN, styles['list'], styles['list-wrapper'])}>{resultTemp}</List>
            <Box component="div" className={clsN(expendClsN, styles['expend'])}>
                {isMoreExpand && (
                    <Button className={clsN(buttonClsN, styles['expend__button'])} onClick={handleExpend}>
                        더보기
                    </Button>
                )}
            </Box>
        </Box>
    );
};

export default FaqQue;
