import React from "react"
import ContatoText from "./ContatoText"
import Matrix from "./Matrix"
import JCLogo from "../../img/JCLOGO.png"

function Contact() {
  return (
    <section className="contato" id="contato">
      <ContatoText />
      <div className="matrix">
        <img src={JCLogo} alt="JC Logo" />
        <Matrix />
      </div>
    </section>
  )
}

export default Contact

//NEEDS REFACTORING
///////////
