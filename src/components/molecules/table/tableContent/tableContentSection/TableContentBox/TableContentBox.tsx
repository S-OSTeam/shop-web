import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Text from '../../../../../atoms/text/Text';

interface MyContentProps {
    wrapperClass?: string;
    rq_date?: string | undefined;
    context?: string;
    rq_context?: string;
}
const TableContentBox = ({...props}:MyContentProps) => {
    const {wrapperClass, context, rq_context, rq_date} = props;
    const rqTemp = rq_date;
        return(
            <Box component='div' className={wrapperClass}>
                <Text text={context} />
                {
                    rqTemp &&
                    <>
                        <Text text={rq_context}/>
                        <Text text={rqTemp}/>
                    </>
                }
            </Box>
        );
}
TableContentBox.prototype={
    wrapperClass: PropTypes.string,
    context: PropTypes.string,
    rq_date: PropTypes.string,
};
TableContentBox.defaultProps={
    wrapperClass: '',
    rq_date: '',
    rq_context: '',
    context: '',
};

export default TableContentBox;