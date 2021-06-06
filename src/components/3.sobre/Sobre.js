import React from "react";
import Brain from "../../icons/brain_neon.png";
import SobreTitle from "./SobreTitle";

function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <img data-aos="fade" src={Brain} alt="" />
      <SobreTitle />
      <p data-aos-offset="260" data-aos="fade">
        Olá! Sou o Juan Calero, front-end developer sediado em Sintra, Portugal,
        especializado na construção e design de websites de alta qualidade.
        <br /> <br />
        Gosto de me desenvolver e superar ao longo da minha vida e carreira, e
        anseio por novos desafios. O meu tipo de personalidade é INTJ-T.
        <br /> <br />
        Aprendo rapidamente, sou capaz de adquirir novas habilidades e conciliar
        diferentes projetos e funções com relativa facilidade.
        <br /> <br />
        Para além do código, procuro ativamente outros interesses, passatempos e
        áreas de estudo.
        <br /> <br />
      </p>
    </section>
  );
}

export default Sobre;
