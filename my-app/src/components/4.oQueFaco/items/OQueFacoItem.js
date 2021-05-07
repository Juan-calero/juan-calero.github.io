import React from 'react'

function OQueFacoItem(props) {
    return (
        <div className="oQueFaco__item">
            <img className="oQueFaco__item--img" src={props.src} alt="" />
            <div className="oQueFaco__item--text">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default OQueFacoItem
