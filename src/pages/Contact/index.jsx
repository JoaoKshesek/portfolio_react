import '../../assets/translations/i18n'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import astronautCoding from '../../assets/images/astronaut-coding.png';

import { Input } from "../../components/Input"

import { Container, Main } from "./styles";

export function Contact() {
    const { t } = useTranslation();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const [message, setMessage] = useState('')
    return (
        <Container id="contact">
            <h2>{t('contact')}</h2>
            <Main>

                <div className='img'>
                    <img src={astronautCoding} alt="" />
                </div>
                <form className='form'>
                    <Input>
                        <input 
                            type="text" 
                            id="name" 
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required

                        />
                        <label htmlFor="name">{t('contact_name')}</label>
                    </Input>

                    <Input>
                        <input 
                            type="phone" 
                            id="phone" 
                            name="phone"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            required

                        />
                        <label htmlFor="phone">{t('contact_phone')}</label>
                    </Input>

                    <Input>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                        <label htmlFor="email">{t('contact_email')}</label>
                    </Input>
                    <Input>
                        <textarea  
                            id="message" 
                            name="message"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            required
                        />
                        <label htmlFor="message">{t('contact_message')}</label>
                    </Input>
                    
                    <button type="submit" >{t('contact_button')}</button>
                </form>
            </Main>
        </Container>
    )
}