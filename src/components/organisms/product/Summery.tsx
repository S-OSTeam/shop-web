import React from 'react';
import { Box, Stack } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { TestProduct } from '../../templates/product/SubInfo';
import StarReview from '../../molecules/product/StarReview';
import CustomIconButton from '../../atoms/button/CustomIconButton';
import '../../../styles/scss/_summery.scss';
import CustomIcon from '../../atoms/icon/CustomIcon';
import CustomText from '../../atoms/text/CustomText';

interface SummeryProps {
    product: TestProduct;
    onClick?: (num: number) => void;
}

const Summery = ({ product, onClick }: SummeryProps) => {
    return (
        <div className="productSummery">
            <StarReview product={product} />
            <CustomText
                className={onClick ? 'pCode cursor' : 'pCode'}
                content="상품 번호"
                onclick={() => onClick && onClick(1)}
            />
            <Stack className="pTitle" direction="row" spacing={0}>
                <div className="pName">{product.pName}</div>
                <div className="pShare">
                    <CustomIconButton icon={<ShareIcon />} className="iconBtn" />
                </div>
                <div className="pBookMark">
                    <CustomIconButton icon={<BookmarkBorderIcon />} className="iconBtn" />
                </div>
            </Stack>
            <Stack direction="row" spacing={0}>
                <div className="pPrice">{product.pPrice}</div>
                <div className="pWon">원</div>
                <div className="pDeadline">마감일:D-{product.pDay}</div>
            </Stack>
            <Box className="pOrigin">원작:{product.pOrigin}</Box>
            <Box className="pProduct">재질:{product.pMaterial}</Box>
            <Box className="pProduct">
                크기:{product.pSize}cm/{product.pSize}cm
            </Box>
            <Box className="pProduct">무게:{product.pWeight}kg</Box>
            <Stack className="pDelivery" direction="row" spacing={0}>
                <CustomIcon icon={<LocalShippingIcon fontSize="inherit" />} size="iconBtn" />
                <div className="deliveryTxt">배송비3,000원</div>
                <div className="deliveryHelp">
                    <CustomIconButton
                        icon={<HelpOutlineIcon fontSize="inherit" />}
                        content="배송관련"
                        className="deliveryHelp"
                    />
                </div>
            </Stack>
        </div>
    );
};

Summery.defaultProps = {
    onClick: undefined,
};

export default Summery;
