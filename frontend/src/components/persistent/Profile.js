import React, { useState, useEffect } from 'react';
import Popup from '@atlaskit/popup';
import { ButtonItem, LinkItem, PopupMenuGroup, Section } from '@atlaskit/menu';
import { Profile as ProfileButton, SignIn } from '@atlaskit/atlassian-navigation';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { userProfile } from '../../graphql/queries/user';
import { colors } from '@atlaskit/theme';
import ShortcutIcon from '@atlaskit/icon/glyph/shortcut';
import { connect } from 'react-redux';
import LoginButton from './LoginButton';

const ProfileIcon = styled.img`
  border-radius: 100%;
  height: 24px;
  width: 24px;
`;

const Profile = (props) => {
  const [active, setActive] = useState(false);
  const { data, loading, error } = useQuery(userProfile);

  if (loading) return null;
  if (error) return <LoginButton />;

  const { me: user } = data;
  
  const handleLogout = () => {
    props.logout()
  };

  return (
    <>
      <Popup
        placement="bottom-start"
        isOpen={active}
        onClose={() => setActive(false)}
        trigger={triggerProps => (
          <ProfileButton
            icon={<ProfileIcon src={user.photo} />}
            onClick={() => setActive(!active)}
            isSelected={active}
            tooltip="Your profile and settings"
            {...triggerProps}
          />
        )}
        content={() => (
          <PopupMenuGroup minWidth={240} maxWidth={240}>
            <Section title={user.displayName}>
              <ButtonItem>Profile</ButtonItem>
              <LinkItem iconAfter={<ShortcutIcon size="small" primaryColor={colors.N100}/>} onClick={() => window.open('https://id.atlassian.com/manage-profile', '_blank')}>Account settings</LinkItem>
            </Section>
            <Section hasSeparator>
              <LinkItem onClick={handleLogout}>Logout</LinkItem>
            </Section>
          </PopupMenuGroup>
        )}
      />
    </>
  )
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch({ type: 'REDIRECT_TO_LOGOUT' });
  }
});

export default connect(null, mapDispatchToProps)(Profile);