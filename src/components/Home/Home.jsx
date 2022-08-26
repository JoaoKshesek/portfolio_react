import './Home.css';
import astronaut from '/src/assets/images/astronaut.png';

export const Home = () => {
  return (
    <section id="home">
      <header>
        <div className="header-text">
          <h1>Hi! I'm João Valter</h1>
          <h2>A Physics enthusiast</h2>
          <p>Graduating in Systems Analysis and Development with successful experience in developing logical
solutions to complex problems.</p>
        </div>
        <div className="header-image">
          <img src={astronaut} alt="Astronaut reading"/>
        </div>
      </header>
    </section>
  )
}
