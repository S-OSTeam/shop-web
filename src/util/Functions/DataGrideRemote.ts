import { GridColDef } from '@mui/x-data-grid';

export interface headColumns {
    field: string;  // 필드명
    headerName: string; // 헤더명
    width?: number; // 너비
    editable?: boolean; // 컬럼 수정 가능(숨기기 혹은 보이기)
    type?: 'string' | 'number' | 'date' | 'dateTime' | 'singleSelect' | 'actions';
}

export const DataGridCol = (props:headColumns[]) => {
    const columns: GridColDef[] = props;
    return columns;
}

DataGridCol.defaultProps = {
    width: 0,
    editable: true,
    type: 'string',
};