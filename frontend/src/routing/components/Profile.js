import React, { useEffect, useState, useContext } from 'react';
import { profileResource } from '../resources';
import { useResource, Link } from 'react-resource-router';
// import { SessionContext } from '../../contexts';
import { gql, useQuery } from '@apollo/react-hooks';
import { LeftSidebarWithoutResize, Main } from '@atlaskit/page-layout';
import styled from 'styled-components';
import { Page } from '../../components/common';
import PageHeader from '@atlaskit/page-header';
import { AtlassianLogo } from '@atlaskit/logo';

const Card = styled.div`

`;

export const Profile = (props) => {
  const { data, loading, error } = useResource(profileResource)

  if(error) {
    console.error(error); 
    return;
  }

  if(loading) return <p>Loading…</p>;

  return (
    <Page route={props.route}>
      <PageHeader children={data.displayName} />
      <p>This data comes from Jira using Jira.JS and is fetched during render with React Resource Router.</p>
    </Page>
  )
};

