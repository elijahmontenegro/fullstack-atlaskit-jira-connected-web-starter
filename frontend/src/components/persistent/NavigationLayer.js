import React from 'react';
import { PageLayout, TopNavigation, Content } from '@atlaskit/page-layout';
import TopNavigationBar from './TopNavigationBar';
import { connect } from 'react-redux';

const Navigation = ({
  children: routeComponent,
  ...rest
}) => {

  console.log(rest)
  
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

const mapStateToProps = state => ({
  isRedirecting: state.navigation.isRedirecting,
  message: state.navigation.message
});

export default connect(mapStateToProps)(Navigation);