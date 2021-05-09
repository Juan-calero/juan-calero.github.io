import React from 'react'
import Empresas from './empresas/Empresas'
import Skills from './skills/Skills'

function Experiencia() {
    return (
        <section id="experiencia" className="experiencia">
            <h2 data-aos="fade">Experiência</h2>
            <div className="experiencia__components">
                <Empresas />
                <Skills />
            </div>
        </section>
    )
}

export default Experiencia
