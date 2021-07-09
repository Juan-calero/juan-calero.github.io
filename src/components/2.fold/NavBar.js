import React from "react"
import { cursorHoverBig, cursorHoverSmall } from "../utils/CursorHoverHandler"

function NavBar() {
  return (
    <ol
      className="fold__navbar"
      onMouseEnter={cursorHoverBig}
      onMouseLeave={cursorHoverSmall}
    >
      <li>
        <a href="#sobre">Sobre</a>
      </li>
      <li>
        <a href="#o_Que_Faço">O que faço</a>
      </li>
      <li>
        <a href="#experiência">Experiência</a>
      </li>
      <li>
        <a href="#projetos">Projetos</a>
      </li>
      <button
        onClick={() => window.location.replace("/#contato")}
        className="btn"
      >
        Contatos
      </button>
    </ol>
  )
}

export default NavBar
