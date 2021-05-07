import React from 'react';
import Brain from '../../icons/brain_neon.png';
import SobreTitle from './SobreTitle';

function Sobre(){
    return (
        <section id="sobre" className="sobre">
            <img src={Brain} alt=""/>
            <SobreTitle />
            <p>Lorem ipsum amet consectetur adipisicing elit. Ullam soluta explicabo neque corporis repellat mollitia. Molestias ipsa sed hic earum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam soluta explicabo neque corporis repellat mollitia. Molestias ipsa sed hic earum!</p>
        </section>
    )
}

export default Sobre;