import React from 'react';
import { Stack } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import TextCustom from '../../../atoms/text/TextCustom';
import ButtonCustom from '../../../atoms/button/ButtonCustom';
import IconCustom from '../../../atoms/icon/IconCustom';

interface ProductTitleProps {
    title: string;
}

const ProductTitle = ({ title }: ProductTitleProps) => {
    return (
        <Stack className="productTitle" direction="row">
            <TextCustom className="pName" content={`${title}`} />
            <ButtonCustom className="pIconBtn">
                <IconCustom size="pIcon" icon={<ShareIcon fontSize="inherit" />} />
            </ButtonCustom>
            <ButtonCustom className="pIconBtn">
                <IconCustom size="pIcon" icon={<BookmarkBorderIcon fontSize="inherit" />} />
            </ButtonCustom>
        </Stack>
    );
};

export default ProductTitle;
