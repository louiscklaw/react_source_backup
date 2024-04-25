import React from 'react';
import { ToastContainer, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const StyledToastContainer = styled(ToastContainer)`
  width: fit-content;
  padding: 0;

  svg {
    display: none;
  }

  .Toastify__toast {
    min-height: 32px;
    border-radius: 32px;
    color: #ffffff;
    background: #523b77;
    box-shadow: none;
  }

  &.Toastify__toast-container--bottom-center {
    bottom: 5em;
    left: 50% !important;
    transform: translateX(-50%) !important;
  }

  .Toastify__toast-body {
    padding: 0 12px;
    margin: 0;
    text-align: center;
  }

  .Toastify__toast-icon {
    width: auto;
  }

  .Toastify__toast--success {
    border: 1px solid #47c81b;
    background: #f4fff0;
    color: #47c81b;
  }

  .Toastify__toast--error {
    border: 1px solid #f63d3d;
    background: #ffdcdc;
    color: #f63d3d;

    .Toastify__progress-bar-theme--light {
      background: #ffdcdc;
    }
  }

  .Toastify__progress-bar-theme--light {
    background: ${props => props.theme.colors.primaryAccentColor};
    height: 100%;
    z-index: -1;
  }

  @keyframes slide-in-fwd {
    0% {
      transform: translateX(-20px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .slide-in-fwd {
    animation: slide-in-fwd 0.3s ease-out both;
  }

  @keyframes slide-out-bck {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(20px);
      opacity: 0;
    }
  }

  .slide-out-bck {
    animation: slide-out-bck 0.3s ease-in both;
  }
`;

const ToastProvider: React.FC = () => {
  const slide = cssTransition({
    enter: 'slide-in-fwd',
    exit: 'slide-out-bck',
  });

  return (
    <StyledToastContainer
      position="bottom-center"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      rtl={false}
      transition={slide}
      closeButton={false}
      pauseOnFocusLoss
      pauseOnHover
    />
  );
};

export default ToastProvider;
