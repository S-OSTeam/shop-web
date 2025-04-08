/* eslint-disable */
import React, { ChangeEvent } from 'react';
import { Backdrop, IconButton, Paper, Stack } from '@mui/material';
import { ImageBox } from '@molecules/imageBox/ImageBox';
import { ImageBoxPropsInterface } from '@interface/image/ImageInterface';
import Button from '@atoms/button/Button';
import Text from '@atoms/text/Text';
import pick from '@organisms/home/product/pick/Pick';
import clsN from 'classnames';
import styles from './styles/ThumbnailManager.module.scss';
import { Cancel, MoreVert } from '@mui/icons-material';

interface ThumbnailMagagerProps {
    // 이미지박스 속성
    imageBoxProps: ImageBoxPropsInterface;
    // 콜백 이미지 변경 함수
    changeImage: (value: string) => void;
    // image Remove Event
    removeImage: () => void;
}

export const ThumbnailManager = ({ changeImage, removeImage, ...props }: ThumbnailMagagerProps) => {
    // 이미지 상태
    const [imageFile, setImageFile] = React.useState<string | null>(null);

    // preview State
    const [previewState, setPreviewState] = React.useState<boolean>(false);

    // context
    const imageGuidance = `이미지의 가로 세로 비율은 1:1 을 추천하며
    규격은 px 단위로 최소 400 * 400, 최대 600 * 600 규격에 맞춰야 합니다.`;

    // 이미지 변경 이벤트
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        // selected file, optional checked
        const pickedFile = e.target.files?.[0];

        // empty file case, files?.[0] are optional check
        if (!pickedFile) return;

        // url Reader
        const fileReader = new FileReader();

        // file loaded case
        fileReader.onloadend = () => {
            // fileReader.result type => <string | ArrayBuffer | null>
            // set as string type
            setImageFile(fileReader.result as string);
        };

        // read as data url, optional check
        fileReader.readAsDataURL(pickedFile);

        // if same file input value of 'event' and previous value are sames it't will onChange not works
        // set event value ''
        e.target.value = '';

        // have optional check case
        if (changeImage) {
            // optional check
            if (props.imageBoxProps.src) {
                changeImage(props.imageBoxProps.src);
                setImageFile(props.imageBoxProps.src);
            }
        }
    };
    // 이미지 미리보기 이벤트
    const previewImageSource = () => {
        if (!imageFile) {
            setPreviewState(false);
            return;
        }
        if (imageFile) {
            setPreviewState(true);
        }
        // console.log(`current ImageUrl : ${imageFile}`);
    };

    // image remove
    const handleImageRemove = () => {
        // confirm check
        removeImage();
        setImageFile(null);
    };

    // JSX 컴포넌트
    // 이미지 미리보기 및 변경 버튼 그룹
    const PreviewButton = (
        <Stack direction="row" gap={1}>
            <Button variant="contained" onClick={previewImageSource}>
                미리보기
            </Button>
            <Button component="label" variant="contained">
                이미지 변경
                <input type="file" accept="image/*" hidden onChange={handleImageChange} />
            </Button>
        </Stack>
    );

    return (
        <Stack direction="row" gap={2}>
            <ImageBox
                {...props.imageBoxProps}
                src={imageFile as string}
                actionIcon={
                    <IconButton className={clsN()} onClick={handleImageRemove}>
                        <Cancel className={clsN()} />
                    </IconButton>
                }
            />
            <Stack direction="column" justifyContent="space-between">
                <Text className={styles.context} text={imageGuidance} />
                {PreviewButton}
            </Stack>
            <Backdrop
                open={previewState}
                onClick={() => {
                    setPreviewState(false);
                }}
                className={clsN(styles.backdrop)}
            >
                <img src={imageFile as string} alt="preview Image" className={clsN(styles.backdrop__image)} />
            </Backdrop>
        </Stack>
    );
};
