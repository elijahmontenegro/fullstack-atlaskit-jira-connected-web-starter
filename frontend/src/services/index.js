import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import Cookies from 'js-cookie';

class ServiceClient extends ApolloClient {
  constructor(props) {
    const httpLink = HttpLink({
      uri: 'http://localhost:4000',
    });

    const authLink = setContext((_, { headers }) => {
      const { jwt: token } = Cookies.get(); // pull the token from cookies or local stoarage

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
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
          );
        }

        if (networkError) {
          console.log(`[Network error]: ${networkError}`);
        }
      }
    });

    const options = {
      connectToDevTools: true,
      link: ApolloLink.from([authLink, errorLink, httpLink]),
      cache: new InMemoryCache(),
    };

    super(Object.assign({}, options, props));
  }
}

export const createServiceClient = options => {
  return new ServiceClient(options);
};

export default ServiceClient;
