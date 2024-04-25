import styled from 'styled-components';

export const ActionMenu = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    gap: 2px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
    z-index: 100;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.backgroundColor};
`;

export const ActionButton = styled.button`
    width: 100%;
    padding: 8px 12px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
    white-space: nowrap;

    svg {
        height: 16px;
        width: 16px;
        fill: ${(props) => props.theme.colors.primaryColor};
    }

    /* text */
    text-align: left;
    color: ${(props) => props.theme.colors.textColor};
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.02em;

    &:not(:last-child)::after {
        position: absolute;
        content: '';
        top: 100%;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: ${(props) => props.theme.colors.dividendColor};
    }
`;
