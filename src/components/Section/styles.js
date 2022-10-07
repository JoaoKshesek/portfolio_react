import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    padding: 50px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2 {
        font-size: 2.8rem;
        font-weight: 700;
        letter-spacing: 0.8px;
        line-height: 1;
        color: ${({ theme }) => theme.COLORS.GRAY_500};
        position: relative;
    }
    h2::before {
        content: '';
        height: 2px;
        width: 100%;
        background: ${({ theme }) => theme.COLORS.GRADIENT};
        position: absolute;
        top: 100%;
        left: 0;
        
    }
    h2::after {
        content: '';
        height: 2px;
        width: 50%;
        background: ${({ theme }) => theme.COLORS.GRADIENT};
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 8px;
    }

    > hr {
        background: ${({ theme }) => theme.COLORS.GRADIENT};
        height: 1px; 
        width: 100%;
        border: none;
    }
 `;
