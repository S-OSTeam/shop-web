import { gql } from '@apollo/client';

export const ACCOUNT = gql`
    query {
        getAccountInfo {
            userId
            sex
            birthday
            zipcode
            address1
            email
            receiveMail
            snsId
            phone
            userName
            point
        }
    }
`;
