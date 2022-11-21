import styled from 'styled-components';
import { device } from '../../components/MediaQuery'


export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    
    
    border-radius: 20px;
    padding: 0 30px;    


    img {
        width: 60%;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        display: none;
    }
    > div {
        padding: 35px 0px;

        @media ${device.tablet} { 
        padding: 0 40px;
    }
    }

    @media ${device.tablet} { 
        height: 350px;
        padding: 0;
        img {
            display: block;
        }
        }




 `;
