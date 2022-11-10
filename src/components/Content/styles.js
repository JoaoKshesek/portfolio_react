import styled from 'styled-components';
import { device } from '../../components/MediaQuery'

export const Container = styled.section`
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