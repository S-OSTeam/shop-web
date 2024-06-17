import { gql } from '@apollo/client';

export const SEARCH_NOTICE = gql`
    query SearchNotice($request: NoticeSearchRequest!){
        searchNotice(request: $request){
            
        }
    }
`;
