import styled from 'styled-components';
import { device } from '../../components/MediaQuery'


export const Container = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    > img {
        margin: 30px 0 -30px 0;
    }
    > a {
        width: 100%;
    }
    @media ${device.laptop} { 
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
    }
 `;
export const Content = styled.div`
            display: flex;
            flex-direction: column;
        @media ${device.laptop} { 
            width: 800px;
            align-items: flex-start;
            gap: 30px;
        }
`;
export const Teste = styled.div`
        display: flex;
        width: 100%;
        justify-content: center;

        @media ${device.laptop} { 
            width: 340px;
            justify-content: flex-start;

        }

    
`;