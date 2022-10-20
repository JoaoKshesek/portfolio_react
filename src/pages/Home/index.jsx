import '../../assets/translations/i18n'
import { useTranslation } from 'react-i18next';

import Typed from 'typed.js'
import { useEffect, useRef } from 'react';
import astronaut from '../../assets/images/astronaut.png';

import { Container, Content, Header, Img, Button } from "./styles";

export function Home(){
    const {t} = useTranslation();

    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [t('header_career_01'), t('header_career_02'), t('header_career_03')],

        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        loop: true
      });
  

      return () => {
        typed.destroy();
      };
    }, []);

    
    return(
        <Container>
          <Content>
              <Header>
                  <h1>{t('header_title')}</h1>
                  <h2>
                      <span ref={el}></span>
                  </h2>
                  <p>{t('header_description')}</p>
              </Header>
              <Img>
                <img src={astronaut} alt="Astronaut reading"/>
              </Img>
          </Content>


          <Button>
            {t('header_button')}
          </Button>

        </Container>
    )
}