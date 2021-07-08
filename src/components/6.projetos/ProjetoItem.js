import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import {
  faPaintBrush,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons"
import { cursorHoverBig, cursorHoverSmall } from "../utils/CursorHoverHandler"

function ProjetoItem({ img, title, content, techUsed, site, github, mockup }) {
  return (
    <div className="projetos__item">
      <div data-aos="flip-up" className="projetos__item--img">
        <img src={img} alt="" />
      </div>
      <div className="projetos__item--text">
        <h3 data-aos="fade-up">{title}</h3>
        <div data-aos="fade-left" className="projetos__item--content">
          <p>{content}</p>
          <div
            onMouseEnter={cursorHoverBig}
            onMouseLeave={cursorHoverSmall}
            className="projetos__item--icons"
          >
            {site && (
              <a rel="noreferrer" target="_blank" href={site}>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            )}
            {github && (
              <a rel="noreferrer" target="_blank" href={github}>
                <FontAwesomeIcon icon={faGithubAlt} size="lg" />
              </a>
            )}
            {mockup && (
              <a rel="noreferrer" target="_blank" href={mockup}>
                <FontAwesomeIcon icon={faPaintBrush} size="lg" />
              </a>
            )}
          </div>
        </div>
        <h4 data-aos="fade">{techUsed}</h4>
      </div>
    </div>
  )
}

export default ProjetoItem
