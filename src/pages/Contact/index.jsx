import '../../assets/translations/i18n'
import { useTranslation } from 'react-i18next';

import { FiMail, FiPhone, FiUser } from 'react-icons/fi'

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"



import { Container } from "./styles";

export function Contact(){
    const {t} = useTranslation();
    return(
        <Container>
            <h2>{t('resume_contact')}</h2>
            <Input 
                placeholder={t('resume_contact_name')}
                type="text"
                icon={FiUser}
            />
            <Input 
                placeholder={t('resume_contact_phone')}
                type="email"
                icon={FiPhone}
            />
            <Input 
                placeholder={t('resume_contact_email')}
                type="email"
                icon={FiMail}
            />
            <Textarea 
                placeholder={t('resume_contact_message')}
            />
            <Button title={t('resume_contact_button')} />



        </Container>
    )
}