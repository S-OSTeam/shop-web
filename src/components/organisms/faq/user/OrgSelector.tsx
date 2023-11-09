import React, { useState } from 'react';
import { FormControl, MenuItem } from '@mui/material';
import { NatiSelector } from '../../../molecules/FAQ_0_1/selector/Selector';
import Text from '../../../atoms/contents/Text';
// import Label from '../../../molecules/label/Label';
// import { Option } from '../../../molecules/FAQ_0_1/option/Option';
// import OutLinedIpt from '../../../atoms/outLinedInput/OutLinedInput';


// 문의 제목 목록 불러와서 opt 에 넣은 후 map 으로 렌더 처리하기.
// eslint-disable-next-line
const questionTypes = [
    {
        value: 1,
        title: '문의예시1 > ..의 문의 관련 제목',
    },
    {
        value: 2,
        title: '문의예시2 > ..의 문의 관련 제목',
    },
    {
        value: 3,
        title: '문의예시3 > ..의 문의 관련 제목',
    },
    {
        value: 4,
        title: '문의예시4 > ..의 문의 관련 제목',
    },
    {
        value: 5,
        title: '문의예시5 > ..의 문의 관련 제목',
    },
];

// /* 상태 */
// const [thisOpt, setThisOpt] = useState<string[]>([]);
//
// /* 메소드 */
// // 옵션 클릭 이벤트 (셀렉트 상태 변경)
// const handleOnChange = (e: SelectChangeEvent<typeof thisOpt>) => {
//     // 비구조화 할당 추출
//     const { target: { value } } = e;
//     setThisOpt(
//         //
//         typeof value === 'string' ? value.split(',') : value,
//     );
// };
export const OrgSelector = () => {
    const [currentVal, setCurrentVal] = useState({
        question: ''
    })
    const contain = questionTypes;
    const handleOnClick = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setCurrentVal(oldVal => ({
            ...oldVal,
            [e.target.name]: e.target.value
        }));
    };
    return (
        <FormControl
            fullWidth
            variant='outlined'
            className='faq-fc-select-wrapper'
        >
            <NatiSelector
                label={
                    <Text text='문의유형' className='label-title' />
                }
                defaultValue={1}
                value={currentVal.question}
                onChange={handleOnClick}
                inputProps={{ name: 'question', id: 'uncontrolled-native', }}
                required
            >
                {
                    contain.map(({title, value})=>{
                        return(
                            <MenuItem key={title}
                                value={value}>{title}</MenuItem>
                        )
                    })
                }
            </NatiSelector>
        </FormControl>
    );
};