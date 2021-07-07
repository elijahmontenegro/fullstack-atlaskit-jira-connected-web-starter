import React, { useEffect, useState, useContext } from 'react';
import { homeResource } from '../resources';
import { useResource, Link } from 'react-resource-router';
// import { SessionContext } from '../../contexts';
import { gql, useQuery } from '@apollo/react-hooks';
import { LeftSidebarWithoutResize, Main } from '@atlaskit/page-layout';
import styled from 'styled-components';
import { Container } from '../../components/common';
import PageHeader from '@atlaskit/page-header';

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

export const Home = (props) => {

  return (
    <Main>
      <Container>
        <PageHeader>Hello World</PageHeader>
        This is your public landing page.
      </Container>
    </Main>
  );
};

