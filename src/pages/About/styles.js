import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    padding: 50px 30px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    h2 {
        font-size: 2.8rem;
        font-weight: 700;
        letter-spacing: 0.8px;
        line-height: 1;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        text-transform: uppercase;
        margin-bottom: 15px;
    }
    p {
        font-size: 16px;
        letter-spacing: 0.8px;
        line-height: 1.5em;
        font-family: var(--ff-primary);
        color: var(--fc-quaternary);
        text-align: justify;
        margin-bottom: 15px;
    }
 `;

export const Links = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 10px 0;
`;
