/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { GridColDef } from '@mui/x-data-grid';

export interface headColumns {
    field: string,  // 필드명
    headerName: string, // 헤더명
    width?: number, // 너비
    editable?: boolean, // 컬럼 수정 가능(숨기기 혹은 보이기)
}
interface myTableHeadProps {
    remoteElement: headColumns[];
}

const DataGridRemote = ({remoteElement}:myTableHeadProps) => {
    const columns: GridColDef[] = remoteElement;
    return columns;
}

DataGridRemote.propTypes = {
    remoteElements: PropTypes.shape({
        field: PropTypes.string.isRequired,
        headerName: PropTypes.string.isRequired,
        width: PropTypes.number,
        editable: PropTypes.bool,
    }),
};
DataGridRemote.defaultProps = {
    remoteElements: {
        width: undefined,
        editable: false,
    },
};
export default DataGridRemote;
