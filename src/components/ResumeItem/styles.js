import styled from 'styled-components';
import { device } from '../../components/MediaQuery'


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px; 

    > a h3:hover {
        filter: brightness(1.75);
        }
    @media ${device.laptop} { 
        margin-top: 0;
        align-items: flex-start;

    }

 `;
