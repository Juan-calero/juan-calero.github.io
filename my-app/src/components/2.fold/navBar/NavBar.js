import React from 'react';
import { cursorHoverBig, cursorHoverSmall } from '../../utils/CursorHoverHandler';

function NavBar() {
    return (
        <ul className="fold__navbar"
            onMouseEnter={cursorHoverBig}
            onMouseLeave={cursorHoverSmall}
        >
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#oQueFaco">O que faço</a></li>
            <li><a href="#experiencia">Experiência</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <button onClick={() => window.location.replace('/#contato')} className="btn">Contactos</button>
        </ul>
    )
}

export default NavBar;