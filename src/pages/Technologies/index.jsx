import '../../assets/translations/i18n'
import { useTranslation } from 'react-i18next';

import html from '/src/assets/images/html.png';
import css from '/src/assets/images/css.png';
import javascript from '/src/assets/images/javascript.png';
import react from '/src/assets/images/react.png';
import node from '/src/assets/images/node.png';
import git from '/src/assets/images/git.png';

import { Section } from "../../components/Section"
import { Content } from "../../components/Content"
import { TechItem } from "../../components/TechItem"



import { Container, Technologie } from "./styles";

export function Technologies(){
    const {t} = useTranslation();
    return(
        <Container>
        
            
            <Content>
            <Section title={t('resume_technologies')}>
                <br/><p>{t('resume_technologies_description')}</p>
            </Section>
            </Content>
                
            <Technologie>

            
                <TechItem>
                    <img src={html} alt="HTML 5 Logo" />

                        <h3>HTML 5</h3>
                        <p>{t('resume_technologies_html')}</p>

                </TechItem>

                <TechItem>
                    <img src={css} alt="CSS 3 Logo" />

                        <h3>CSS 3</h3>
                        <p>{t('resume_technologies_css')}</p>

                </TechItem>

                <TechItem>
                    <img src={javascript} alt="JavaScript Logo" />

                        <h3>JavaScript</h3>
                        <p>{t('resume_technologies_javascript')}</p>

                </TechItem>

                <TechItem>
                    <img src={react} alt="ReactJS Logo" />

                        <h3>ReactJS</h3>
                        <p>{t('resume_technologies_react')}</p>

                </TechItem>

                <TechItem>
                    <img src={node} alt="NodeJS Logo" />

                        <h3>NodeJS</h3>
                        <p>{t('resume_technologies_nodejs')}</p>

                </TechItem>

                <TechItem>
                    <img src={git} alt="Git Logo" />

                        <h3>Git</h3>
                        <p>{t('resume_technologies_git')}</p>

                </TechItem>
            
                </Technologie>

            <hr />
        </Container>
    )
}