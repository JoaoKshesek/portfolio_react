import styled from 'styled-components';
import { device } from '../../components/MediaQuery'


export const Container = styled.section`
    > hr {
            background: ${({ theme }) => theme.COLORS.GRADIENT};
            height: 1px; 
            width: 100%;
            border: none;

            @media ${device.laptop} { 
                width: 1100px;
                margin: 0 auto;
            }

            @media ${device.laptopL} { 
                width: 1200px;
            }
        } 
 `;
