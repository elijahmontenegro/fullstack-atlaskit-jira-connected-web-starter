import React from 'react';
import { createServiceClient } from './services';
import { ApolloProvider } from '@apollo/react-hooks';
import Router from './routing';
import { withSessionContext } from './contexts';

const client = createServiceClient();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
};

export default withSessionContext(App);
