import styled from 'styled-components';
import { device } from '../../components/MediaQuery'


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px; 

    > a h3:hover {
        background: ${({ theme }) => theme.COLORS.GRAY_500};; 
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        }
    @media ${device.laptop} { 
        margin-top: 0;
        align-items: flex-start;

    }

 `;
