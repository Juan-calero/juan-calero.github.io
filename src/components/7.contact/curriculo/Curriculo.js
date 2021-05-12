import React from 'react';
import Robot from '../../../img/robot.png'
import { cursorHoverBig, cursorHoverSmall } from '../../utils/CursorHoverHandler';

function Curriculo() {
    return (
        <div className="contatos__curriculo">
            <img src={Robot} alt="" />
            <button
                onMouseEnter={cursorHoverBig}
                onMouseLeave={cursorHoverSmall}
                onClick={() => alert('Deseja Fazer Download do Curriculo?')} className="btn">Currículo</button>
        </div>
    )
}

export default Curriculo;