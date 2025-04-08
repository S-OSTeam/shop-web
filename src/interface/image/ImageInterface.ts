// imageBoxClasses 관련 인터페이스
export interface imageBoxClasses {
    // 이미지 Box Root 클래스명
    imageBox?: string;
    // 이미지 Box 이미지 소스 클래스명
    imageBoxImg?: string;
    // 이미지 Box 이미지 바 클래스명
    iamgeBoxBar?: string;
}

export interface ImageBoxPropsInterface {
    // 이미지 소스
    src?: string;
    // 이미지 설명
    alt?: string;
    // 클래스요소
    classes?: imageBoxClasses;
    // 이미지 영역 클릭 이벤트
    onImageClick?: () => void;
}
