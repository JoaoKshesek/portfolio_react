import './Projects.css';
import quebraGalho from '/src/assets/images/quebra-galho.png';

export const Projects = () => {
  return (
    <section id="projects">
      <div className="projects margin">

      <div className="col-left">
        <h2><span>PROJECTS</span></h2>
      </div>
        <p>Here are my latest projects :</p>
        <div className="col-right">
          <div className="portfolio-item">
            <div className="project-description">
              <h3>Quebra-Galho</h3>
              <p>This was my first project developing the Front and Back-end, using PHP as the main language and MySQL for the database. The project consists of a platform where the user registers an item to be borrowed, informing the date to be returned.</p>
              <a href="#" className='btn'>See on Github</a>
            </div>
            <div className="project-img">
              <img src={quebraGalho} alt="" />
            </div>
          </div>
          <div className="portfolio-item">
            <div className="project-description">
              <h3>Quebra-Galho</h3>
              <p>This was my first project developing the Front and Back-end, using PHP as the main language and MySQL for the database. The project consists of a platform where the user registers an item to be borrowed, informing the date to be returned.</p>
            </div>
            <div className="project-img">
              <img src={quebraGalho} alt="" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
