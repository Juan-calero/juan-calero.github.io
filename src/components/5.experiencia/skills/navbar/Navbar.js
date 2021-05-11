import React from 'react'
import { cursorHoverBig, cursorHoverSmall } from '../../../utils/CursorHoverHandler'

class Navbar extends React.Component {
    constructor() {
        super()
        this.state = {
            skill: ''
        }
    }
    handlerEnter(skill) {
        let svgs = document.querySelectorAll(`[skills="${skill}"]`);
        svgs.forEach(e => e.classList.add('activeSVG'))
    }
    handlerLeave(skill) {
        let svgs = document.querySelectorAll(`[skills="${skill}"]`);
        svgs.forEach(e => e.classList.remove('activeSVG'))
    }
    render() {
        return (
            <div
                onMouseEnter={cursorHoverBig}
                onMouseLeave={cursorHoverSmall}
                className="skills__navbar">
                <span tabIndex="0" onMouseEnter={() => { this.handlerEnter('desen')}} onMouseLeave={() => this.handlerLeave('desen')} className="skills__navbar--p3">Desenvolvimento</span>
                <span tabIndex="0" onMouseEnter={() => { this.handlerEnter('design')}} onMouseLeave={() => this.handlerLeave('design')} className="skills__navbar--p1">Design</span>
                <span tabIndex="0" onMouseEnter={() => { this.handlerEnter('tools')}} onMouseLeave={() => this.handlerLeave('tools')} className="skills__navbar--p2">Ferramentas</span>
            </div>
        )
    }
}

export default Navbar

/// REDO THIS MAYBE ITS USESTATE I DONT KNOOOOOOW
//////////////////////////////////////////
/////////////////////////////////////////