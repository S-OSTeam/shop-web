import { useState, useCallback, ChangeEvent } from 'react';

export const useSearchChange = (initVal: string = '') => {
    /* 상태 */
    const [searchVal, setSearchVal] = useState(initVal);
    /* 함수 */
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setSearchVal(e.target.value), []);
    // 리셋
    const resetSearch = useCallback(() => setSearchVal(''), []);
    return { searchVal, handleChange, resetSearch };
};
