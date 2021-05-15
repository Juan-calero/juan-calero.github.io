import React from 'react';
import { cursorHoverBig, cursorHoverSmall } from '../../utils/CursorHoverHandler';

export default function ContatoText(params) {
    return (
        <div className="contatos__text">
            <p>Captei o seu interesse?<br /><br />
             Vamos conversar. Eu pago o café.<br /><br />
                Trago a minha experiência para a mesa onde poderemos trabalhar juntos para resolver
                problemas reais numa maneira que otimiza as nossas respetivas experiências e conhecimentos.<br /><br />

                Sinta-se livre de me contactar através de:<br /><br />
                </p>
            <button className="btn">Currículo</button>
        </div>
    )
};
