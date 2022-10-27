import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 30px;
    background: linear-gradient(110deg, rgba(170, 54, 124, 0.95), rgba(74, 47, 189, 0.95));
    
    h2 {
        font-size: 2.8rem;
        font-weight: 700;
        letter-spacing: 0.8px;
        line-height: 1;
        color: ${({ theme }) => theme.COLORS.WHITE};
        text-transform: uppercase;
        margin-bottom: 15px;
    }
    > Button {
        border: 1px solid rgba(244,244,244, 0.7);
    }
 `;
