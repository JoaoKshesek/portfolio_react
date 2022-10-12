import '../../assets/translations/i18n'
import { useTranslation } from 'react-i18next';


import linkedin from '/src/assets/images/linkedin-small.svg';
import instagram from '/src/assets/images/instagram.svg';
import twitter from '/src/assets/images/twitter.svg';



import { Container, SocialMedia } from "./styles";

export function Footer(){
    const {t} = useTranslation();
    return(
        <Container>
            <SocialMedia>
                <a href="https://www.linkedin.com/in/joao-valter-kshesek/" target="_blank">
                    <img src={linkedin} alt="Link LinkedIn" />
                </a>
                <a href="https://www.instagram.com/ksk_joao/" target="_blank">
                    <img src={instagram} alt="Link Instagram" />
                </a>
                <a href="https://twitter.com/ksk_eu" target="_blank">
                    <img src={twitter} alt="Link Twitter" />
                </a>
            </SocialMedia>
            <p>{t('copyright')}</p>
        </Container>
    )
}