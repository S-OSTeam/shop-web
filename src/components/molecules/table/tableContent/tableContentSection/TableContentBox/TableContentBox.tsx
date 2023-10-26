import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Text from '../../../../../atoms/contents/Text';

interface MyContentProps {
    wrapperClass?: string;
    rq_date?: string | undefined;
    context?: string;
    rq_context?: string;
}
const TableContentBox = ({...props}:MyContentProps) => {
        return(
            <Box component='div' className={props.wrapperClass}>
                <Text text={props.context} />
                {
                    (props.rq_date !== undefined) ?
                        <Text text={props.rq_date}/> : null
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
};

export default TableContentBox;