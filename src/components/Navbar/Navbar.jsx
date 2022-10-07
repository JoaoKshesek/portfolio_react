import { useState } from 'react';
import './Navbar.css';

import usaFlag from '/src/assets/images/usa.png';
import brasilFlag from '/src/assets/images/brasil.png';

import '../../assets/translations/i18n'
import { useTranslation } from 'react-i18next';

export const NavBar = () => {
  const [state, setState] = useState(false)

  const {t, i18n} = useTranslation();

  const changeLanguage = value => {
    i18n.changeLanguage(value)
  }

  const toggle = () => {
    setState(!state);
  }

  return (
    <section id="navbar">
      <div className={'nav-toggler ' + (state ? 'open' : 'close')} onClick={toggle}>
        <span></span>
      </div>
      <nav id="navigation" className={'navigation ' + (state ? 'open' : 'close')} onClick={toggle}>
        <ul>
          <li><a href="#home"  className='active'>{t('navbar_home')}</a></li>
          <li><a href="#about">{t('navbar_about')}</a></li>
          <li><a href="#resume">{t('navbar_resume')}</a></li>
          <li><a href="#projects">{t('navbar_projects')}</a></li>
          <li><a href="#contact">{t('navbar_contact')}</a></li>
          <li className='translate'>
            <button onClick={() => changeLanguage('en')}>
              <img src={usaFlag} />
            </button>  
            <button onClick={() => changeLanguage('pt')}>
              <img src={brasilFlag}/>
            </button>
            
          </li>
        </ul>
      </nav>
    </section>
  )
}
