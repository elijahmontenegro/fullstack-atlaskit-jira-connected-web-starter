import React, { useState, useEffect } from 'react';
import { SignIn } from '@atlaskit/atlassian-navigation';
import { connect } from 'react-redux';

const LoginButton= (props) => {
  const [redirecting, setRedirecting] = useState(false);

  const handleLogin = () => {
    setRedirecting(true);
    props.login();
  };

  return (
    <SignIn 
      onClick={handleLogin} 
      isSelected={redirecting}
      tooltip="Log in"
    />
  )
};

const mapDispatchToProps = (dispatch) => ({
  login: () => {
    dispatch({ type: 'REDIRECT_TO_LOGIN' });
  }
});

export default connect(null, mapDispatchToProps)(LoginButton);