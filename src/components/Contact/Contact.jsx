import './Contact.css';
import github from '/src/assets/images/github.svg';
import linkedin from '/src/assets/images/linkedin.svg';
import whatsapp from '/src/assets/images/whatsapp.svg';
import instagram from '/src/assets/images/instagram.svg';
import twitter from '/src/assets/images/twitter.svg';





export const Contact = () => {
  return (
    <section id="contact">
        <h2>Where to find me:</h2>
        <img src={github} alt="" />
        <img src={linkedin} alt="" />
        <img src={whatsapp} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />

        <form action=""></form>

    </section>
  )
}
