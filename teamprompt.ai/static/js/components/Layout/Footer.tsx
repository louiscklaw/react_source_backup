import styled from 'styled-components';

const Footer = styled.div`
  flex: 1 0 80px;
  background-color: ${props => props.theme.colors.backgroundColor};
  padding: 16px;
  padding-bottom: calc(16px + var(--sab));
  border-top: 1px solid ${props => props.theme.colors.dividendColor};
`;

export default Footer;
