import React from 'react';
import client from './services/apolloClient';
import { ApolloProvider } from '@apollo/react-hooks';
import Router from './routing';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
};

export default App;
