import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { apolloClient } from './services';
import Router from './routing';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Router />
    </ApolloProvider>
  );
};

export default App;
