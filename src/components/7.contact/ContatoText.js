import React from "react"
import { cursorHoverBig, cursorHoverSmall } from "../utils/CursorHoverHandler"
import { email, phone } from "../utils/utils"
import curriculo from "../../CV/PORTUGUESE CV.pdf"

export default function ContatoText() {
  return (
    <div className="contatoContent">
      <h2>Contactos</h2>
      <p>
        {`Captei o seu interesse?

        Vamos conversar. Eu pago o café.
        
        Trago a minha experiência para a mesa onde poderemos trabalhar juntos para resolver problemas reais numa maneira que otimiza as nossas respetivas experiências e conhecimentos.
       
        Contacte-me:
       
        `}
        <a
          className="contatoContent__text--anchor"
          onMouseEnter={cursorHoverBig}
          onMouseLeave={cursorHoverSmall}
          href={`tel:+351${phone}`}
        >
          +351 {phone}
        </a>
        <a
          className="contatoContent__text--anchor"
          onMouseEnter={cursorHoverBig}
          onMouseLeave={cursorHoverSmall}
          href={`mailto:${email}`}
        >
          {email}
        </a>
      </p>
      <a tabindex="-1" href={curriculo} download="Juan Calero Curriculo.pdf">
        <button
          onMouseEnter={cursorHoverBig}
          onMouseLeave={cursorHoverSmall}
          className="btn"
        >
          Download Currículo
        </button>
      </a>
    </div>
  )
}
