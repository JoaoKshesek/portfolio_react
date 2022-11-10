import styled from 'styled-components';
import { device } from '../../components/MediaQuery'


export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 15px 30px;
    
    @media ${device.tablet} { 
        max-width: 300px;
        }
        @media ${device.laptopL} { 
        max-width: 350px;
        }

 `;
