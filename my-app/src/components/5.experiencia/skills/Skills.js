import React from 'react'
import Ferramentas from './Ferramentas'
import Navbar from './navbar/Navbar'

function Skills() {
    return (
        <div data-aos-offset="440" data-aos="fade-left" className="skills">
            <h3>skills</h3>
            <div className="skills__content">
                <Navbar />
                <Ferramentas/>
            </div>
        </div>
    )
}

export default Skills
