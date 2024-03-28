import { selector } from 'recoil';
import searchItemAtom from '@recoil/atoms/cs/searchItemAtom';
import { CsSuggest } from '@util/test/data/CustomerServiceSuggestResponse';

const getResultSelector = selector({
    key:'getResultSelector',
    get: ({get}) => ({keyword}: {keyword: string}) => {
        // 그래프 큐엘로 데이터를 가져온다 가정
        const searchItems = CsSuggest;

        // 키워드에 일치하는 데이터 추출
        //
    },
        // 데이터를 가져왔음
        // 해당 키워드와 일치하는 값과
})