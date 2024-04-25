import type { PropsWithChildren } from 'react';
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo-secondary.png';
import { ReactComponent as Profile } from 'assets/icons/profile.svg';
import { ReactComponent as Caret } from 'assets/icons/caret-right.svg';
import { ReactComponent as Cross } from 'assets/icons/cross-white.svg';
import { IconButton } from './Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from './Box';
import { motion } from 'framer-motion';
import useToggle from 'hooks/useToggle';
import useCategoryStore from 'store';
import { useModalContext } from 'provider/ModalProvider';
import RequireLoginModal from './Modal/RequireLoginModal';
import { ActionButton, ActionMenu } from './Action';
import { Text } from './Text';

const Container = styled(motion.div)<{ primary?: string }>`
  position: relative;
  flex: 0 0 var(--header);
  background-color: ${props =>
    props.primary === 'true' ? props.theme.colors.primaryColor : props.theme.colors.inputColor};

  svg {
    fill: ${props => (props.primary === 'true' ? props.theme.colors.inputColor : props.theme.colors.textColor)};
  }
`;

const Head = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: var(--sat) 8px 0;
`;

const Logo = styled.img`
  width: 155px;
`;

const ProfileMenu = styled(ActionMenu)`
  position: absolute;
  top: calc(56px + env(safe-area-inset-top));
  right: 16px;
`;

interface Props {
  leading?: 'back' | 'close';
  withProfile?: boolean;
  title?: string;
  actions?: React.ReactNode;
  onBack?: () => void;
}

const Header: React.FC<PropsWithChildren<Props>> = ({ leading, withProfile, title, actions, children, onBack }) => {
  const [showProfile, setShowProfile, profileRef, buttonRef] = useToggle<HTMLDivElement, HTMLButtonElement>();
  const { session, logout } = useCategoryStore();
  const { openModal } = useModalContext();
  const navigate = useNavigate();
  const location = useLocation();

  const onClickBack = () => {
    if (location.state?.from) {
      navigate(-1);
    } else {
      navigate('/');
    }
    onBack && onBack();
  };

  const onClickClose = () => {
    navigate('/');
  };

  const onClickProfile = () => {
    setShowProfile(i => !i);
  };

  const primaryTheme = !!title; // have color = red theme

  const onLogout = () => {
    logout().then(() => {
      navigate('/login');
    });
  };

  const onLogin = () => {
    openModal(<RequireLoginModal />);
  };

  return (
    <Container primary={primaryTheme.toString()}>
      <Head>
        <Box width="40px">
          {leading === 'back' && (
            <IconButton primary={primaryTheme} solid={primaryTheme} onClick={onClickBack} icon={Caret} />
          )}
          {leading === 'close' && (
            <IconButton primary={primaryTheme} solid={primaryTheme} onClick={onClickClose} icon={Cross} />
          )}
        </Box>
        {title ? (
          <Text variant="body" color="primaryTextColor">
            {title}
          </Text>
        ) : (
          <Logo src={logo} />
        )}
        <Box width="40px">
          {actions}
          {!actions && withProfile && (
            <IconButton
              primary={primaryTheme}
              solid={primaryTheme}
              onClick={onClickProfile}
              icon={Profile}
              ref={buttonRef}
            />
          )}
        </Box>
      </Head>
      {children}
      {showProfile && (
        <ProfileMenu ref={profileRef}>
          {session ? (
            <ActionButton onClick={onLogout}>Logout</ActionButton>
          ) : (
            <ActionButton onClick={onLogin}>Login</ActionButton>
          )}
        </ProfileMenu>
      )}
    </Container>
  );
};

export default Header;
