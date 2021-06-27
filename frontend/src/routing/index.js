import React from 'react';
import { Router as ResourceRouter, RouteComponent } from 'react-resource-router';
import { createBrowserHistory } from 'history';
import { routes } from './routes';

const history = createBrowserHistory();

function Router() {
  return (
    <ResourceRouter routes={routes} history={history}>
      <RouteComponent />
    </ResourceRouter>
  );
}

export default Router;
