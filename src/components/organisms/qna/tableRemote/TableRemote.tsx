/* eslint-disable */
import React, { Fragment } from 'react';
import SelectGenerator from '../../../molecules/select/SelectGenerator';
import { Box, FormGroup, ToggleButton } from '@mui/material';
import Button from '../../../atoms/button/Button';
import Text from '../../../atoms/text/Text';
import classNames from 'classnames';
import FormControlCheckBox from '../../../molecules/formControl/FormControlCheckBox';
import CheckBoxComponent from '../../../atoms/checkBox/CheckBox';

/*
* 셀렉트버튼, 내가 작성한 문의 토글, 문의작성하기버튼
* */
interface myProps {
    options: any[];
}

export type insertSelectTypes = {
    value: number,
    title: string,
}


export const TableRemote = ({ ...props }: myProps) => {
    const { options } = props;
    const container = options.map(
        (value, index): insertSelectTypes => (
            { value: index, title: value }
        ),
    );

    return (
        <Box
            component='nav'
            className={classNames('qna-table-nav')}
        >
            <ul>
                <li>
                    <Button className={classNames('btn-qna type-dark')}>
                        <Text className='btn-context' text='문의하기' />
                    </Button>
                </li>
                <li>
                    <Button className={classNames('btn-qna type-bright')}>
                        <Text className='btn-context' text='내 문의' />
                    </Button>
                </li>
                <li>
                    <FormGroup>
                        <FormControlCheckBox
                            className='checkbox-qna'
                            control={
                                <CheckBoxComponent name='isNotAnon' />
                            }
                            label={ <Text text='익명문의 제외' className='qna-check-label'/> } />
                    </FormGroup>
                </li>
                <li>
                    <SelectGenerator
                        selectClassName='qna-select-input'
                        className='qna-remote-select-wrapper'
                        selectId='selectBox-helper'
                        labelText='문의상태'
                        selectLabel='답변상태'
                        helperLabel='qna-selectBox-helper-label'
                        sampleOptionText=''
                        getItems={container}
                    />
                </li>
            </ul>
        </Box>
    );

};

