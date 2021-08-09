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
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';

import Button, { ButtonGroup } from '@atlaskit/button';
import { ProgressIndicator } from '@atlaskit/progress-indicator';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 4px);
  justify-content: space-between;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em -1em;
  padding: 1em;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 auto;
`;

export const Login = (props) => {
  const values = [
    'first',
    'first',
    'first',
    'first',
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const panels = [
    (
      <>
        <h1>Darrell Karp, Here’s an Introduction.</h1>
        <p>
          It's your first time here, so we need to setup your profile. Do you want to use your Atlassian profile picture here as your avatar?
        </p>
        <p>By default, only your initials will be displayed in your avatar.</p>
      </>
    ),
    (
      <>
        <h1>Tasking for Your Soul.</h1>
        <p>
          It's your first time here, so we need to setup your profile. Do you want to use your Atlassian profile picture here as your avatar?
        </p>
        <p>By default, only your initials will be displayed in your avatar.</p>
      </>
    ),    
    (
      <>
        <h1>Buckets Make the World Go Round.</h1>
        <p>
          It's your first time here, so we need to setup your profile. Do you want to use your Atlassian profile picture here as your avatar?
        </p>
        <p>By default, only your initials will be displayed in your avatar.</p>
      </>
    ),    
    (
      <>
        <h1>You’re All Set.</h1>
      </>
    ),
  ];


  // navigatiion passed here
  // pass the prop to redux for the navigation layer?
  
  // we need to get the props here to the nav layer somehow
  // without reusing the nav component 
  return (
    <Page route={props.route}>
      <Modal
        // isBlanketHidden
        width="x-large"
        height={980}
        heading={(
          <ProgressIndicator
            appearance="primary"
            selectedIndex={selectedIndex}
            values={values}
            size="large"
          />
        )}
        actions={[ 
          { text: 'Continue', onClick: () => setSelectedIndex(selectedIndex + 1), isDisabled: selectedIndex === values.length - 1 }, 
          { text: 'Previous', onClick: () => setSelectedIndex(selectedIndex - 1), isDisabled: selectedIndex === 0 },
          { text: "Skip introduction", appearance: 'subtle-link'},
        ]}
      >
        {panels[selectedIndex]}
      </Modal>
    </Page>
  )
};

