import React, { useEffect, useState, useContext } from 'react';
// import { homeResource } from '../resources';
import { useResource, Link } from 'react-resource-router';
import { SessionContext } from '../../contexts';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ME_QUERY = gql`
{
  me {
    email
    displayName
  }
}
`;

export function Home(props) {
  const { data, loading, error } = useQuery(ME_QUERY);

  useEffect(() => {
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return (
    <>
      <p children={error.graphQLErrors[0].message && "Please log in to see this page"} />
      <Link href="/login" children="Go to log in" />
    </>
  );

  const user = data && data.me;

  return (
    <div>
      <h1>Home</h1>
      { user && <p>Welcome {user.displayName}</p> }
      <Link href="/login" children="Go to log in" />
    </div>
  );

};

