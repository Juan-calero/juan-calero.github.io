import React from "react"
import ContatoText from "./ContatoText"
import JCLogo from "../../img/JCLOGO.webp"

function Contact() {
  return (
    <section className="contato" id="contato">
      <ContatoText />
      <img
        className="matrix"
        src={JCLogo}
        alt="JC Logo with Matrix Effect"
        loading="lazy"
      />
    </section>
  )
}

export default Contact
