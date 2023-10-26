import React from 'react';
import { Box } from '@mui/material';
import IconWrapper from '../../../iconWrapper/IconWrapper';
import TableContentBox from './TableContentBox/TableContentBox';

interface myProps {
    type : 'user' | 'admin';
    context?: string;
    rq_date?: string | undefined;
}
// td 내부 텍스트가 아닌 컨텐츠 요소
export const TContainerGenerator = ({...props}: myProps) => {
    const typeCheck = props.type;
    if(typeCheck == 'user'){
        return(
            <Box
                component='section'
                className='tb-wr-user'
            >
                <IconWrapper icon='HelpIcon' />
                <TableContentBox
                    context={props.context}
                    wrapperClass=''/>
            </Box>
        );
    }
    if(typeCheck == 'admin'){
        return(
            <Box
                component='section'
                className='tb-wr-admin'
            >
                <IconWrapper icon='AutoIcon' />
                <TableContentBox
                    context={props.context}
                    rq_date={props.rq_date}
                    wrapperClass=''/>
            </Box>
        );
    }
}