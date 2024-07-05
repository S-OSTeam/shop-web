import { selectorFamily } from 'recoil';
import { useMediaQuery } from '@mui/material';

const mobileCheckSelector = selectorFamily<boolean, number>({
    // selectorFamily key
    key: 'mobileCheckSelector',
    // get (param : 해당 인자 보다 작을경우 모바일로)
    get: (breakpointWidth)=> () => {
        return (useMediaQuery(`max-width: ${breakpointWidth}px`));
    },
})
export default mobileCheckSelector;