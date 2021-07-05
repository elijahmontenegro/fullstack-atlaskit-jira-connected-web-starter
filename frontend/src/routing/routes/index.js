import React from 'react';
import { Redirect } from 'react-resource-router';
import { Home, Profile } from '../components';
import { profileResource } from '../resources';

export const routes = [
  {
    name: 'Home',
    path: '/home',
    exact: true,
    component: Home,
    navigation: true //implement in component by props
  },
  {
    name: 'Profile',
    path: '/profile',
    exact: true,
    component: Profile,
    resources: [profileResource],
  },
  {
    name: 'Default',
    path: '*',
    component: () => <Redirect to="/home" />,
  },
];
