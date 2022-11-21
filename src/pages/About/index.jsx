import '../../assets/translations/i18n'
import { useTranslation } from 'react-i18next';

import hero from '/src/assets/images/hero.png';
import github from '/src/assets/images/github.svg';
import linkedin from '/src/assets/images/linkedin.svg';
import whatsapp from '/src/assets/images/whatsapp.svg';

import { Button } from "../../components/Button"

import { Container, Content, Description, Img, SocialMedia, ResumeBtn, Links } from "./styles";

export function About(){
    const {t} = useTranslation();
    return(
        <Container id="about">
            <Content>
                <Img>
                    <img src={hero} alt="" />
                </Img>
                <Description>
                    <h2>{t('about_me')}</h2>
                    <p>{t('about_p1')}</p>
                    <p>{t('about_p2')}</p>
                    <p>{t('about_p3')}</p>
                    <Links>
                        <SocialMedia>
                            <a href="https://github.com/JoaoKshesek" target="_blank">
                                <img src={github} alt="Link Github" />
                            </a>
                            <a href="https://www.linkedin.com/in/joao-valter-kshesek/" target="_blank">
                                <img src={linkedin} alt="Link LinkedIn" />
                            </a>
                            <a href="https://api.whatsapp.com/send/?phone=5541995531007" target="_blank">
                                <img src={whatsapp} alt="Link WhatsApp" />
                            </a>
                        </SocialMedia>
                        <ResumeBtn>
                            <a href="https://github.com/JoaoKshesek/portfolio_react/tree/main/src/components/Resume" target="blank">
                                <Button title={t('about_download_EN')} /> 
                            </a>
                            <a href="https://github.com/JoaoKshesek/portfolio_react/tree/main/src/components/Resume" target="blank">
                                <Button title={t('about_download_PT')} /> 
                            </a>
                        </ResumeBtn>
                    </Links>
                </Description>
            </Content>
        </Container>
    )
}