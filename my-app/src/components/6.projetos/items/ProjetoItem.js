import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faPaintBrush, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

function ProjetoItem(props) {
    return (
        <div className="projetos__item">
            <img data-aos="flip-up" src={props.img} alt="" />
            <div className="projetos__item--text">
                <h3 data-aos="fade-up">{props.title}</h3>
                <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" className="projetos__item--content">
                    <p>{props.content}</p>
                    <div className="projetos__item--icons">
                        <a href=''><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                        <a href=''><FontAwesomeIcon icon={faGithubAlt} size="lg" /></a>
                        <a href=''><FontAwesomeIcon icon={faPaintBrush} size="lg"/></a>
                    </div>
                </div>
                <h4 data-aos-offset="200" data-aos="fade">{props.tech}</h4>
            </div>

        </div>
    )
}

export default ProjetoItem
