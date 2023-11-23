import React from 'react';
import { Box, Modal, Stack } from '@mui/material';
import '../../../../styles/scss/product/_modal.scss';
import TextCustom from '../../../atoms/text/TextCustom';
import ButtonCustom from '../../../atoms/button/ButtonCustom';

interface ShareModal {
    open: boolean;
    onClose: () => void;
}

const ShareModal = ({ open, onClose }: ShareModal) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="shareModal">
                <Stack className="shareTitle" direction="row">
                    <TextCustom variant="h6" content="공유하기" />
                    <ButtonCustom className="modalCloseBtn" onClick={onClose}>
                        X
                    </ButtonCustom>
                </Stack>
                <TextCustom
                    className="shareBody"
                    variant="body1"
                    content="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                />
            </Box>
        </Modal>
    );
};

export default ShareModal;
