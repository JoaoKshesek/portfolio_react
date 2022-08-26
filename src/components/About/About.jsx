import './About.css';
import hero from '/src/assets/images/hero.png';

export const About = () => {
  return (
    <section id="about">
      <div className='col-left'>
        <img src={hero} alt="Profile image" />
      </div>
      <div className='col-right'>
        <h2>About me</h2>  
        <p>
          I am fascinated by Physics and a discoverer in the field of programming. While I was studying Physics I had my first contact with a markup language: LaTeX. Since then I was curious about coding and, shortly after, I decided to study Systems Analysis and Development. 
        </p>
        <p>
          I am a motivated and well-organized person, always looking for a new way to learn.
        </p>
      </div>
    </section>
  )
}
