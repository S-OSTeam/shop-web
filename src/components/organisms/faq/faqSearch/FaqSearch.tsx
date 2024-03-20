/* eslint-disable */
import React from 'react';
import { Box } from '@mui/material';
// search 이걸 autocomplete 로 바꾸기
import SearchBarAuto from '@molecules/searchBarAuto/SearchBarAuto';
import searchItemAtom from '@recoil/atoms/cs/searchItemAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import clsN from 'classnames';
import styles from './styles/FaqSearch.module.scss';
import Swiper from '@molecules/faq/swiper/Swiper';
import { itemResponse, itemResponseITF } from '@util/test/data/faq/swiper/itemResponse';
import { FreeMode } from 'swiper/modules';
import {Announcement, LocalShipping, Restore, CurrencyExchange, Person } from '@mui/icons-material';
import Text from '@atoms/text/Text';

export interface FaqOptions {
    id: number;
    question: string;
    answer: string;
}

interface FaqSearchProps {
    className?: string;
    wrapperClsN?: string;
    inputClsN?: string;
    iconClsN?: string;
    placeholder?: string;
    onInput?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    // 템플릿으로 부터 데이터 가공받기
    optionData: FaqOptions[];
    // 부모 함수
    parentCall: (val: boolean) => void;
}

const FaqSearch = (
    {
        className,
        wrapperClsN,
        inputClsN,
        iconClsN,
        placeholder,
        onInput,
        optionData,
        parentCall,
    }: FaqSearchProps,
) => {

    // 검색 상태
    const [isEnter, setIsEnter] = React.useState<boolean>(false);

    // 아톰 상태
    const searchResult = useRecoilValue(searchItemAtom);

    // 검색기능 구현
    // 그래프 큐엘로 데이터(페이지 로드할때 모두 받아올지 아니면 미리 받아올지)를 임시로 변수에 저장
    // input 이벤트가 발생할 경우...
    // 임시변수에 필터를 거쳐 일치하는 데이터를 먼저 처리
    // 처리한 데이터를 검색창 형제영역에 나열하기
    // N건의 '키워드' 관련 FAQ 를 찾았어요
    // 검색한 특정 키워드 폰트 색상 바꾸기

    // faq 질의응답 관련 데이터 (그래프 큐엘 받는다 가정)
    // 자식이 부모의 상태가 바뀜을 알리기 위해
    const handleCallback = () => {
        setIsEnter(true);
        parentCall(true);
    };

    // 페이지 렌더시 임시데이터 들을 정리해서 자식모듈에게 옵션에 맞게 전달
    // 키워드와 일치하는 데이터 찾음 이걸 활용해 형제요소가 렌더하기
    const callSearchResult = () => {
        const items = searchResult.map((item) => {
            const { id, question, answer } = item;
            return (`id: ${id} question ${question} answer: ${answer}`);
        });
        console.log(`searchResult?? :  ${searchResult}`);
        return items;
    };
    const renderTest = callSearchResult();

    // 아이템 속성마다 아이콘을 선택해서 반환
    const iconThrower = (name: string) => {
        switch (name){
            case 'announce': return <Announcement/>;
            case 'delivery': return <LocalShipping/>;
            case 'return': return <Restore/>;
            case 'refund': return <CurrencyExchange />;
            case 'account': return <Person/>;
        }
    }

    // useEffect 로 입력이 참이면 함수 호출하고 다시 펄스로
    React.useEffect(() => {
        setIsEnter(false);
    }, [isEnter]);

    return (
        <Box
            component='section'
            className={clsN(className, styles.section)}
        >
            <SearchBarAuto
                options={optionData}
                className={clsN(styles['search-bar'])}
                inputClsN={clsN(styles['search-bar__input'])}
                iconClsN={clsN(styles['search-bar__icon'])}
                placeholder='궁금한 내용을 입력해 주세요'
            />
            <Swiper
                parentClsN={clsN(styles[''])}
                className={clsN(styles['swiper-container'])}
                wrapperSlideClsN={clsN(styles['swiper__wrapper'])}
                slideClsN={clsN(styles['swiper__wrapper__slide'])}
                modules={[FreeMode]}
                items={itemResponse}
                spaceBetween={8}
                slidesPerView={2}
                renderSlide={(item: itemResponseITF, index: number) => (
                    <div className={clsN(styles['slide-container'])}>
                        {/*<h1>{`${item.publicId} ${item.categoryPublicId} ${item.title} ${item.categoryType} ${item.imageUrls} ${item.alt}`}</h1>*/}
                        <div className={clsN(styles['slide-container__icon'])}>
                            {iconThrower(item.categoryType)}
                        </div>
                        <Text text={item.title} className={styles['slide-container__textfield']} />
                    </div>
                )}
            />
        </Box>
    );
};

export default FaqSearch;