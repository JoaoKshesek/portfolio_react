import './About.css';
import hero from '/src/assets/images/hero.png';
import github from '/src/assets/images/github.svg';
import linkedin from '/src/assets/images/linkedin.svg';
import whatsapp from '/src/assets/images/whatsapp.svg';



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
        <p>
        At college I studied Python first and then PHP. But it was when I started studying HTML, CSS and JavaScript that I felt programming was what I really wanted to do for my life.
        </p>
        <div className='social-media'>
          <a href="https://github.com/JoaoKshesek" target="blank"><img src={github} alt="" /></a>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-valter-kshesek-165520213/" target="blank"><img src={linkedin} alt="" /></a>
          <a href="https://api.whatsapp.com/send?phone=5541995531007" target="blank"><img src={whatsapp} alt="" /></a>
        </div>
        <div className='resume'>
          <a href="#" className='btn'>Download resume EN_US</a>
          <a href="#" className='btn'>Download resume PT_BR</a>

        </div>
      </div>
    </section>
  )
}
