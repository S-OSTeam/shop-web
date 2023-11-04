import React from 'react';
import { Stack } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import IconCustom from '../../../atoms/icon/IconCustom';
import TextCustom from '../../../atoms/text/TextCustom';
import ButtonCustom from '../../../atoms/button/ButtonCustom';

const DeliveryPrice = () => {
    return (
        <Stack className="deliveryPrice" direction="row" spacing={0}>
            <IconCustom size="deliveryIcon" icon={<LocalShippingIcon fontSize="inherit" />} />
            <TextCustom className="deliveryTxt" content="배송비 3,000원" />
            <ButtonCustom className="deliveryHelp">
                <TextCustom className="helpTxt" content="배송관련" />
                <IconCustom size="helpIcon" icon={<HelpOutlineIcon fontSize="inherit" />} />
            </ButtonCustom>
        </Stack>
    );
};

export default DeliveryPrice;
