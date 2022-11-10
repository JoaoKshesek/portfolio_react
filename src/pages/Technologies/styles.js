import styled from 'styled-components';
import { device } from '../../components/MediaQuery'


export const Container = styled.section`
    > hr {
            background: ${({ theme }) => theme.COLORS.GRADIENT};
            height: 1px; 
            width: 100%;
            border: none;
        }
    
 `;


export const Technologie = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 50px;
    margin: -30px auto 0;
    max-width: 980px;

    @media ${device.tablet} { 
        gap: 50px;
        }
        @media ${device.laptop} { 
        gap: 0;
        }
    @media ${device.laptopL} { 
        max-width: 1100px;
        }

`;