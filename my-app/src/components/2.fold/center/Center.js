import React from 'react';

function Center() {
    return (
        <div className="fold__center">
            <h1>Olá, Sou <strong className="fold__center--name">Juan Calero</strong>,<br /> Front-end web developer.</h1>
                <button onClick={()=>window.location.replace('/#sobre')} className="fold__btn"> Saber Mais {'>'} </button>
        </div>
    )
}

export default Center;