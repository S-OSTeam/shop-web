import React from 'react';
import { Divider, Paper } from '@mui/material';
import { ProductLayerInterface } from '@interface/layer/ProductLayerInterface';
import { Heading } from '@molecules/admin/layout/heading/Heading';

interface ProductPriceProps extends ProductLayerInterface {}
export const ProductPrice = ({ className, parentHeadlineCleN }: ProductPriceProps) => {
    return (
        <Paper className={className}>
            <Heading heading="판매가 설정" headingClsN={parentHeadlineCleN} />
            <Divider />
        </Paper>
    );
};
