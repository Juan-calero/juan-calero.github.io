import React from 'react';
import Robot from '../../../img/robot.png'

function Curriculo() {
    return (
        <div className="contatos__curriculo">
            <img src={Robot} alt="" />
            <button onClick={()=>alert('Deseja Fazer Download do Curriculo?')} className="btn">Currículo</button>
        </div>
    )
}

export default Curriculo;