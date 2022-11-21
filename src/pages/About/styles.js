import styled from 'styled-components';
import { device } from '../../components/MediaQuery'


export const Container = styled.section`
    width: 100%;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    justify-content: center;    
 `;
 export const Content = styled.section`
 width: 100%;
 display: flex;

 justify-content: center;
 flex-direction: column;
 margin: 50px auto;
 padding: 0 30px;

 @media ${device.laptop} { 
     max-width: 980px;
     flex-direction: row;
     gap: 40px;
     padding: 0;

 }
 @media ${device.laptopL} { 
     max-width: 1100px;

 }
`;
export const Description = styled.div`
    h2 {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    h2::before, h2::after {
        display: none;
    }
    p {
        margin-bottom: 15px;
    }
`;
export const SocialMedia = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 10px 0;
    > a {
        &:hover {
            filter: brightness(1.5);
        }
    }
    @media ${device.laptop} { 
        gap: 20px;
        > a:last-child {
            display: none;
        }
    }
`;

export const Img = styled.div`
    display: none;
    > img {
        width: 340px;
        border-radius: 10px;
    }
    @media ${device.laptop} { 
        display: block;
    }
`;


export const Links = styled.div`
    
    @media ${device.laptop} { 
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`;


export const ResumeBtn = styled.div`
    width: 100%;
    @media ${device.laptop} { 
        width: 60%;
    }
`;
