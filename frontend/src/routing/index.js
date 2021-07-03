import React from 'react';
import { Router as ResourceRouter, RouteComponent } from 'react-resource-router';
import { createBrowserHistory } from 'history';
import { routes } from './routes';
import { NavigationLayer } from '../components';

const history = createBrowserHistory();

function Router() {
  return (
    <ResourceRouter routes={routes} history={history}>
      <NavigationLayer>
        <RouteComponent />
      </NavigationLayer>
    </ResourceRouter>
  );
}

export default Router;
