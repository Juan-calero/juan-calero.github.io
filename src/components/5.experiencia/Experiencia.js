import React from "react";
import { empresas } from "../utils/utils";
import Ferramentas from "./Ferramentas";
import Navbar from "./Navbar";

function Experiencia() {
  const map = empresas.map(({ name, src }, index) => {
    return (
      <li>
        <img key={index} src={src} alt={`Logo ${name}`} />
      </li>
    );
  });

  return (
    <section id="experiência" className="experiencia">
      <h2 data-aos="fade">Experiência</h2>
      <div className="experiencia__components">
        <article data-aos-offset="440" data-aos="fade-up" className="empresas">
          <h3>empresas</h3>
          <ul className="empresas__logo">{map}</ul>
        </article>
        <article data-aos-offset="440" data-aos="fade-left" className="skills">
          <h3>skills</h3>
          <div className="skills__content">
            <Navbar />
            <Ferramentas />
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experiencia;
