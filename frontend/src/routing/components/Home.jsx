import React, { useEffect, useState, useContext } from 'react';
import { homeResource } from '../resources';
import { useResource, Link } from 'react-resource-router';
// import { SessionContext } from '../../contexts';
import { gql, useQuery } from '@apollo/react-hooks';
import { LeftSidebarWithoutResize, Main } from '@atlaskit/page-layout';
import styled from 'styled-components';

const PageContent = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin: 0 auto;
  padding: 0px 40px !important;
  height: auto;
  max-width: calc(100% - 40px);
  min-width: calc(8.33333% - 40px);
  width: 960px;
  overflow-wrap: break-word;
  flex-direction: column;
  ${props => props.hidden && 'display: none;'}
`;

export function Home(props) {
  return (
    <Main>
      <PageContent>
        <h2>Welcome to the landing page!</h2>
        <ul>
          <li>
            <Link href="/feed" children="Go to feed (requires log in)" />
          </li>
          <li>
            <Link href="/login" children="Go to log in" />
          </li>
        </ul>
      </PageContent>
    </Main>
  );

};

