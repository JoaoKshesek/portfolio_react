import '../../assets/translations/i18n'
import { useTranslation } from 'react-i18next';

import html from '/src/assets/images/html.png';
import css from '/src/assets/images/css.png';
import javascript from '/src/assets/images/javascript.png';
import react from '/src/assets/images/react.png';
import node from '/src/assets/images/node.png';
import git from '/src/assets/images/git.png';

import { Section } from "../../components/Section"
import { ResumeItem } from "../../components/ResumeItem"

import { Container, Technologies, TechItem } from "./styles";

export function Resume(){
    const {t} = useTranslation();
    return(
        <Container>
            <Section title={t('resume_work')}>
                <ResumeItem>
                    <a href="http://www.despachanteduarte.com.br/" target="_blank"><h3>{t('resume_job2_company')}</h3></a>
                    <p><span>{t('resume_job2_occupation')}</span> • {t('resume_job2_date')}</p>
                    <p>{t('resume_job2_details')}</p>
                </ResumeItem>

                <ResumeItem title={t('resume_job1_company')}>
                    <a href="https://portalciveltrabalhista.com.br/" target="_blank"><h3>{t('resume_job1_company')}</h3></a>
                    <p><span>{t('resume_job1_occupation')}</span> • {t('resume_job1_date')}</p>
                    <p>{t('resume_job1_details')}</p>
                </ResumeItem>
            </Section>

            <hr />

            <Section title={t('resume_education')}>
                <ResumeItem>
                    <a href="https://descomplica.com.br/faculdade/" target="_blank"><h3>{t('resume_college_title')}</h3></a>
                    <p><span>{t('resume_college_course')}</span> • {t('resume_college_date')}</p>
                    <p>{t('resume_college_details')}</p>
                </ResumeItem>

                <ResumeItem>
                    <a href="https://www.rocketseat.com.br/" target="_blank"><h3>{t('resume_course3_company')}</h3></a>
                    <p><span>{t('resume_course3_title')}</span> • {t('resume_course3_date')}</p>
                    <p>{t('resume_course3_details')}</p>
                </ResumeItem>

                <ResumeItem>
                    <a href="https://onebitcode.com/" target="_blank"><h3>{t('resume_course2_company')}</h3></a>
                    <p><span>{t('resume_course2_title')}</span> • {t('resume_course2_date')}</p>
                    <p>{t('resume_course2_details')}</p>
                </ResumeItem>

                <ResumeItem>
                    <a href="https://pythonacademy.com.br/" target="_blank"><h3>{t('resume_course1_company')}</h3></a>
                    <p><span>{t('resume_course1_title')}</span> • {t('resume_course1_date')}</p>
                    <p>{t('resume_course1_details')}</p>
                </ResumeItem>
            </Section>

            <hr />

            <Section title={t('resume_language')}>
                <ResumeItem>
                    <h3>{t('resume_portuguese')}</h3>
                    <p>{t('resume_portuguese_details')}</p>
                </ResumeItem>

                <ResumeItem>
                    <h3>{t('resume_english')}</h3>
                    <p>{t('resume_english_details')}</p>
                </ResumeItem>
            </Section>

            <hr />

            <Technologies>
            <Section title={t('resume_technologies')}>
                <p>{t('resume_technologies_description')}</p>
            </Section>

                
                <TechItem>
                    <img src={html} alt="HTML 5 Logo" />
                    <ResumeItem>
                        <h3>HTML 5</h3>
                        <p>{t('resume_technologies_html')}</p>
                    </ResumeItem>
                </TechItem>

                <TechItem>
                    <img src={css} alt="CSS 3 Logo" />
                    <ResumeItem>
                        <h3>CSS 3</h3>
                        <p>{t('resume_technologies_css')}</p>
                    </ResumeItem>
                </TechItem>

                <TechItem>
                    <img src={javascript} alt="JavaScript Logo" />
                    <ResumeItem>
                        <h3>JavaScript</h3>
                        <p>{t('resume_technologies_javascript')}</p>
                    </ResumeItem>
                </TechItem>

                <TechItem>
                    <img src={react} alt="ReactJS Logo" />
                    <ResumeItem>
                        <h3>ReactJS</h3>
                        <p>{t('resume_technologies_react')}</p>
                    </ResumeItem>
                </TechItem>

                <TechItem>
                    <img src={node} alt="NodeJS Logo" />
                    <ResumeItem>
                        <h3>NodeJS</h3>
                        <p>{t('resume_technologies_nodejs')}</p>
                    </ResumeItem>
                </TechItem>

                <TechItem>
                    <img src={git} alt="Git Logo" />
                    <ResumeItem>
                        <h3>Git</h3>
                        <p>{t('resume_technologies_git')}</p>
                    </ResumeItem>
                </TechItem>
            </Technologies>
            

            <hr />
        </Container>
    )
}