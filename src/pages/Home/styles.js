import styled from 'styled-components';
import background from '../../assets/images/header-bg.png'
import { device } from '../../components/MediaQuery'

export const Container = styled.section`
    background: url(${background});
    background-position: right;
    background-size: cover;
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0 30px;
    @media ${device.laptop} { 
        justify-content: flex-start;
        padding: 0;
    }
    @media ${device.laptopL} { 
        height: 100%;
    }
 `;
 export const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    justify-content: space-around;

    @media ${device.laptop} { 
        flex-direction: row;
        gap: 200px;

    }
`;
export const Content = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    justify-content: space-around;

    > a {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    @media ${device.laptop} { 
        max-width: 980px;
        height: 100vh;
        display: flex;
        justify-content: space-around;
    }
    @media ${device.laptopL} { 
    max-width: 1100px;

}
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 50px 0 0px 0;

    > h2 {
        font-size: 2rem;
        letter-spacing: 0.5px;
        line-height: 1;
        background: ${({ theme }) => theme.COLORS.GRADIENT};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-transform: uppercase;
    }
    > h2::before, h2::after {
        display: none;
    }
    
    > p {
        font-size: 16px;
        letter-spacing: 0.8px;
        line-height: 1.5em;
        font-family: var(--ff-primary);
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        text-align: justify;
        max-width: 500px;
    }

    @media ${device.laptop} { 
       align-items: flex-start;
    }
`;

export const Button = styled.button`
    width: 100%;
    height: 45px;
    margin-bottom: 30px ;
    font-size: 18px;
    background: ${({ theme }) => theme.COLORS.GRADIENT_BUTTON};
    border: none;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    outline: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        filter: brightness(1.75);
    }

    @media ${device.mobileL} { 
       max-width: 400px;
    }
`;

export const Img = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    animation: updown 4s linear infinite;
    transform: ease-in-out rotateY(180deg);
  
@keyframes updown {
    0% {
        transform: translateY(-30px);
    }
    50% {
        transform: translateY(30px);
    }
    100% {
        transform: translateY(-30px);
    }
}

@media ${device.laptop} { 
    animation: updown 6s linear infinite;
    @keyframes updown {
    0% {
        transform: translateY(50px);
    }
    50% {
        transform: translateY(200px);
    }
    100% {
        transform: translateY(50px);
    }
}

}
`;
