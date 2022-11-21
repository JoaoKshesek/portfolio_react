import styled from 'styled-components';
import background from '../../assets/images/form-bg.jpg';
import { device } from '../../components/MediaQuery'


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0px;
    background: url(${background});
    background-size: cover;
    width: 100%;
    
    
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


export const Main = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        margin: 100px 0;
        justify-content: center;
        gap: 50px;

        @media ${device.laptop} { 
                max-width: 980px;
            }
            @media ${device.laptopL} { 
                max-width: 1100px;
                gap: 100px;
            }


        .img {
            display: none;
                @media ${device.laptop} { 
                display: block;
            }
        }

        .form {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 15px;
        @media ${device.laptop} { 
            padding: 0 30px;

        }
        @media ${device.laptopL} { 
            padding: 0;

        }
        
        > button {
            width: 100%;
            background: ${({ theme }) => theme.COLORS.GRADIENT_BUTTON};
            color: ${({ theme }) => theme.COLORS.WHITE};

            height: 56px;
            border: 0;
            padding: 0 16px;
            margin-top: 16px;
            border-radius: 7px;
            font-weight: 700;
            font-size: 18px;
            cursor: pointer;
            text-transform: uppercase;
            border: 1px solid ${({ theme }) => theme.COLORS.GRADIENT};

            
            @media ${device.laptop} { 
                opacity: 0.8;
                &:hover {
                filter: brightness(1.75);
                opacity: 1;
            }
            }
    }
    }
        
`;