import '../../assets/translations/i18n'
import { useTranslation } from 'react-i18next';

import hero from '/src/assets/images/hero.png';
import github from '/src/assets/images/github.svg';
import linkedin from '/src/assets/images/linkedin.svg';
import whatsapp from '/src/assets/images/whatsapp.svg';

import { Button } from "../../components/Button"

import { Container, Links } from "./styles";

export function About(){
    const {t} = useTranslation();
    return(
        <Container>
            <h2>{t('about_me')}</h2>
            <p>{t('about_p1')}</p>
            <p>{t('about_p2')}</p>
            <p>{t('about_p3')}</p>


            <Links>
            <a href="">
                <img src={github} alt="Link Github" />
            </a>
            <a href="">
                <img src={linkedin} alt="Link Github" />
            </a>
            <a href="">
                <img src={whatsapp} alt="Link Github" />
            </a>
            </Links>

            <a href="https://github.com/JoaoKshesek/portfolio_react/tree/main/src/components/Resume" target="blank">
                <Button title={t('about_download_EN')} /> 
            </a>
            <a href="https://github.com/JoaoKshesek/portfolio_react/tree/main/src/components/Resume" target="blank">
                <Button title={t('about_download_PT')} /> 
            </a>

        </Container>
    )
}