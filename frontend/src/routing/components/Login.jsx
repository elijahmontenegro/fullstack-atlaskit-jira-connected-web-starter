import React, { useState } from 'react';
// import { homeResource } from '../resources';
import { Link } from 'react-resource-router';
import { gql, useMutation } from '@apollo/react-hooks';

const loginURL = 'http://localhost:4000/auth/connect/';

export const Login = () => {

  return (
    <div>
      <h1>You can log in here with Atlassian.</h1>
      <button onClick={() => window.location = loginURL} children="Continue to Atlassian"/>
    </div>
  );
};


// once returned all you need to cehck if a user is authorized is checking if there is a cookie called 'jwt' which contains the userw