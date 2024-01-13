import React from 'react';

export const Card = () => {
    
    return(
        <div>
            hi
        </div>
    )
}

// import React from 'react';
// import { Card as MuiCard, CardProps as MuiCardProps} from '@mui/material';
//
// interface CardProps extends MuiCardProps{
//     content: React.ReactNode;
//     image?: string;
//     title?: string;
//     // actions:;
//     component?: MuiCardProps['component']
// }
// const Card = (
//     {
//         content,
//         image,
//         title,
//         actions
//     }:CardProps
// ) => {
//
//     return(
//         <MuiCard>
//             {image && <CardMedia image={image} title={title} />}
//         </MuiCard>
//     );
// }
//
// export default Card;