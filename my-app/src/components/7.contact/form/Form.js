import React from 'react';

export default function Form(params) {
    return (
        <form className="contatos__form" action="">
            <label htmlFor="">Nome</label>
            <input type="text" />
            <label htmlFor="">Telefone</label>
            <input type="text" />
            <label htmlFor="">Mensagem</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <input className="btn" type="button" value="Enviar"/>
        </form>
    )
};
