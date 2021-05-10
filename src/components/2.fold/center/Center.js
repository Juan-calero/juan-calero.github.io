import React from 'react';
import { cursorHoverBig, cursorHoverSmall } from '../../utils/CursorHoverHandler';

function Center() {
    return (
        <div className="fold__center">
            <h1>Olá, Sou <strong
                className="fold__center--name"
                onMouseMove={e => {
                    const image = document.getElementById('myface');
                    image.style.top = `${e.pageY}px`;
                    image.style.left = `${e.pageX}px`;
                    image.style.display = "block";
                }}
                onMouseLeave={() => {
                    const image = document.getElementById('myface');
                    image.style.display = 'none';
                }}
            >Juan Calero</strong>,<br /> Front-end web developer.</h1>
            <button
                onMouseEnter={cursorHoverBig}
                onMouseLeave={cursorHoverSmall}
                onClick={() => window.location.replace('/#sobre')}
                className="fold__btn"> Saber Mais {'>'} </button>
        </div>
    )
}

export default Center;