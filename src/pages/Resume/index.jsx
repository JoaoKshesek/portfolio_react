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

import { Container } from "./styles";

export function Resume(){
    const {t} = useTranslation();
    return(
        <Container>
            <Section title={t('resume_work')}>
                <ResumeItem title={t('resume_job2_company')}>
                    <p><span>{t('resume_job2_occupation')}</span> • {t('resume_job2_date')}</p>
                    <p>{t('resume_job2_details')}</p>
                </ResumeItem>

                <ResumeItem title={t('resume_job1_company')}>
                    <p><span>{t('resume_job1_occupation')}</span> • {t('resume_job1_date')}</p>
                    <p>{t('resume_job1_details')}</p>
                </ResumeItem>
            </Section>

            <hr />

            <Section title={t('resume_education')}>
                <ResumeItem title={t('resume_college_title')}>
                    <p><span>{t('resume_college_course')}</span> • {t('resume_college_date')}</p>
                    <p>{t('resume_college_details')}</p>
                </ResumeItem>

                <ResumeItem title={t('resume_course3_company')}>
                    <p><span>{t('resume_course3_title')}</span> • {t('resume_course3_date')}</p>
                    <p>{t('resume_course3_details')}</p>
                </ResumeItem>

                <ResumeItem title={t('resume_course2_company')}>
                    <p><span>{t('resume_course2_title')}</span> • {t('resume_course2_date')}</p>
                    <p>{t('resume_course2_details')}</p>
                </ResumeItem>

                <ResumeItem title={t('resume_course1_company')}>
                    <p><span>{t('resume_course1_title')}</span> • {t('resume_course1_date')}</p>
                    <p>{t('resume_course1_details')}</p>
                </ResumeItem>
            </Section>

            <hr />

            <Section title={t('resume_language')}>
                <ResumeItem title={t('resume_portuguese')}>
                    <p>{t('resume_portuguese_details')}</p>
                </ResumeItem>

                <ResumeItem title={t('resume_english')}>
                    <p>{t('resume_english_details')}</p>
                </ResumeItem>
            </Section>

            <hr />

            <Section title={t('resume_technologies')}>
                <p>{t('resume_technologies_description')}</p>

                <img src={html} alt="HTML 5 Logo" />
                <ResumeItem title="HTML 5" >
                    <p>{t('resume_technologies_html')}</p>
                </ResumeItem>

                <img src={css} alt="CSS 3 Logo" />
                <ResumeItem title="CSS 3">
                    <p>{t('resume_technologies_css')}</p>
                </ResumeItem>

                <img src={javascript} alt="JavaScript Logo" />
                <ResumeItem title="JavaScript">
                    <p>{t('resume_technologies_javascript')}</p>
                </ResumeItem>

                <img src={react} alt="ReactJS Logo" />
                <ResumeItem title="ReactJS">
                    <p>{t('resume_technologies_react')}</p>
                </ResumeItem>

                <img src={node} alt="NodeJS Logo" />
                <ResumeItem title="NodeJS">
                    <p>{t('resume_technologies_nodejs')}</p>
                </ResumeItem>

                <img src={git} alt="Git Logo" />
                <ResumeItem title="Git">
                    <p>{t('resume_technologies_git')}</p>
                </ResumeItem>

            </Section>

            <hr />
        </Container>
    )
}