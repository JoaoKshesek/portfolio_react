import '../../assets/translations/i18n'
import { useTranslation } from 'react-i18next';

import { FiMail, FiPhone, FiUser } from 'react-icons/fi'
import astronautCoding from '../../assets/images/astronaut-coding.png';


import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"

import { Container } from "./styles";

export function Contact(){
    const {t} = useTranslation();
    return(
        <Container>
            <h2>{t('contact')}</h2>
            <div className='teste'>

            <div>
                <img src={astronautCoding} alt="" />
            </div>
            <div className='form'>

            <Input 
                placeholder={t('contact_name')}
                type="text"
                icon={FiUser}
                />
            <Input 
                placeholder={t('contact_phone')}
                type="email"
                icon={FiPhone}
                />
            <Input 
                placeholder={t('contact_email')}
                type="email"
                icon={FiMail}
                />
            <Textarea 
                placeholder={t('contact_message')}
                />
            <Button title={t('contact_button')} />
                </div>
            </div>
        </Container>
    )
}