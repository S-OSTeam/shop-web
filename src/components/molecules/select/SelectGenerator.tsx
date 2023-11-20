/* eslint-disable */
import React, { useState } from 'react';
import CustomFormControl from '../formControl/FormControl';
import PropTypes from 'prop-types';
import Selector from '../../atoms/select/SelectCustom';
import Option from '../../atoms/option/Option';
import Text from '../../atoms/text/Text';
import { insertSelectTypes } from '../../organisms/qna/tableRemote/TableRemote';
import classNames from 'classnames';

// import { InputProps } from '@mui/material';

interface myPropsInterface {
    selectClassName?: string;
    className?: string;
    // 폼 영역 라벨 제목
    labelText?: string;
    // 셀렉트 박스의 라벨 제목 간략하게
    selectLabel?: string;
    helperLabel?: string;
    selectId?: string;
    sampleOptionText?: string;
    getItems: insertSelectTypes[];
}

const SelectGenerator = ({ ...props }: myPropsInterface) => {
    const {
        selectLabel,
    } = props;
    const tempContainer = props.getItems;
    // 속성 받아서 state 로 저장
    const [currentVal, setCurrentVal] = useState({
        selectVar: '0'
    });

    const handleOnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentVal(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }));
    };

    return (
        // <InfLabel id={helperLabel}>{labelText}</InfLabel>
        <CustomFormControl
            className={classNames(props.className)}
            variant='outlined'
        >
            <Selector
                className={classNames(props.selectClassName)}
                defaultValue={1}
                value={currentVal.selectVar}
                onChange={handleOnClick}
                inputProps={
                {
                    name: 'selectVar',
                    id: 'uncontrolled-native',
                    className: 'select-class-test'
                }}
                required
            >
                {
                    tempContainer.map(({title, value})=>{
                        return(
                            <Option key={title} value={value}>
                                <Text text={title} className='select-option'/>
                            </Option>
                        )
                    })
                }
            </Selector>
        </CustomFormControl>
    );
};

SelectGenerator.prototype = {
    labelText: PropTypes.string,
    helperLabel: PropTypes.string,
    selectId: PropTypes.string,
};
SelectGenerator.defaultProps = {
    labelText: '',
    helperLabel: '',
    selectId: '',
};

export default SelectGenerator;
