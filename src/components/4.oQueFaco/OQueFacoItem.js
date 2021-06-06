import React from "react";

function OQueFacoItem({ title, content, src }) {
  return (
    <div data-aos-offset="200" data-aos="fade-right" className="oQueFaco__item">
      <img className="oQueFaco__item--img" src={src} alt="" />
      <div className="oQueFaco__item--text">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default OQueFacoItem;
