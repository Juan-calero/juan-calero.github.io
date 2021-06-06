import React from "react";
import Center from "./Center";
import NavBar from "./NavBar";
import JCFace from "../../img/jcface.jpg";

function Fold() {
  return (
    <section className="fold" id="início">
      <img id="myface" src={JCFace} alt="" />
      <NavBar />
      <Center />
    </section>
  );
}

export default Fold;
