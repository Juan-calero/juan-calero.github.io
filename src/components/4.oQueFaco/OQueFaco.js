import React from "react";
import BigGear from "../../img/black-big-gear-png-transparent.png";
import oQueFacoData from "../utils/oQueFacoData";
import OQueFacoItem from "./OQueFacoItem";

function OQueFaco() {
  const OQueFacoComponents = oQueFacoData.map((item, index) => (
    <OQueFacoItem key={index} {...item} />
  ));

  return (
    <section id="o_Que_Faço" className="oQueFaco">
      <h2 data-aos="fade-right">O Que Faço</h2>
      <div className="oQueFaco__items">{OQueFacoComponents}</div>
      <aside className="oQueFaco__bg">
        <img data-aos="fade-left" src={BigGear} alt="" />
      </aside>
    </section>
  );
}

export default OQueFaco;
