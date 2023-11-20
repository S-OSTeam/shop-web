/* eslint-disable */
import React from 'react';
import { Box } from '@mui/material';
import LinkBox from '../../../molecules/linkBox/LinkBox';
import { myHeaderItemAry } from '../Header';
import styles from './styles/HeaderGen.module.scss';
import clsN from 'classnames';

interface myPropsType {
    items: myHeaderItemAry[];
    getState: boolean;
}

const HeaderGenerator = ({ items, getState }: myPropsType) => {
    const listContainer = items.map(primary => {
        return (
            <li>
                <LinkBox text={primary.title}
                         href={primary.href}
                         linkBoxClassName={`${styles.linkBox}`}
                         textClassName={`${styles.linkText}`} />
                <Box component='div' className={`${styles.navBarWrap} ${styles.posAbs}`}>
                    <ul className={`${styles.depthUl} ${styles.posRlt}`}>
                        {primary.depth.map(depthItem => {
                            const { title, href } = depthItem;
                            return (
                                <li>
                                    <LinkBox
                                        linkBoxClassName={`${styles.depthLinkBox}`}
                                        textClassName={`${styles.depthContext}`}
                                        text={title}
                                        href={href}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </Box>
            </li>
        );
    });

    return (
        <ul className={clsN(`${styles.listMenu}`,`${getState}`)}>
            {listContainer}
        </ul>
    );
};
export default HeaderGenerator;
