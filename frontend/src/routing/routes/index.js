import React from 'react';
import { Redirect } from 'react-resource-router';
import { Home, Profile, Login } from '../components';
import { profileResource } from '../resources';

export const routes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: Home,
    navigation: true
  },
  {
    name: 'Profile',
    path: '/profile',
    exact: true,
    component: Profile,
    resources: [profileResource],
    navigation: true
  },
  {
    name: 'Login',
    path: '/login',
    exact: true,
    component: Login,
    navigation: false
  },
  // {
  //   name: 'Default',
  //   path: '*',
  //   component: () => <Redirect to="/home" />,
  // },
];
