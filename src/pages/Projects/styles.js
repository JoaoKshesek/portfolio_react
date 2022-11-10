import styled from 'styled-components';
import { device } from '../../components/MediaQuery'


export const Container = styled.section`

 `;


export const Technologie = styled.div`
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
