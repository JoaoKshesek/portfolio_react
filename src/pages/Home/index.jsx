import '../../assets/translations/i18n'
import { useTranslation } from 'react-i18next';
import { ReactNebula  } from "@flodlc/nebula";

import Typed from 'typed.js'
import { useEffect, useRef } from 'react';
import astronaut from '../../assets/images/astronaut.png';

import { Container, Content, Main, Header, Img, Button } from "./styles";

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
        <Container id="home">
            <ReactNebula config={{
               starsCount: 1000,
               starsColor: "#FFFFFF",
               starsRotationSpeed: 3,
               cometFrequence: 100,
               nebulasIntensity: 8,
               bgColor: "rgb(8,8,8)",
               sunScale: 5,
               planetsScale: 4,
               solarSystemOrbite: 20,
               solarSystemSpeedOrbit: 60
           }} />
          <Content>
            <Main>
                <Header>
                    <h1>{t('header_title')}</h1>
                    <h2>
                        <span ref={el}></span>
                    </h2>
                    <p>{t('header_description')}</p>
                </Header>
            </Main>
            <a href="#about">
              <Button>
                {t('header_button')}
              </Button>
            </a>
          </Content>

        </Container>
    )
}