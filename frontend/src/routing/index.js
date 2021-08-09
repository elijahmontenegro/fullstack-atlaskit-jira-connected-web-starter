import React from 'react';
import { Router as ResourceRouter, RouteComponent } from 'react-resource-router';
import { createBrowserHistory } from 'history';
import { routes } from './routes';
import NavigationLayer from '../components/persistent/NavigationLayer';
import CommonLayer from '../components/persistent/CommonLayer';
import configureStore from '../redux/configureStore';
import { Provider } from 'react-redux';

const history = createBrowserHistory();

const initialState = {};

const store = configureStore(initialState);

export default Router = (props) => {
  return (
    <ResourceRouter routes={routes} history={history}>
      <Provider store={store}>
        <RouteComponent />
      </Provider>
    </ResourceRouter>
  );
};