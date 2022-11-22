import styled from 'styled-components';
import { device } from '../../components/MediaQuery'
import focusTimer from '/src/assets/images/focusTimer.png';
import quebraGalho from '/src/assets/images/quebra-galho.png';




export const Container = styled.section`
    p {
        color: ${({ theme }) => theme.COLORS.GRAY_100} !important;
    }

    a {
        width: 100%;
    }

.texto {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${device.tablet} { 
        background: linear-gradient(95deg, rgba(19,1,49,0.8),rgba(51,3,77,0.8), rgba(42,0,51,0.8),rgba(59,0,64,0.8),rgba(96,0,102,0.8),rgba(160,1,170,0.8));
        height: 100%;
        width: 40%;
        h3 {
        color: white !important;
        background: white;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        }
        }
}

.texto-1, .img-2 {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

.texto-2, .img-1 {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.img {
    display: none;
    height: 100%;
    width: 60%;
    @media ${device.tablet} { 
        display: block;
        }
}
.img-1 {
    background-image: url(${focusTimer});
    background-size: cover;
}
.img-2 {
    background-image: url(${quebraGalho});
    background-size: cover;
}
 `;



export const Main = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 50px;
    margin: 0 auto ;
    max-width: 980px;
    gap: 50px;

    @media ${device.tablet} { 
        gap: 50px;
        }

    @media ${device.laptopL} { 
        max-width: 1100px;
        }
`;
