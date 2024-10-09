import React from 'react';
import {
    GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarDensitySelector,
    GridToolbarExport,
    GridToolbarFilterButton,
    GridToolbarQuickFilter,
} from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/ToolBar.module.scss';

export const CustomToolBar = () => {
    return (
        <GridToolbarContainer className={clsN(styles.toolbar)}>
            <Paper>
                <GridToolbarColumnsButton
                    slotProps={{
                        tooltip: { title: '열' },
                    }}
                />
                <GridToolbarFilterButton
                    slotProps={{
                        tooltip: { title: '열' },
                    }}
                />
                <GridToolbarDensitySelector
                    slotProps={{
                        tooltip: { title: '열' },
                    }}
                />
                <GridToolbarExport
                    slotProps={{
                        tooltip: { title: '열' },
                    }}
                />
                <GridToolbarQuickFilter />
            </Paper>
        </GridToolbarContainer>
    );
};
