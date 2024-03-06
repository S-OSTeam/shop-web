import React from 'react';

interface IconProps {
    name: string;
    className?: string;
}

const CustomIcon = ({ name, className }: IconProps) => {
    let svgContent = null;
    switch (name) {
        case 'naver':
            svgContent = (
                <svg
                    className={className}
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="54" height="54" rx="27" fill="#03C75A" />
                    <path
                        d="M30.5614 27.7033L23.1461 17H17V37H23.4386V26.295L30.8539 37H37V17H30.5614V27.7033Z"
                        fill="white"
                    />
                </svg>
            );
            break;
        case 'kakao':
            svgContent = (
                <svg
                    className={className}
                    width="90"
                    height="90"
                    viewBox="0 0 90 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_1860_49)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M46 27.9521C36.0583 27.9521 28 34.2109 28 41.9301C28 46.7308 31.1168 50.9629 35.863 53.4801L33.8661 60.8137C33.6896 61.4617 34.4268 61.9782 34.9929 61.6027L43.7467 55.7948C44.4854 55.8665 45.2362 55.9083 46 55.9083C55.9409 55.9083 63.9999 49.6497 63.9999 41.9301C63.9999 34.2109 55.9409 27.9521 46 27.9521"
                            fill="black"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1860_49">
                            <rect width="36" height="34" fill="white" transform="translate(28 28)" />
                        </clipPath>
                    </defs>
                </svg>
            );
            break;
        case 'google':
            svgContent = (
                <svg
                    className={className}
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="40" height="40" rx="4" fill="#F2F2F2" />
                    <g clipPath="url(#clip0_710_6227)">
                        <path
                            d="M29.6 20.2273C29.6 19.5182 29.5364 18.8364 29.4182 18.1818H20V22.05H25.3818C25.15 23.3 24.4455 24.3591 23.3864 25.0682V27.5773H26.6182C28.5091 25.8364 29.6 23.2727 29.6 20.2273Z"
                            fill="#4285F4"
                        />
                        <path
                            d="M20 30C22.7 30 24.9636 29.1045 26.6181 27.5773L23.3863 25.0682C22.4909 25.6682 21.3454 26.0227 20 26.0227C17.3954 26.0227 15.1909 24.2636 14.4045 21.9H11.0636V24.4909C12.7091 27.7591 16.0909 30 20 30Z"
                            fill="#34A853"
                        />
                        <path
                            d="M14.4045 21.9C14.2045 21.3 14.0909 20.6591 14.0909 20C14.0909 19.3409 14.2045 18.7 14.4045 18.1V15.5091H11.0636C10.3864 16.8591 10 18.3864 10 20C10 21.6136 10.3864 23.1409 11.0636 24.4909L14.4045 21.9Z"
                            fill="#FBBC04"
                        />
                        <path
                            d="M20 13.9773C21.4681 13.9773 22.7863 14.4818 23.8227 15.4727L26.6909 12.6045C24.9591 10.9909 22.6954 10 20 10C16.0909 10 12.7091 12.2409 11.0636 15.5091L14.4045 18.1C15.1909 15.7364 17.3954 13.9773 20 13.9773Z"
                            fill="#E94235"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_710_6227">
                            <rect width="20" height="20" fill="white" transform="translate(10 10)" />
                        </clipPath>
                    </defs>
                </svg>
            );
            break;

        default:
            svgContent = null;
            break;
    }
    return svgContent;
};

export default CustomIcon;
