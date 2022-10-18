import styled from 'styled-components';
import { device } from '../../components/MediaQuery'

export const Container = styled.section`
> nav {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 75vw;
    height: 100vh;
    background: linear-gradient(95deg, rgba(170, 54, 124, 0.95), rgba(74, 47, 189, 0.95));
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    right: -100vw;

    > ul {
        width: 100%;
        
        >li a{
            text-transform: uppercase;
            font-family: var(--ff-primary);
            font-size: 1.6rem;
            color: white;
            text-decoration: none;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
    }

}

.translate {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
.translate button {
    background: none;
    border: none;
    cursor: pointer;
}

.nav-toggler
{
    width: 5rem;
    height: 5rem;
    background: linear-gradient(100deg, rgba(170, 54, 124, 0.8), rgba(74, 47, 189, 0.9));
    position: fixed;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.nav-toggler span
{
    height: 2px;
    width: 2.5rem;
    background: white;
    display: inline-block;
    position: relative;
}
.nav-toggler.open {
    z-index: 20;
}
.nav-toggler.open span
{
    background-color: transparent;
}
.nav-toggler span::before
{
    content: '';
    height: 2px;
    width: 2.5rem;
    background: white;
    position: absolute;
    top: -6px;
    left: 0;
}
.nav-toggler.open span::before
{
    transform: rotate(45deg);
    top: 0;
    transition: all 0.3s ease;
}
.nav-toggler span::after
{
    content: '';
    height: 2px;
    width: 2.5rem;
    background: white;
    position: absolute;
    top: 6px;
    left: 0;
}
.nav-toggler.open span::after
{
    transform: rotate(-45deg);
    top: 0;
    transition: all 0.3s ease;
}

.navigation.open {
    right: 0;
    z-index: 10;
    transition: all 0.3s ease;
}

.navigation.close {
    transition: all 0.3s ;
}

.active {
  background: rgba(244,244,244, 0.5);
  color: rgba(170, 29, 151, 1);
}

@media ${device.laptop} { 
    nav {
        display: flex;
        width: 100%;
        right: 0;
        position: fixed;
        height: 50px;
        background: rgba(0,0,0,0.1);
        z-index: 100;

        box-shadow: none;

        > ul {
            display: flex;
            justify-content: center;
            gap: 50px;
            > li a:hover {
                background: ${({ theme }) => theme.COLORS.GRADIENT};
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }
    .nav-toggler {
        display: none;
    }
    .active {
        background: ${({ theme }) => theme.COLORS.GRADIENT};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;
    }
    .active::before {
        content: '';
        height: 2px;
        width: 100%;
        background: ${({ theme }) => theme.COLORS.GRADIENT};
        position: absolute;
        top: 40px;
        left: 0;
        
    }
}

 `;
