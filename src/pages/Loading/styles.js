import styled from 'styled-components';
import background from '../../assets/images/header-bg.png'



export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    background: #000;
    text-align: center;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
 `;


export const Content = styled.div`
    display: inline-block;
    vertical-align: middle;
    perspective: 5px;
    perspective-origin: 50% 50%;
    position: relative;

 `;

 
export const Wrap = styled.div`
    position: absolute;
    width: 1000px;
    height: 1000px;
    left: -500px;
    top: -500px;
    transform-style: preserve-3d;
    animation: move 12s infinite linear;
    animation-fill-mode: forwards;

    @keyframes move {
    0%{
      transform: translateZ(-300px) rotate(0deg);
    }
    100%{
      transform: translateZ(300px) rotate(0deg);
    }
  }
   
`;

