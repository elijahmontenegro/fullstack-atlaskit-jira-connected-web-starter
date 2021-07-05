import React from 'react';
import { AtlassianNavigation, PrimaryButton, Settings } from '@atlaskit/atlassian-navigation';
import { appTheme } from '../../constants';
import ProductLogo from './ProductLogo';
import Profile from './Profile';

const TopNavigationBar = (props) => {
  
  return (
    <>
      <AtlassianNavigation
        theme={appTheme}
        renderProductHome={ProductLogo}
        renderProfile={Profile}
      />
    </>
  )
};

export default TopNavigationBar;