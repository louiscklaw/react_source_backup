import { paragraph } from 'components/Text';
import styled from 'styled-components';

export const TemplateContent = styled.div`
  background-color: rgb(255, 180, 35, 0.2);
  border: 1px solid #ffb423;
  padding: 16px;
  color: ${props => props.theme.colors.textColor};
  ${paragraph}
  margin-bottom: 24px;
  flex: none;
  max-height: calc(var(--app-vh, 1vh) * 40);
  white-space: pre-line;
  overflow: auto;
  user-select: none;
  border-radius: 8px;
`;

export const TemplatePlaceholder = styled.span`
  color: #ffb423;

  &::before {
    content: '{';
    color: ${props => props.theme.colors.textColor};
  }

  &::after {
    content: '}';
    color: ${props => props.theme.colors.textColor};
  }
`;
