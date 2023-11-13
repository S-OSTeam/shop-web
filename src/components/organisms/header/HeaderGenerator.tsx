/* eslint-disable */
import React from 'react';
import LinkBoxWrapper from '../../molecules/linkBoxWrapper/LinkBoxWrapper';
import classNames from 'classnames';

export type secondaryList = {
    context: string;
    hrefLink: string;
};
export type headerList = {
    // ul->li
    primaryList: {
        // li : title
        primaryTitle: string;
        // depth-1 : ul container
        depth: secondaryList[];
    };
};
export type primaryEntry = {};

export interface myHeaderProps {
    // 가져올 리스트 객체
    title: [];
}

const HeaderGenerator = ({ ...props }: myHeaderProps) => {
    const { itemData } = props;

    return (
        <ul>
            {itemData.map((item, idx) => {
                const primaryTitle = item.primaryList.primaryTitle;
                const secondaryTemp = item.primaryList.depth;
                return (
                    <li>
                        <LinkBoxWrapper
                            href=""
                            linkBoxClassName={classNames('')}
                            textClassName={classNames('')}
                            text={primaryTitle}
                        />
                        <ul>
                            {secondaryTemp.map((item) => {
                                return (
                                    <li>
                                        <LinkBoxWrapper
                                            href={item.hrefLink}
                                            linkBoxClassName={classNames('')}
                                            textClassName={classNames('')}
                                            text={item.context}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                );
            })}
        </ul>
    );
};
export default HeaderGenerator;
