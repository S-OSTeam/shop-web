import React from 'react';
import { Box, TableCell, TableRow } from '@mui/material';
import PropTypes from 'prop-types';
import HelpIcon from '@mui/icons-material/Help';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import { TD } from '../../../../molecules/table/tableData/TD';
import IconBox from '../../../../molecules/iconBox/IconBox';
import TableContentBox
    from '../../../../molecules/table/tableContent/tableContentSection/TableContentBox/TableContentBox';
import Collapse from '../../../../molecules/collapse/CustomCollapse';
/*
* TR 가 여러개일 수 있음
 */
export interface myTableRowProps {
    tableRowPrimary: string[];
    context: string;
    rq_context?: string;
    qna_done_date?: string;
    onClick?: () => void;
    currentInState: boolean;
}

// currentOpen 를 받아 사용
export const TableRowCmp = ({ ...props }: myTableRowProps) => {
    const {
        tableRowPrimary,
        context,
        rq_context,
        qna_done_date,
        onClick,
        currentInState,
    } = props;
    return (
        <>
            <TableRow
                onClick={onClick}
                className='title-row'
            >
                {
                    tableRowPrimary.map((item, index) => {
                        // key 에 td 말고 다른거 생각하기
                        const currentKey = item + index;
                        return (
                            <TD CellText={item} key={currentKey} />
                        );
                    })
                }
            </TableRow>
            <TableRow className='context-row'>
                <TableCell
                    colSpan={4}>
                    <Collapse
                        timeout='auto'
                        propsIn={currentInState}
                        className='tr-collapse-wrapper'
                    >
                        <Box
                            component='section'
                            className='td-section-wrapper'
                        >
                            <IconBox
                                className='icon-wrapper'
                                icon={HelpIcon} size='large'/>
                            <TableContentBox
                                wrapperClass='qna-tb-context'
                                context={context}
                                rq_date={undefined}
                            />
                        </Box>
                        {
                            rq_context &&
                            <Box
                                component='section'
                                className='td-section-wrapper'
                            >
                                <IconBox
                                    className='icon-wrapper'
                                    icon={HdrAutoIcon} size='large'/>
                                <TableContentBox
                                    wrapperClass='qna-tb-context'
                                    rq_context={rq_context}
                                    rq_date={qna_done_date}
                                />
                            </Box>
                        }
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
};
// (rq_context !== '') ?
TableRowCmp.prototype = {
    rq_context: PropTypes.string,
    qna_done_date: PropTypes.string,
    onClick: PropTypes.func,
};
TableRowCmp.defaultProps = {
    rq_context: '',
    qna_done_date: '',
    onClick: () => {
        /* eslint-disable-next-line */
        console.log('onClick event ready');
    },
};