import React from 'react';
import { AtlassianNavigation, PrimaryButton, Settings } from '@atlaskit/atlassian-navigation';
import { appTheme } from '../../configs';
import ProductLogo from './ProductLogo';

const TopNavigationBar = (props) => {
  
  return (
    <>
      <AtlassianNavigation
        theme={appTheme}
        renderProductHome={ProductLogo}
      />
    </>
  )
};

export default TopNavigationBar;