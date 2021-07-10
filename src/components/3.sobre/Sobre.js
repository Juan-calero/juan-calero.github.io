import React from "react"
import Brain from "../../icons/brain_neon.png"
import SobreTitle from "./SobreTitle"

function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <img data-aos="fade" src={Brain} alt="Cérebro Neon" loading="lazy" />
      <SobreTitle />
      <p data-aos="fade" data-aos-offset="140">
        Programador Front-end energético com mais de{" "}
        <b>2 anos de experiência</b> a{" "}
        <b>desenhar e desenvolver websites de alta qualidade</b>, sediado em
        Sintra, Portugal.
        <br /> <br />
        <b> Reduzi o Custo do Cliente</b> (Host + CMS) para 0€ para a empresa
        "TerArtes" e<b> aumentei a conversão de clientes em 73%</b> na empresa
        "Música em Si".
        <br /> <br />
        <b>Anseio por novos desafios e adoro superar-me.</b>
        <br /> <br />
      </p>
    </section>
  )
}

export default Sobre
