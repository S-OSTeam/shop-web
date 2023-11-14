/* eslint-disable */
import React from 'react';
import LinkBoxWrapper from '../../molecules/linkBoxWrapper/LinkBoxWrapper';
import { myHeaderItemAry } from '../../templates/header/Header';
import classNames from 'classnames';
import { Box } from '@mui/material';

interface myPropsType {
    items: myHeaderItemAry[];
    className?: string;
}

const HeaderGenerator = ({ items, className }: myPropsType) => {

    return (
        <ul id='menu' className={classNames(className)}>
            {
                items.map(primary => {
                        return (
                            <li>
                                <LinkBoxWrapper
                                    text={primary.title}
                                    href={primary.href}
                                    linkBoxClassName='header-li'
                                    textClassName='li-context'>
                                    <Box component='div' className='nav-bar-wrapper'>
                                        <ul>
                                            {primary.depth.map(depthItem => {
                                                const { title, href } = depthItem;
                                                return (
                                                    <li>
                                                        <LinkBoxWrapper
                                                            linkBoxClassName='depth-li'
                                                            textClassName='depth-context'
                                                            text={title}
                                                            href={href}
                                                        />
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </Box>
                                </LinkBoxWrapper>
                            </li>
                        );
                    },
                )
            }
        </ul>
    );
};
export default HeaderGenerator;
