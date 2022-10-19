import styled from 'styled-components';
import { device } from '../../components/MediaQuery'


export const Container = styled.section`
    width: 100%;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    padding: 50px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    h2 {
        font-size: 2.8rem;
        font-weight: 700;
        letter-spacing: 0.8px;
        line-height: 1;
        color: ${({ theme }) => theme.COLORS.GRAY_500};
        position: relative;
        text-transform: uppercase;
        margin-bottom: 15px;
    }
    h2::before {
        content: '';
        height: 2px;
        width: 100%;
        background: ${({ theme }) => theme.COLORS.GRADIENT};
        position: absolute;
        top: 100%;
        left: 0;
        
    }
    h2::after {
        content: '';
        height: 2px;
        width: 50%;
        background: ${({ theme }) => theme.COLORS.GRADIENT};
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 8px;
    }
    
    h3 {
        font-size: 2.5rem;
        font-weight: 700;
        letter-spacing: 0.8px;
        line-height: 1;
        background: ${({ theme }) => theme.COLORS.GRADIENT};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    p {
        font-size: 16px;
        letter-spacing: 0.8px;
        line-height: 1.5em;
        font-family: var(--ff-primary);
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        text-align: justify;
        padding-top: 10px;

        > span {
            font-weight: bold;
            font-style: italic;
        }
    }
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
    @media ${device.laptop} { 
            max-width: 800px;
            margin-top: -30px;
        }
`;