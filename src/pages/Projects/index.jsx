import '../../assets/translations/i18n'
import { useTranslation } from 'react-i18next';

import quebraGalho from '/src/assets/images/quebra-galho.png';
import focusTimer from '/src/assets/images/focusTimer.png';


import { Section } from "../../components/Section"
import { Content } from "../../components/Content"
import { Button } from "../../components/Button"
import { ProjectItem } from "../../components/ProjectItem"





import { Container, Main } from "./styles";

export function Projects(){
    const {t} = useTranslation();
    return(
        <Container>
            <Content>
                <Section title={t('resume_projects')}>
                    <br/><p>{t('resume_projects_description')}</p>
                </Section>
            </Content>
                
            <Main>

                <ProjectItem>
                    <img src={focusTimer} alt="imagem" />
                    <div className='teste'>
                        <h3>{t('resume_project1_title')}</h3>
                        <p>{t('resume_project1_description')}</p>
                        <a href="https://github.com/JoaoKshesek/QuebraGalho" target="_blank">
                            <Button title={t('resume_project1_button')} /> 
                        </a>
                    </div>
                </ProjectItem>
                <ProjectItem>
                    <img src={quebraGalho} alt="imagem" />
                    <div className='teste'>
                        <h3>{t('resume_project1_title')}</h3>
                        <p>{t('resume_project1_description')}</p>
                        <a href="https://github.com/JoaoKshesek/QuebraGalho" target="_blank">
                            <Button title={t('resume_project1_button')} /> 
                        </a>
                    </div>
                </ProjectItem>

            
                </Main>

        </Container>
    )
}