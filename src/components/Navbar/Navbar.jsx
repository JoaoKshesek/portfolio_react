import { useState } from 'react';
import './Navbar.css';

export const NavBar = () => {
  const [state, setState] = useState(false)

  const toggle = () => {
    setState(!state);
  }

  return (
    <section id="navbar">
      <div className={'nav-toggler ' + (state ? 'open' : '')} onClick={toggle}>
        <span></span>
      </div>
      <nav id="navigation" className={'navigation ' + (state ? 'open' : '')} onClick={toggle}>
        <ul>
          <li><a href="#home"  className='active'>Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
    </section>
  )
}
