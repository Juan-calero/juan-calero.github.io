import React from "react"

function OQueFacoItem({ title, content, src }) {
  return (
    <div data-aos="fade-right" className="oQueFaco__item">
      <img className="oQueFaco__item--img" src={src} alt="" loading="lazy" />
      <div className="oQueFaco__item--text">
        <h3>{title}</h3>
        {content}
      </div>
    </div>
  )
}

export default OQueFacoItem
