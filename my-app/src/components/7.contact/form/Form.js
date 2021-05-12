import React from 'react';
import { cursorHoverBig, cursorHoverSmall } from '../../utils/CursorHoverHandler';

export default function Form(params) {
    return (
        <form
            onMouseEnter={cursorHoverBig}
            onMouseLeave={cursorHoverSmall}
            className="contatos__form" action="">
            <label htmlFor="">Nome</label>
            <input type="text" />
            <label htmlFor="">Telefone</label>
            <input type="text" />
            <label htmlFor="">Mensagem</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <input className="btn" type="button" value="Enviar" />
        </form>
    )
};
