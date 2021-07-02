import React from 'react';
import { Redirect } from 'react-resource-router';
import { Home, Login } from '../components';
import { homeResource } from '../resources';
import { withSessionContext } from '../../contexts';

export const routes = [
  {
    name: 'Home',
    path: '/home',
    exact: true,
    component: Home,
    resources: [homeResource],
    navigation: false,
  },
  {
    name: 'Login',
    path: '/login',
    exact: true,
    component: Login,
    // resources: [homeResource],
    navigation: false,
  },
  {
    name: 'Default',
    path: '*',
    component: () => <Redirect to="/home" />,
    navigation: false,
  },
];
