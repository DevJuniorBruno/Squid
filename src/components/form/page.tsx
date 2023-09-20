'use client'

import './form.css';
import emailjs from '@emailjs/browser';
import { useState, FormEvent,ChangeEvent } from 'react';
import { IMaskInput } from 'react-imask';

export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState<string>('');

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }
    function sendEmail(event: FormEvent) {
        event.preventDefault();

        if (name === "" || email === "" || message === "" || phone ==="") {
            alert("Preencha todos os campos");
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
            phone: phone
        }

        emailjs.send("service_xsn0wuz", "template_om1nig4", templateParams, 'rnRNt0HPmkK7VUCM2')
            .then((response) => {
                console.log("email enviado", response.status, response.text);
                setName("")
                setEmail("")
                setPhone("")
                setMessage("")
            }, (err) => {
                console.log(err)
            })

    }

    return (
            
            <form className='form' onSubmit={sendEmail} >
                <input
                    className='input'
                    type='text'
                    placeholder="Seu nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <input
                    className='input'
                    type='text'
                    placeholder="Seu e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                
                {
                /* eslint-disable */
                <IMaskInput
                    className='input'
                    type='text'
                    placeholder='Seu número (xx) xxxxx-xxxx'
                    onChange={handlePhoneChange}
                    value={phone}
                    mask="(00) 00000-0000"
                />
                /* eslint-enable */
                }

                <textarea
                    className='textArea'
                    placeholder="Mensagem..."
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />

                <input className='button_Contact' type="submit" value="ENVIAR" />
            </form>
    )


}