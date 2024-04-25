import React from 'react';
import RequireLoginModal from 'components/Modal/RequireLoginModal';
import { useModalContext } from 'provider/ModalProvider';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useCategoryStore from 'store';

export const useRequireLogin = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  const { openModal } = useModalContext();
  const { session } = useCategoryStore();

  return useCallback(
    (callback: Function) => () => {
      if (session) {
        callback();
      } else {
        // navigate('/login', { state: { from: location.pathname } });
        openModal(<RequireLoginModal onLoginSuccess={callback} />);
      }
    },
    [navigate, session],
  );
};
