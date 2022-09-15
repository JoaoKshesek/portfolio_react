import './Footer.css';
import linkedin from '/src/assets/images/linkedin.svg';
import whatsapp from '/src/assets/images/whatsapp.svg';
import instagram from '/src/assets/images/instagram.svg';
import twitter from '/src/assets/images/twitter.svg';

export const Footer = () => {
  return (
    <section id="footer">
        <img src={linkedin} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <p>Copyright 2022. All Rights Reserved</p>
    </section>
  )
}
