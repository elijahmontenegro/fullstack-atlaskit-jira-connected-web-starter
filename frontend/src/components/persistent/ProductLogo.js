import React from 'react';
import styled from 'styled-components'
import { colors } from '@atlaskit/theme';
import HomeIcon from '@atlaskit/icon/glyph/home';

const Container = styled.a`
  display: flex;
  // margin-right: 32px;
  // margin-left: 6px;
  // max-width: 269px;
  // min-width: 90px;
  cursor: pointer;
  align-items: center;
  height: 24px;
  // padding-left: 4px;
  // font-family: 'Sigmar One';
  color: ${colors.N0} !important; 
  text-decoration: none !important;
`;

const Text = styled.div`
  display: flex;
  font-weight: 400;
  color: ${colors.N0} !important;
  padding: 0 6px;
  font-size: 14px;
`;

export default ProductLogo = (props) => {

  return (
    <Container href="/home">
      {/* <HomeIcon />  */}
      <Text children="Full Stack Jira Connected GraphQL Starter App" />
    </Container>
  )
};