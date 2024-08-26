import { useEffect, useState } from 'react';

export const useDebounce = (value: string, delay: number) => {
    /* 상태 */
    const [debouncedVal, setDebouncedVal] = useState(value);
    /* 상태변경 체크 */
    useEffect(() => {
        // setTimeout 타이머를 활용 (param1 : 로직, param2 : 딜레이 시간)
        const timer = setTimeout(() => {
            // 상태값 변경하고
            setDebouncedVal(value);
            // delay 만큼 지연시킴
        }, delay);
        return () => {
            // 타이머 사용 후 메모리 누수 방지를 위해 삭제
            // 왜? 여러 버튼 스패밍이 일어날때 상태변화(1), 상태변화(2), 상태변화(3)... 로 인해 상태값 변경 이벤트 가 겹치기 때문, 즉 최근에 입력한 값만 상태변화 이벤트를 실행하고 그 이후에 입력은 clearTimeout을 통해 사라짐
            clearTimeout(timer);
        };
        // 의존성 : 외부 입력... value 마운트 될때마다 useEffect 실행
    }, [value]);
    return debouncedVal;
};
