import React from 'react';
import { Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CustomIconButton from '../../atoms/button/CustomIconButton';
import '../../../styles/scss/_productOption.scss';

// interface ProductOptionProps {
//     firstOption: TestOption[];
//     secondOption: TestOption[];
// }

const ProductOption = () => {
    return (
        <div className="productOption">
            <Box className="btn">
                <CustomIconButton
                    icon={<CheckCircleIcon fontSize="inherit" />}
                    content="옵션선택"
                    className="optionButton"
                />
            </Box>
        </div>
    );
};

export default ProductOption;
