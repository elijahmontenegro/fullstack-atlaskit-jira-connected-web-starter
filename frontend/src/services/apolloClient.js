import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import Cookies from 'js-cookie';

const token = Cookies.get('jwt');

const httpLink = HttpLink({
  uri: 'http://localhost:4000',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    const signedIn = !graphQLErrors.some(
      err => err.message === 'NOT_LOGGED_IN',
    );

    if (!signedIn) {
      // redirect to unathorized page
      window.location = ('/unauthorized');
    } else if (signedIn && !networkError) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    }

    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
      graphQLErrors.map(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    }
  }
});

const config = {
  connectToDevTools: true,
  link: ApolloLink.from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
};

// This is to be able to reuse the same authorization context for non-hook queries.
const ctx = authLink;

export {
  ctx
};

export default new ApolloClient(config);
