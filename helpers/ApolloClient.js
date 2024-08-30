import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from 'apollo-link-http';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://example.com/graphql',
  }),
  cache: new InMemoryCache(),
});

export default client;