import React from 'react'
import { cursorHoverBig, cursorHoverSmall } from '../../../utils/CursorHoverHandler'

function Navbar() {
    return (
        <div
            onMouseEnter={cursorHoverBig}
            onMouseLeave={cursorHoverSmall}
            className="skills__navbar">
            <span tabIndex="0" className="skills__navbar--p3">Desenvolvimento</span>
            <span tabIndex="0" className="skills__navbar--p1">Design</span>
            <span tabIndex="0" className="skills__navbar--p2">Ferramentas</span>
        </div>
    )
}

export default Navbar
