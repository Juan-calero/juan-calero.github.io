import React from "react";
import { cursorHoverBig, cursorHoverSmall } from "../utils/CursorHoverHandler";
import { email, phone } from "../utils/utils";

export default function ContatoText() {
  return (
    <div className="contatos__text">
      <p>
        {`Captei o seu interesse?

        Vamos conversar. Eu pago o café.
        
        Trago a minha experiência para a mesa onde poderemos trabalhar juntos para resolver problemas reais numa maneira que otimiza as nossas respetivas experiências e conhecimentos.
       
        Contacte-me:
       
        `}
        <a
          onMouseEnter={cursorHoverBig}
          onMouseLeave={cursorHoverSmall}
          href={`tel:+351${phone}`}
        >
          +351 {phone}
        </a>
        <a
          onMouseEnter={cursorHoverBig}
          onMouseLeave={cursorHoverSmall}
          href={`mailto:${email}`}
        >
          {email}
        </a>
      </p>
      <button
        onMouseEnter={cursorHoverBig}
        onMouseLeave={cursorHoverSmall}
        className="btn"
      >
        Download Currículo
      </button>
    </div>
  );
}

//NEEDS REFACTORING
///////////
