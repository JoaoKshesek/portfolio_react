import styled from 'styled-components';
import background from '../../assets/images/form-bg.jpg';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 30px;
    background: url(${background});
    background-size: cover;
    

    .teste {
        width: 100%;
        display: flex;
        align-items: center;
        margin: 100px 0;
        justify-content: center;
        gap: 200px;
        
    }

    .form {
        width: 450px;
    }
    
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
