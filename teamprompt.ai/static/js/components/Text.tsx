import type { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components';

const title = css`
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
    letter-spacing: 0.02em;
`;

const subtitle = css`
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    letter-spacing: 0.02em;
`

const body = css`
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    letter-spacing: 0.02em;
`

const paragraph = css`
    font-size: 14px;
    line-height: 22px;
    font-weight: 500;
    letter-spacing: 0.02em;
`

const button = css`
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
    letter-spacing: 0.02em;
`

const small = css`
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    letter-spacing: 0.02;
`

const TextVariant = {
    title,
    subtitle,
    body,
    paragraph,
    button,
    small
};

export const Text = styled.span<{ variant?: keyof typeof TextVariant; color?: keyof DefaultTheme['colors']; bold?: boolean }>`
    ${(props) => TextVariant[props.variant || 'body']}
    color: ${(props) => props.theme.colors[props.color || 'textColor']};
    ${(props) => props.bold && css`
        font-weight: 600;
    `}
`;

export { title, subtitle, body, paragraph, button, small }