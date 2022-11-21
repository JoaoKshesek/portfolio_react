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
        <Container id="projects">
            <Content>
                <Section title={t('resume_projects')}>
                    <br/><p>{t('resume_projects_description')}</p>
                </Section>
            </Content>
                
            <Main>

                <ProjectItem>
                    <div className="img img-1"> 

                    </div>
                    <div className='texto texto-1'>
                        <h3>{t('resume_project2_title')}</h3>
                        <p>{t('resume_project2_description')}</p>
                        <a href="https://github.com/JoaoKshesek/QuebraGalho" target="_blank">
                            <Button title={t('resume_project_button')} /> 
                        </a>
                    </div>
                </ProjectItem>
                <ProjectItem>

                    <div className='texto texto-2'>
                        <h3>{t('resume_project1_title')}</h3>
                        <p>{t('resume_project1_description')}</p>
                        <a href="https://github.com/JoaoKshesek/QuebraGalho" target="_blank">
                            <Button title={t('resume_project_button')} /> 
                        </a>
                    </div>
                    <div className="img img-2"> 

                    </div>
                </ProjectItem>

            
                </Main>

        </Container>
    )
}