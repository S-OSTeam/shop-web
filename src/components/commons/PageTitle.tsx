import React from 'react';

interface myPropsType {
    headingName?: string;
    headingNameSub?: string;
    contextName?: string;
}

export const HeadingTitle = ({...props}: myPropsType) => {
    return (
        <>
            <h1>{props.headingName}</h1>
            <h2>{props.headingNameSub}</h2>
        </>
    );
}
export const ContextTitle = ({...props}: myPropsType) => {
    return (
        <>

        </>
    );
}