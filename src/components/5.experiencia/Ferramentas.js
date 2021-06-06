import React from "react";
import desenvolvimentoData from "../utils/SkillsData/desenvolvimentoData";

function Ferramentas() {
  const codeIcon = desenvolvimentoData.map((item, index) => {
    return (
      <svg key={index} {...item}>
        <path d={item.d} />
      </svg>
    );
  });
  return <div className="skills__navbar--icons">{codeIcon}</div>;
}

export default Ferramentas;
