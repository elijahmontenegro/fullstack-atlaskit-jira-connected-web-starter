import React, { useState, useEffect } from 'react';
import Popup from '@atlaskit/popup';
import { ButtonItem, LinkItem, PopupMenuGroup, Section } from '@atlaskit/menu';
import { Profile as ProfileButton, SignIn } from '@atlaskit/atlassian-navigation';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { userProfile } from '../../queries/user';
import { logout } from '../../services/user';
import Spinner from '@atlaskit/spinner';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import { colors } from '@atlaskit/theme';
import ShortcutIcon from '@atlaskit/icon/glyph/shortcut';

const ProfileIcon = styled.img`
  border-radius: 100%;
  height: 24px;
  width: 24px;
`;


const LoginButton = (props) => {
  const [redirecting, setRedirecting] = useState(false);

  const handleClick = () => {
    setRedirecting(true);
  };

  return (
    <>
      <SignIn 
        href={process.env.AUTH_URL}
        onClick={handleClick}
        isSelected={redirecting}
        tooltip="Log in"
      />

      {redirecting && (
        <ModalTransition>
          <Modal
            width="small"
            heading={(
              <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                <Spinner size="large" /> 
                <span style={{ marginLeft: 20 }}/>
                Processing…
              </div>
            )}
          >
          </Modal>
        </ModalTransition>
      )}
    </>
  )
};

export default Profile = (props) => {
  const [active, setActive] = useState(false);
  const { data, loading, error } = useQuery(userProfile);

  if (loading) return null;
  if (error) return <LoginButton />;

  const { me: user } = data;

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
              <LinkItem iconAfter={<ShortcutIcon size="small" primaryColor={colors.N100}/>} href="https://id.atlassian.com/manage-profile">Account settings</LinkItem>
            </Section>
            <Section hasSeparator>
              <ButtonItem onClick={logout}>Logout</ButtonItem>
            </Section>
          </PopupMenuGroup>
        )}
      />
    </>
  )
};