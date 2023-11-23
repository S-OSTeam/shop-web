import React, { useState } from 'react';
import { Stack } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import TextCustom from '../../../atoms/text/TextCustom';
import ButtonCustom from '../../../atoms/button/ButtonCustom';
import IconCustom from '../../../atoms/icon/IconCustom';
import ShareModal from '../modal/ShareModal';

interface ProductTitleProps {
    title: string;
}

const ProductTitle = ({ title }: ProductTitleProps) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Stack className="productTitle" direction="row">
            <TextCustom className="pName" content={`${title}`} />
            <ButtonCustom className="pIconBtn" onClick={handleOpen}>
                <IconCustom size="pIcon" icon={<ShareIcon fontSize="inherit" />} />
            </ButtonCustom>
            <ShareModal open={open} onClose={handleClose} />
            <ButtonCustom className="pIconBtn">
                <IconCustom size="pIcon" icon={<BookmarkBorderIcon fontSize="inherit" />} />
            </ButtonCustom>
        </Stack>
    );
};

export default ProductTitle;
