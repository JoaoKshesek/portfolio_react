import styled from 'styled-components';
import galaxy from '../../assets/images/purple-galaxy.jpg'

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


  .wall {
    background: url(${galaxy});
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    animation: fade 12s infinite linear;
    animation-delay: 0;
  }

  .wall-right {
    transform: rotateY(90deg) translateZ(500px);
  }
  .wall-right-top {
    transform: rotateY(45deg) translateZ(500px);
    background: green;
  }
  
  .wall-left {
    transform: rotateY(-90deg) translateZ(500px);
  }
  
  .wall-top {
    transform: rotateX(90deg) translateZ(500px);
  }
  
  .wall-bottom {
    transform: rotateX(-90deg) translateZ(500px);
  }
  
  .wall-back {
    transform: rotateX(180deg) translateZ(500px);
  }
  
  
  @keyframes fade {
    0%{
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }


    @keyframes move {
    0%{
      transform: translateZ(-500px) rotate(0deg);
    }
    100%{
      transform: translateZ(500px) rotate(0deg);
    }
  }
   
`;

