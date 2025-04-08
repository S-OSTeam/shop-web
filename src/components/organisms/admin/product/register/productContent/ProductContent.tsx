/* eslint-disable */
import React from 'react';
import { Button, ButtonProps, Divider, Paper, Stack } from '@mui/material';
import { Heading } from '@molecules/admin/layout/heading/Heading';
import clsN from 'classnames';
import { useRecoilState } from 'recoil';
import { productRegisterAtom } from '@recoil/atoms/admin/product/register/ProductRegisterAtom';
import { ModalEditor } from '@organisms/admin/modalEditor/ModalEditor';
import product from '@routes/product/Product';
import { ProductDetail } from '@molecules/admin/product/component/productDetail/ProductDetail';
import { ProductLayerInterface } from '@interface/layer/ProductLayerInterface';

// TODO : 에디터의 내용을 미리볼 수 있게 하기

interface ProductContentProps extends ProductLayerInterface {}
export const ProductContent = ({ className, parentHeadlineCleN, sectionHeadlineClsN }: ProductContentProps) => {
    // 상품 정보 전역 상태 사용, 그리고 컨텐츠 데이터 미리 로딩하기
    const [productData, setProductData] = useRecoilState(productRegisterAtom);

    // 모달 에디터 준비 상태
    const [editorModalState, setEditorModalState] = React.useState<boolean>(false);

    // 모달 에디터 컨텐츠 상태
    const [editorContent, setEditorContent] = React.useState<string>('');

    // 리코일 상태 체크하면서 모달에디터 값 갱신
    React.useEffect(() => {
        setEditorContent(productData.content);
    }, [productData.content]);

    // 모달 에디터 활성화
    const handleModalChange = (e: Event, reason: 'backdropClick' | 'escapeKeyDown') => {
        // 에디터 후면 블럭 클릭 이벤트 방지
        if (reason == 'backdropClick') {
            // 뒷배경 클릭일 경우 활성화 유지
            setEditorModalState(true);
        } else {
            setEditorModalState((prevState) => !prevState);
        }
        // 활성화 할 때 해당 에디터 값 갱신하기
        setEditorContent(productData.content);
    };
    // 모달 에디터 작성 저장 이벤트(상세 작성 버튼)
    const handleEditorSave = (content: string) => {
        // TODO : 정말로 저장할지 confirm 분기 설정하기
        // 에디터 내용 리코일에 갱신하기
        setProductData((prev) => ({
            ...prev,
            content: content,
        }));
        //  TODO : 저장하면서 gql 로 content 갱신 요청
        // 모달 에디터 종료
        setEditorModalState(false);
    };
    // 모달 에디터 작성 취소 이벤트
    const handleEditorCancel = () => {
        // TODO : 정말로 취소할지 confirm 분기 설정하기
        // 모달 에디터 상태 : off
        setEditorModalState(false);
    };

    // 모달 버튼 컴포넌트
    const EditorCheckButton = () => {
        // 모달 활성화
        setEditorModalState(true);
    };

    // 버튼 분기 생성
    const buttonItemProvider = (): ButtonProps[] => {
        return [
            {
                name: 'save',
                children: 'Save',
                // 마우스 이벤트 처리
                onClick: (e) => {
                    handleEditorSave(editorContent);
                },
            },
            {
                name: 'cancel',
                children: 'Cancel',
                onClick: handleEditorCancel,
            },
        ];
    };

    return (
        <Paper className={clsN(className)}>
            <Heading heading="상세 페이지" headingClsN={clsN(parentHeadlineCleN)} />
            <Divider />
            <ProductDetail state={!!productData.content} onClick={EditorCheckButton} />
            <ModalEditor
                open={editorModalState}
                onClose={handleModalChange}
                initialValue={editorContent}
                buttonItems={buttonItemProvider()}
                onSave={handleEditorSave}
            />
        </Paper>
    );
};
