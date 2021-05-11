import React from 'react'
import Github from '../../../../icons/github.png'
import LinkedIn from '../../../../icons/linkedin.png'
import Email from '../../../../icons/email.png'
import Phone from '../../../../icons/phone-call.png'

function Social() {
    return (
        <div className="left__social">
            <a rel="noreferrer" target="_blank" href="tel:+351915019341"><img src={Phone} alt="" /></a>
            <a rel="noreferrer" href="mailto:hello.juancalero@gmail.com"><img src={Email} alt="" /></a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/juanOCalero/"><img src={LinkedIn} alt="" /></a>
            <a rel="noreferrer" target="_blank" href="https://github.com/Juan-calero"><img src={Github} alt="" /></a>
        </div>
    )
}

export default Social
