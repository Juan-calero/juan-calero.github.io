import React from 'react'
import Washome from '../../../icons/washomeLogoWhite.png'
import MusicaEmSi from '../../../icons/Musica em sí logo faces.png'

function Empresas() {
    return (
        <div className="empresas">
            <h3>empresas</h3>
            <div className="empresas__logo">
                <img src={Washome} alt="" />
                <img src={MusicaEmSi} alt="" />
            </div>
        </div>
    )
}

export default Empresas
