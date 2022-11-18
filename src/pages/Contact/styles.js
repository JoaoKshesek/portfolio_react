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
        gap: 100px;
        
    }
    .form {
        display: flex;
        flex-direction: column;
        
        > button {
            background: rgb(255,255,255,);
            color: rgba( 112, 18, 112 );
            border: 2px solid rgba( 112, 18, 112 );
            
            height: 56px;
            padding: 0 16px;
            border-radius: 7px;
            font-weight: 700;
            font-size: 18px;
            cursor: pointer;
            text-transform: uppercase;

            &:hover {
            background: white;
            border: 2px solid white;
            }
    }
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
 `;

