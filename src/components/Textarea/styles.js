import styled from 'styled-components';

export const Container = styled.textarea`
    width: 100%;
    height: 150px;
    background-color: rgba(244, 244, 244, 0.5);
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    border: none;
    resize: none;
    border: 1px solid rgba(244, 244, 244, 0.7);

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;
    font-size: 16px;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_500};
    }

    &:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`;