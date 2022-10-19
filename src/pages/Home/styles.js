import styled from 'styled-components';
import background from '../../assets/images/header-bg.png'
import { device } from '../../components/MediaQuery'


export const Container = styled.section`
    background: url(${background});
    background-position: right;
    background-size: cover;

    height: 100vh;
    padding: 0px 30px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
 `;
 export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    justify-content: space-around;

    @media ${device.laptop} { 
        flex-direction: row;
        margin-top: 150px;
        gap: 200px;
        width: 980px;
    }
`;
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 50px 0 0px 0;

    > h1 {
        font-size: 3rem;
        font-weight: 700;

        line-height: 1;
        text-transform: uppercase;


    }

    > h2 {
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 0.5px;
        line-height: 1;
        background: ${({ theme }) => theme.COLORS.GRADIENT};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-transform: uppercase;

    }
    > p {
        font-size: 16px;
        letter-spacing: 0.8px;
        line-height: 1.5em;
        font-family: var(--ff-primary);
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        text-align: justify;
    }

    @media ${device.laptop} { 
       max-width: 500px;
       align-items: flex-start;
    }
`;

export const Button = styled.button`
    width: 100%;
    height: 40px;
    margin-bottom: 30px ;
    font-size: 18px;
    background: linear-gradient(90deg, rgba(170, 54, 124, 0.6), rgba(74, 47, 189, 0.6));
    border: 1px solid rgba(244,244,244,0.6);
    outline: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
    @media ${device.tablet} { 
       max-width: 500px;
    }
`;

export const Img = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    animation: updown 4s linear infinite;
    transform: rotateY(180deg);
  
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
`;
