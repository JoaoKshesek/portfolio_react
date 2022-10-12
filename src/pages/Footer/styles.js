import styled from 'styled-components';

export const Container = styled.section`
    background: #101010;
    padding: 30px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    justify-content: center;
    > p {
        font-size: 14px;
        letter-spacing: 0.8px;
        line-height: 1.5em;
        font-family: var(--ff-primary);
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        text-align: justify;

    }
 `;
export const SocialMedia = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;    
    gap: 30px;
    flex-wrap: wrap;
`;
