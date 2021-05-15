import React from 'react';
import Curriculo from './curriculo/Curriculo';
import Form from './form/Form';
import Matrix from './Matrix';

function Contact() {
    return (
        <section className="contato" id="contato">
            <div className="contatoto">
                <div className="contatos">
                    <h2>Contactos</h2>
                    <Form />
                </div>
                <div className="matrix">
                    <div className="matrix__box">
                        <Matrix />
                        <Matrix />
                        <Matrix />
                        <Matrix />
                        <Matrix />
                        <Matrix />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Contact;
