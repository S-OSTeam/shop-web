import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const httpLink = createHttpLink({
    uri: 'https://deamhome.synology.me/api/graphql',
    // uri: 'http://localhost:8080/api/graphql',
});

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});
