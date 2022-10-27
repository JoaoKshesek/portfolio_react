import styled from 'styled-components';

export const Container = styled.section`
    > hr {
            background: ${({ theme }) => theme.COLORS.GRADIENT};
            height: 1px; 
            width: 100%;
            border: none;
        }
    
 `;


export const Technologies = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
    padding-bottom: 50px;
    margin: 0 auto;
    max-width: 980px;
    background: red;

`;

export const TechItem = styled.div`

    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;