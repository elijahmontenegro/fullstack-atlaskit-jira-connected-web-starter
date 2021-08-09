import React from 'react';
import { PageLayout, TopNavigation, Content, Main } from '@atlaskit/page-layout';
import TopNavigationBar from '../persistent/TopNavigationBar';

import styled from 'styled-components';

const PageStyle = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin: 0 auto;
  padding: 0px 40px !important;
  height: 100%;
  max-width: calc(100% - 40px);
  min-width: calc(8.33333% - 40px);
  // width: 960px;
  overflow-wrap: break-word;
  flex-direction: column;
  // background-image: url('/images/temp2.png');
  // background-position: bottom right;
  // background-size: 100vh;
  // background-repeat: no-repeat
`;

export const Page = ({
  route,
  children,
  wrapper: CustomStyledComponent
}) => {
  return (
    <PageLayout>
      {route.navigation && 
        <TopNavigation isFixed>
          <TopNavigationBar />
        </TopNavigation>
      }
      <Content>
        <Main>
          <PageStyle>
            {children}
          </PageStyle>
        </Main>
      </Content>
    </PageLayout>
  )
};
