import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background: ${({ theme }) => theme.COLORS.GRADIENT};
    color: ${({ theme }) => theme.COLORS.WHITE};

    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 7px;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    text-transform: uppercase;
    border: 1px solid rgba(244, 244, 244, 0.7);
`;