import React, { useState } from 'react';
import { Box } from '@mui/material';
import '../../styles/scss/product/_faq.scss';
import TextCustom from '../../components/atoms/text/TextCustom';
import FAQList from '../../components/templates/product/faq/FAQList';
import { FAQ, FAQData } from '../../util/GlobalTest';
import PaginationCustom from '../../components/atoms/pagination/PaginationCustom';
import FAQLink from '../../components/molecules/product/faq/FAQLink';

const ProductFAQ = () => {
    const [page, setPage] = useState<number>(1);
    const totalfaqData = () => {
        const faq: FAQData[] = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < 35; i++) {
            faq.push(FAQ as FAQData);
        }
        return faq;
    };
    const onChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        // page+1 값으로 변하면 index번호를 page관련 값을 이용해서 내용 바꿔주기
        if (event) setPage(value);
    };

    const faqData = () => {
        const faq: FAQData[] = [];
        const total = totalfaqData();
        let cnt: number = 0;
        // const page = 1;
        if (total.length - page * 9 < 0) {
            cnt = total.length;
        } else {
            cnt = page * 9;
        }
        // eslint-disable-next-line no-plusplus
        for (let i = (page - 1) * 9; i < cnt; i++) {
            faq.push(total[i]);
        }

        return faq;
    };

    const count = () => {
        const total = totalfaqData();
        const cnt = total.length / 9;
        return Math.round(cnt);
    };

    return (
        <Box className="productFAQ">
            <TextCustom className="faqTitle" content="상품 문의" />
            <FAQList faq={faqData()} />
            <FAQLink />
            <Box className="faqPagination">
                <PaginationCustom count={count()} showOpt={false} page={page} onChange={onChangePage} />
            </Box>
        </Box>
    );
};

export default ProductFAQ;
