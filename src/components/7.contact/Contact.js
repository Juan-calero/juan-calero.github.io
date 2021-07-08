import React from "react"
import ContatoText from "./ContatoText"
import Matrix from "./Matrix"
import JCLogo from "../../img/JCLOGO.png"

function Contact() {
  return (
    <section className="contato" id="contato">
      <div className="contatos">
        <h2>Contactos</h2>
        <ContatoText />
      </div>
      <div className="matrix">
        <img src={JCLogo} alt="JC Logo" />
        <div className="matrix__box">
          <Matrix />
          <Matrix />
          <Matrix />
          <Matrix />
          <Matrix />
        </div>
      </div>
    </section>
  )
}

export default Contact

//NEEDS REFACTORING
///////////
