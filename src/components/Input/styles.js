import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: rgba(244, 244, 244, 0.5);
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    margin-bottom: 10px;
    border-radius: 8px;
    border: 1px solid rgba(244, 244, 244, 0.7);

    > input {
        height: 50px;
        width: 100%;
        padding: 14px;
        font-size: 15px;
        color: ${({ theme }) => theme.COLORS.GRAY_500};
        background: transparent;
        border: 0;
        caret-color: rgba(170, 54, 124, 0.95);

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_500};
        }

        &:focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }
    > svg {
            margin-left: 16px;
        }
`;