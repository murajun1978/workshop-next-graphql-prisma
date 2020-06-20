import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:3000/api/graphql',
});

export const createClient = () =>
  new ApolloClient({
    cache,
    link,
  });
