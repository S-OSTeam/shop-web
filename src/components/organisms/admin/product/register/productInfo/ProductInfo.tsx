/* eslint-disable */
import React from 'react';
import { Divider, FormControl, InputLabel, Paper, Stack } from '@mui/material';
import { Heading } from '@molecules/admin/layout/heading/Heading';
import { Input } from '@atoms/input/Input';
import { useRecoilState } from 'recoil';
import { productRegisterAtom } from '@recoil/atoms/admin/product/register/ProductRegisterAtom';
import clsN from 'classnames';
import styles from './styles/ProductInfo.module.scss';

interface ProductInfoProps {
    className?: string;
    parentHeadlineCleN?: string; // 현재 컴포넌트 제목 클래스명
    sectionHeadlineClsN?: string; // 입력란 설명 제목 클래스명
}

export const ProductInfo = ({ className, parentHeadlineCleN, sectionHeadlineClsN }: ProductInfoProps) => {
    /* 상태 */
    const [productData, setProductData] = useRecoilState(productRegisterAtom); // 상품 정보 전역 상태 사용

    /* 핸들러 */

    // 상품 정보 입력 이벤트 핸들러
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target; // 목표 Input 이벤트 객체에 속성 가져옴
        setProductData((prev) => ({
            ...prev,
            [name]: value, // name 을 활용한 key 값 방식으로 속성 갱신
        }));
    };

    return (
        <Paper className={clsN(className)}>
            <Heading heading="상품 정보" headingClsN={clsN(parentHeadlineCleN)} />
            <Divider />
            <Stack gap={2}>
                <Stack>
                    <Heading heading="상품 이름 및 작품 출저" headingClsN={clsN(sectionHeadlineClsN)} />
                    <Stack gap={1}>
                        <Input
                            variant="outlined"
                            onChange={handleChange}
                            inputVal={productData.title}
                            label="사이트에 노출될 이름"
                            name="title"
                            required
                        />
                        <Input
                            variant="outlined"
                            onChange={handleChange}
                            inputVal={productData.originalWork}
                            label="원작명"
                            name="originalWork"
                            required
                        />
                        <Input
                            variant="outlined"
                            onChange={handleChange}
                            inputVal={productData.productNumber}
                            label="임시 상품 코드 퍼블릭 아이디 등등"
                            name="productNumber"
                        />
                    </Stack>
                </Stack>
                <Stack>
                    <Heading heading="상품 크기 및 재질" headingClsN={clsN(sectionHeadlineClsN)} />
                    <Stack direction="row" alignItems="stretch" gap={1}>
                        <Input
                            variant="outlined"
                            onChange={handleChange}
                            inputVal={productData.size}
                            label="규격"
                            name="size"
                            required
                            fullWidth
                        />
                        <Input
                            variant="outlined"
                            onChange={handleChange}
                            inputVal={productData.weight}
                            name="weight"
                            label="무게"
                            required
                            fullWidth
                        />
                        <Input
                            variant="outlined"
                            onChange={handleChange}
                            inputVal={productData.material}
                            label="재질"
                            name="material"
                            required
                            fullWidth
                        />
                    </Stack>
                </Stack>
            </Stack>
        </Paper>
    );
};
