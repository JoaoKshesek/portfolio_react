import '../../assets/translations/i18n'
import { useTranslation } from 'react-i18next';


import { Section } from "../../components/Section"
import { ResumeItem } from "../../components/ResumeItem"
import { Button } from "../../components/Button"


import { Container } from "./styles";

export function Projects(){
    const {t} = useTranslation();
    return(
        <Container>
            <Section title={t('resume_projects')}>
                <p>{t('resume_projects_description')}</p>
                <ResumeItem title={t('resume_project1_title')}>
                    <p>{t('resume_project1_description')}</p>
                </ResumeItem>
                    <a href="https://github.com/JoaoKshesek/QuebraGalho" target="_blank">
                        <Button title={t('resume_project1_button')} /> 
                    </a>

            </Section>

        </Container>
    )
}