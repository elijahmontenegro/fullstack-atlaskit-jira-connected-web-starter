import React, { useEffect, useState, useContext } from 'react';
import { homeResource } from '../resources';
import { useResource, Link } from 'react-resource-router';
// import { SessionContext } from '../../contexts';
import { gql, useQuery } from '@apollo/react-hooks';
import { LeftSidebarWithoutResize, Main } from '@atlaskit/page-layout';
import styled from 'styled-components';
import { Page } from '../../components/common';
import PageHeader from '@atlaskit/page-header';
import EmptyState from '@atlaskit/empty-state';

export const Home = (props) => {

  return (
    <Page route={props.route}>
      <EmptyState
        header="You're new here, aren't you?"
        description="Not what you were expecting? Log in to access more features."
        imageUrl="/images/temp2.png"
        // primaryAction={}
        // secondaryAction={}
        // tertiaryAction={}
      />
    </Page>
  );
};

