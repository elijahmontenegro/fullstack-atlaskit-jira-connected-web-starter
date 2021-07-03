import React from 'react';
import styled from 'styled-components'
import { colors } from '@atlaskit/theme';

const Container = styled.a`
  flex-shrink: 0;
  display: block;
  margin-right: 32px;
  margin-left: 6px;
  max-width: 269px;
  min-width: 90px;
  color: white !important; 
  text-decoration: none !important;
  cursor: pointer;
  align-content: center;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  height: 24px;
  padding: 0 2px;
  font-size: 20px;
  // font-family: 'Sigmar One';
  font-weight: 400;
  line-height: 100%;
  // background-color: red;
  // text-shadow: 1px -1px 0px ${colors.N500};
`;

export default ProductLogo = (props) => {

  return (
    <Container href="/home">
      💖 Home 
    </Container>
  )
};