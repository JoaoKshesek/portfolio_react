import './Home.css';
import astronaut from '/src/assets/images/astronaut.png';
import Typed from 'typed.js'
import { useEffect, useRef } from 'react';

export const Home = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Handy", "Mandy", "Candy", "More Strings"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home">
      <header>
        <div className="header-text margin">
          <h1>Hi! I'm João Valter</h1>
          <h2>
          <span ref={el}></span>
          </h2>
          <p>Graduating in Systems Analysis and Development with successful experience in developing logical
solutions to complex problems.</p>
        </div>
        <div className="header-image margin">
          <img src={astronaut} alt="Astronaut reading"/>
        </div>
      </header>
    </section>
  )
}
