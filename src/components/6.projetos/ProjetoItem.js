import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { cursorHoverBig, cursorHoverSmall } from "../utils/CursorHoverHandler"

function ProjetoItem({ img, title, content, techUsed, site, github }) {
  return (
    <div className="projetos__item">
      <div data-aos="flip-up" className="projetos__item--img">
        <img src={img} alt="" loading="lazy" />
      </div>
      <div className="projetos__item--text">
        <h3 data-aos="fade-up">{title.toLowerCase()}</h3>
        <div data-aos="fade-left" className="projetos__item--content">
          <p>{content}</p>
          <div
            onMouseEnter={cursorHoverBig}
            onMouseLeave={cursorHoverSmall}
            className="projetos__item--icons"
          >
            {site && (
              <a rel="noopener noreferrer" target="_blank" href={site}>
                <FontAwesomeIcon
                  aria-label="website"
                  icon={faExternalLinkAlt}
                />
              </a>
            )}
            {github && (
              <a rel="noopener noreferrer" target="_blank" href={github}>
                <FontAwesomeIcon
                  aria-label="github"
                  icon={faGithubAlt}
                  size="lg"
                />
              </a>
            )}
          </div>
        </div>
        <h4 data-aos="fade">{techUsed.toLowerCase()}</h4>
      </div>
    </div>
  )
}

export default ProjetoItem
