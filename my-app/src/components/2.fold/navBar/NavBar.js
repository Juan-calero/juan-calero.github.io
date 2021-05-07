import React from 'react';

function NavBar(){
    return (
        <ul className="fold__navbar">
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#oquefaco">O que faço</a></li>
            <li><a href="#experiencia">Experiência</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <button className="btn">Contactos</button>
        </ul>
    )
}

export default NavBar;