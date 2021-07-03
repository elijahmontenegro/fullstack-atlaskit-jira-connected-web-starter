import React from 'react';
import { PageLayout, TopNavigation, Content } from '@atlaskit/page-layout';
import TopNavigationBar from './TopNavigationBar';

export const NavigationLayer = ({
  children: routeComponent
}) => {
  
  return (
    <PageLayout>
      <TopNavigation isFixed>
        <TopNavigationBar />
      </TopNavigation>
      <Content>
        {routeComponent}
      </Content>
    </PageLayout>
  )
};