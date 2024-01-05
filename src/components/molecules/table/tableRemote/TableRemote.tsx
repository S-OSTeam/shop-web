import React from 'react';
import { Box, TableCell, TableHead } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/TableRemote.module.scss';
import PropTypes from 'prop-types';
import CheckBox from '#atoms/checkBox/CheckBox';
import Text from '#atoms/text/Text';

export interface RemoteElementParams {
    type?: 'checkBox' | 'string';
    name: string;
    className: string;
    onClick? : ()=>void;
}
interface myTableHeadProps {
    remoteElement: RemoteElementParams[];
}

const TableRemote = ({remoteElement}:myTableHeadProps) => {

    const renderElement = remoteElement.map(
        // eslint-disable-next-line
        (item) => {
        let _name = item.name;
        let _className = item.className;
        if(item.type == 'checkBox'){
            return <CheckBox name={_name} className={clsN(_className)}/>
        }
        if(item.type == 'string'){
            return (
                <TableCell>
                    <Text className={_className} text={_name} />
                </TableCell>
            )
        }
    });
    return(
        <TableHead className={clsN(`${styles.nav}`)}>
            {renderElement}
        </TableHead>
    )
}

TableRemote.propTypes = {
    remoteElements: PropTypes.shape({
        type: PropTypes.oneOf(['checkBox', 'string']),
        name: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired,
        onClick: PropTypes.func,
    }),
};
TableRemote.defaultProps = {
    remoteElements: {
        type: 'string',
        onClick: ()=>{},
    },
};
export default TableRemote;
