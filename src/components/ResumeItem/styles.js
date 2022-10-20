import styled from 'styled-components';
import { device } from '../../components/MediaQuery'


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px; 
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
    > a h3:hover {
        background: ${({ theme }) => theme.COLORS.GRAY_500};; 
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        }
    @media ${device.laptop} { 
        margin-top: 0;
        align-items: flex-start;
        max-width: 700px;
    }
 `;
