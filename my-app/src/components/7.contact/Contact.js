import React from 'react';
import Curriculo from './curriculo/Curriculo';
import Form from './form/Form';

function Contact() {
    return (
        <section className="contato">
            <h2>Contactos</h2>
            <div className="contatos">
                <Form />
                <Curriculo />
            </div>
        </section>
    )
}


export default Contact;