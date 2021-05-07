import React from 'react'
import _OQueFaco from '../../utils/_OQueFaco'

function ProjetoItem(props) {
    return (
        <div className="projetos__item">
            <img src={props.img} alt="" />
            <div className="projetos__item--text">
                <h3>{props.title}</h3>
                <div className="projetos__item--content">
                    <div className="projetos__item--icons">
                        <a href=''><img src={props.github} alt="" srcset="" /></a>
                        <a href=''><img src={props.mockup} alt="" srcset="" /></a>
                        <a href=''><img src={props.site} alt="" srcset="" /></a>
                    </div>
                    <p>{props.content}</p>
                </div>
                <h4>{props.tech}</h4>
            </div>

        </div>
    )
}

export default ProjetoItem
