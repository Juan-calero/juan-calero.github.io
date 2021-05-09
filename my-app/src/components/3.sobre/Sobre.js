import React from 'react';
import Brain from '../../icons/brain_neon.png';
import SobreTitle from './SobreTitle';

function Sobre(){
    return (
        <section id="sobre" className="sobre">
            <img data-aos="fade" src={Brain} alt=""/>
            <SobreTitle />
            <p data-aos-offset="260" data-aos="fade">Lorem ipsum amet consectetur adipisicing elit. Ullam soluta explicabo neque corporis repellat mollitia. Molestias ipsa sed hic earum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam soluta explicabo neque corporis repellat mollitia. Molestias ipsa sed hic earum!</p>
        </section>
    )
}

export default Sobre;