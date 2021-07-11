import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { cursorHoverBig, cursorHoverSmall } from "../utils/CursorHoverHandler"

function ProjetoItem({ img, title, content, techUsed, site, github }) {
  return (
    <div className="projetos__item">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={site}
        data-aos="fade"
        className="projetos__item--img"
      >
        <img src={img} alt="" />
      </a>
      <div data-aos="fade" className="projetos__item--text">
        <h3>{title.toLowerCase()}</h3>
        <div className="projetos__item--content">
          <p>{content}</p>
          <div className="projetos__item--icons">
            {site && (
              <a
                onMouseEnter={cursorHoverBig}
                onMouseLeave={cursorHoverSmall}
                rel="noopener noreferrer"
                target="_blank"
                href={site}
              >
                <FontAwesomeIcon
                  aria-label="website"
                  icon={faExternalLinkAlt}
                />
              </a>
            )}
            {github && (
              <a
                onMouseEnter={cursorHoverBig}
                onMouseLeave={cursorHoverSmall}
                rel="noopener noreferrer"
                target="_blank"
                href={github}
              >
                <FontAwesomeIcon
                  aria-label="github"
                  icon={faGithubAlt}
                  size="lg"
                />
              </a>
            )}
          </div>
        </div>
        <h4>{techUsed.toLowerCase()}</h4>
      </div>
    </div>
  )
}

export default ProjetoItem
