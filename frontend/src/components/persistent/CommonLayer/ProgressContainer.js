import React, { useState } from 'react';
import styled from 'styled-components';
import Button, { ButtonGroup } from '@atlaskit/button';
import { ProgressIndicator } from '@atlaskit/progress-indicator';

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  padding: 2px 24px;
  // background-color: red;
  flex-direction: column;
  justify-content: space-between;
`;

const Body = styled.div`
  display: flex;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em -1em;
  padding: 1em;
`;

const VerticalButtonGroup = styled.div`
  flex-direction: column;
  button {
    margin-right: 5px;
    margin-bottom: 5px;
  }
`;

const ProgressContainer = (props) => {
  const values = [
    'first',
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const panels = [
    (
      <div>
        <p>
          It's your first time here, so we need to setup your profile. Do you want to use your Atlassian profile picture here as your avatar?
        </p>
        <p>By default, only your initials will be displayed in your avatar.</p>
      </div>
    ),
    (
      <div>
        <p style={{ paddingBottom: 24 }}>
        </p>
      </div>
    ),
  ];

  return (
      <Container>
        <Body>
          {panels[selectedIndex]}
        </Body>
        <Footer>
          <span/>
          <ButtonGroup>
            <Button appearance="subtle" children="Skip" />
            <Button appearance="primary" children="Yes" />
          </ButtonGroup>
          {/* <Button
            isDisabled={selectedIndex === 0} 
            onClick={() => setSelectedIndex(selectedIndex - 1)} 
            children="Prev"
          />
          <ProgressIndicator selectedIndex={selectedIndex} values={values} />
          <Button 
            isDisabled={selectedIndex === values.length - 1} 
            onClick={() => setSelectedIndex(selectedIndex + 1)} 
            children="Next"
          /> */}
        </Footer>
      </Container>
  );
};

export default ProgressContainer;