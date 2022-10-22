import styled from 'styled-components';

export const Container = styled.section`

 `;
export const Content = styled.section`

    width: 100%;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-bottom: 50px;

    > img {
        width: 60%;
    }

 `;
