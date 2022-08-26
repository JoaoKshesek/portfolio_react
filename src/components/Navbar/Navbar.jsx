import './Navbar.css';

export const NavBar = () => {

  return (
    <section id="navbar">
      <div className='nav-toggler'>
        <span></span>
      </div>
      <nav id="navigation" className='navigation'>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </section>
  )
}
