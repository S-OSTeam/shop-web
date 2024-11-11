import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

// Apollo Client 인스턴스를 GraphQL API와 연결하는 http Link생성한다.
const httpLink = createHttpLink({
    uri: 'https://deamhome.synology.me/api/graphql',
});

// httpLink 및 InMemoryCache의 새 인스턴스를 전달하여 ApolloClient를 인스턴스화한다.
export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});
