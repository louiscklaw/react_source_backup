import styled, { css } from 'styled-components';

const Body = styled.div<{ flex?: boolean; noPadding?: boolean; withSafeArea?: boolean }>`
    flex: 0 1 calc(var(--app-height) - var(--header));
    padding: 32px 16px;
    padding-bottom: ${(props) => (props.withSafeArea ? `var(--sab)` : 0)};
    background-color: #ffffff;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    max-height: calc(var(--app-height) - var(--header));
    overflow-y: auto;

    ${(props) =>
        props.flex &&
        css`
            display: flex;
            flex-direction: column;
        `}

    ${(props) =>
        props.noPadding &&
        css`
            padding-top: 0;
            padding-left: 0;
            padding-right: 0;
        `}
`;

export default Body;
