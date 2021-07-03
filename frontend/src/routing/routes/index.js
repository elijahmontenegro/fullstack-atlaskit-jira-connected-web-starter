import React from 'react';
import { Redirect } from 'react-resource-router';
import { Home, Feed, Login } from '../components';
import { feedResource } from '../resources';
import { withSessionContext } from '../../contexts';

export const routes = [
  {
    name: 'Home',
    path: '/home',
    exact: true,
    component: Home
  },
  {
    name: 'Feed',
    path: '/feed',
    exact: true,
    component: Feed,
    resources: [feedResource],
  },
  {
    name: 'Login',
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    name: 'Default',
    path: '*',
    component: () => <Redirect to="/home" />,
  },
];
