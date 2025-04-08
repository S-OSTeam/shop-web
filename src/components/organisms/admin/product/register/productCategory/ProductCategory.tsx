/* eslint-disable */
import React from 'react';
import clsN from 'classnames';
import { Divider, Paper } from '@mui/material';
import { Heading } from '@molecules/admin/layout/heading/Heading';
import { ProductLayerInterface } from '@interface/layer/ProductLayerInterface';

interface ProductCategoryProps extends ProductLayerInterface {}

export const ProductCategoryRegister = ({
    className,
    parentHeadlineCleN,
    sectionHeadlineClsN,
}: ProductCategoryProps) => {
    return (
        <Paper className={clsN(className)}>
            <Heading heading="카테고리" headingClsN={clsN(parentHeadlineCleN)} />
            <Divider />
            etc
        </Paper>
    );
};
