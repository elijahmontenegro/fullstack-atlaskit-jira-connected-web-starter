import React, { useEffect, useState, useContext } from 'react';
import { homeResource } from '../resources';
import { useResource, Link } from 'react-resource-router';
// import { SessionContext } from '../../contexts';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ME_QUERY = gql`
{
  me {
    displayName
  }
}
`;

export function Home(props) {
  const { data, loading, error } = useResource(homeResource);

  useEffect(() => {
    // console.log(props)
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>

  const user = data;

  return (
    <div>
      <h1>Home</h1>
      { user && <p>Welcome {user.displayName}</p> }
      <Link href="/login" children="Go to log in" />
    </div>
  );

};

