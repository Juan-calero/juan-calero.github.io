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
      <p className="coffeeNLove">
        Created with{" "}
        <span aria-label="love" role="img">
          💙
        </span>{" "}
        and{" "}
        <span aria-label="coffee" role="img">
          ☕
        </span>
        . Powered By React.
      </p>
    </section>
  )
}

export default Contact
