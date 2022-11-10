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
export const Links = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 10px 0;
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
