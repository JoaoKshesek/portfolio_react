import '../../assets/translations/i18n'
import { useTranslation } from 'react-i18next';

import { Section } from "../../components/Section"
import { ResumeItem } from "../../components/ResumeItem"
import { Content } from "../../components/Content"


import { Container,} from "./styles";

export function Resume(){
    const {t} = useTranslation();
    return(
        <Container id="resume">
            <Content>
                <Section title={t('resume_work')}>

                    <ResumeItem>
                        <a href="https://signotech.com.br/" target="_blank"><h3>{t('resume_job4_company')}</h3></a>
                        <p><span>{t('resume_job4_occupation')}</span> • {t('resume_job4_date')}</p>
                        <p>{t('resume_job4_details')}</p>
                        <p><span>{t('resume_job3_occupation')}</span> • {t('resume_job3_date')}</p>
                        <p>{t('resume_job3_details')}</p>
                    </ResumeItem>
                    {/* <ResumeItem>
                        <a href="http://www.despachanteduarte.com.br/" target="_blank"><h3>{t('resume_job2_company')}</h3></a>
                        <p><span>{t('resume_job2_occupation')}</span> • {t('resume_job2_date')}</p>
                        <p>{t('resume_job2_details')}</p>
                    </ResumeItem>

                    <ResumeItem title={t('resume_job1_company')}>
                        <a href="https://portalciveltrabalhista.com.br/" target="_blank"><h3>{t('resume_job1_company')}</h3></a>
                        <p><span>{t('resume_job1_occupation')}</span> • {t('resume_job1_date')}</p>
                        <p>{t('resume_job1_details')}</p>
                    </ResumeItem> */}
                </Section>
            </Content>
            <hr />

            <Content>
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

                {/* <ResumeItem>
                    <a href="https://onebitcode.com/" target="_blank"><h3>{t('resume_course2_company')}</h3></a>
                    <p><span>{t('resume_course2_title')}</span> • {t('resume_course2_date')}</p>
                    <p>{t('resume_course2_details')}</p>
                </ResumeItem>

                <ResumeItem>
                    <a href="https://pythonacademy.com.br/" target="_blank"><h3>{t('resume_course1_company')}</h3></a>
                    <p><span>{t('resume_course1_title')}</span> • {t('resume_course1_date')}</p>
                    <p>{t('resume_course1_details')}</p>
                </ResumeItem> */}
            </Section>
            </Content>

            <hr />
            <Content>
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
            </Content>
            <hr />
        </Container>
    )
}