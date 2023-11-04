import React from 'react';
import { Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ButtonCustom from '../../../atoms/button/ButtonCustom';
import TextCustom from '../../../atoms/text/TextCustom';
import IconCustom from '../../../atoms/icon/IconCustom';
import SelectOption from '../select/SelectOption';
import { TestOption } from '../../../../util/GlobalTest';

const ProductOption = () => {
    return (
        <Box className="productOption">
            <ButtonCustom className="optionBtn">
                <IconCustom size="optionIcon" icon={<CheckCircleIcon fontSize="inherit" />} />
                <TextCustom className="otionTxt" content="옵션선택" />
            </ButtonCustom>
            <SelectOption className="selectOption" options={TestOption} />
            <SelectOption className="selectOption" options={TestOption} />
        </Box>
    );
};

export default ProductOption;
