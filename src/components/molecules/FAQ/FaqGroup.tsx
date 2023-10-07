/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { FaqItem } from './FaqItem';

interface FaqGroupProps {
    data: any;
}

export const FaqGroup = ({data}:FaqGroupProps) => {
    /* 상태 */
    // 리스트 배열
    const [faqItems, setFaqItems] = useState<any[]>([]);

    // 버튼 불리언 체크 Default: false
    // const [isFaq, setIsFaq] = useState<boolean>(false);

    /* 마운트 1회 실행 */
    useEffect(()=>{
        console.log('DB Check...');
        console.log(data);
        /* 데이터 존재할경우 쿼리로 데이터 요청 후 map 메서드로 setFaqItems 기능을 사용해 데이터를 적재함 */
        if(data){
        setFaqItems(data.getUser.map(
            (user:{
                faq_id: string,
                fgr_id: string,
                faq_title: string,
                faq_content: string,
                faq_datetime: string,
                faq_ip: string
            }, index: number) =>
            {return ({...user, id: index})}));
        }
    },[]);

    /* 오프라인 */

    /* 상태 */
    // 리스트 배열 offline_ver
    const [faqItems_off, setFaqItems_off] = useState<any[]>([]);

    /* 메서드 */



    return(
        <div>

        </div>

        // del
        /*<div>
            {
                faqItems && faqItems.map(
                    (
                        item:{
                            faq_id: string,
                            fgr_id: string,
                            faq_title: string,
                            faq_content: string,
                            faq_datetime: string,
                            faq_ip: string,
                        })=>(<FaqItem
                                key={item.faq_id}
                                faq_id={item.faq_id}
                                fgr_id={item.fgr_id}
                                faq_ip={item.faq_ip}
                                faq_title={item.faq_title}
                                faq_content={item.faq_content}
                                faq_datetime={item.faq_datetime}
                        />
                    )
                )
            }
        </div>*/
    );
};