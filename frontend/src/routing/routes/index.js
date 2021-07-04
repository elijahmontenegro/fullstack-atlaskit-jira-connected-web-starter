import React from 'react';
import { Redirect } from 'react-resource-router';
import { Home, Feed, Login } from '../components';
import { feedResource } from '../resources';

export const routes = [
  {
    name: 'Home',
    path: '/home',
    exact: true,
    component: Home,
    navigation: true //implement in component by props
  },
  {
    name: 'Feed',
    path: '/feed',
    exact: true,
    component: Feed,
    resources: [feedResource],
  },
  {
    name: 'Default',
    path: '*',
    component: () => <Redirect to="/home" />,
  },
];
