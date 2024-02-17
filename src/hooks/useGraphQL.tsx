import { useEffect } from 'react';
import { DocumentNode } from 'graphql/language';
import { LazyQueryHookOptions, MutationHookOptions, useLazyQuery, useMutation } from '@apollo/client';
import { useRecoilState } from 'recoil';
import loadingAtom from '@recoil/atoms/loadingAtom';

interface graphQLProps<T> {
    query: DocumentNode;
    request?: T;
    type: string;
    option?: MutationHookOptions | LazyQueryHookOptions;
}

const useGraphQL = <T,>({ query, request, type, option }: graphQLProps<T>) => {
    const selectType = () => {
        if (type === 'mutation') {
            return useMutation(query, {
                variables: {
                    request: { ...request },
                    ...option,
                },
            });
        }

        return useLazyQuery(query, {
            variables: {
                request: { ...request },
                ...option,
            },
        });
    };

    const [loadingGlobal, setLoading] = useRecoilState(loadingAtom);

    const [gql, { data, loading, error }] = selectType();

    const modifyLoading = (state: boolean) => {
        if (state) setLoading(loadingGlobal + 1);
        else setLoading(loadingGlobal - 1 < 0 ? 0 : loadingGlobal - 1);
        console.log(loadingGlobal);
    };

    useEffect(() => {
        if (loading) modifyLoading(true);
        else modifyLoading(false);
    }, [loading]);

    useEffect(() => {
        if (error) alert(error.message);
    });

    return { data, gql };
};

export default useGraphQL;