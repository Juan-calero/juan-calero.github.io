import React from 'react';
import Curriculo from './curriculo/Curriculo';
import Form from './form/Form';

function Contact() {
    return (
        <section className="contato" id="contato">
            <div className="contatoto">
                <div className="contatos">
                    <h2>Contactos</h2>
                    <Form />
                </div>
                <Curriculo />
            </div>
        </section>
    )
}


export default Contact;
