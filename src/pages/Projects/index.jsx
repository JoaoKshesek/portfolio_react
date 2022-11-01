import '../../assets/translations/i18n'
import { useTranslation } from 'react-i18next';

import quebraGalho from '/src/assets/images/quebra-galho.png';
import { Section } from "../../components/Section"
import { ResumeItem } from "../../components/ResumeItem"
import { Button } from "../../components/Button"


import { Container, Content } from "./styles";

export function Projects(){
    const {t} = useTranslation();
    return(
        <Container>
            <Section title={t('resume_projects')}>
                <p>{t('resume_projects_description')}</p>
            </Section>
                <Content>
                    <img src={quebraGalho} alt="imagem" />
                    <ResumeItem>
                        <h3>{t('resume_project1_title')}</h3>
                        <p>{t('resume_project1_description')}</p>
                        <a href="https://github.com/JoaoKshesek/QuebraGalho" target="_blank">
                            <Button title={t('resume_project1_button')} /> 
                        </a>
                    </ResumeItem> 
                </Content>
        </Container>
    )
}