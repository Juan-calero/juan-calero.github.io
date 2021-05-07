import React from 'react'
import Github from '../../../../icons/github.png'
import LinkedIn from '../../../../icons/linkedin.png'
import Email from '../../../../icons/email.png'
import Phone from '../../../../icons/phone-call.png'

function Social() {
    return (
        <div className="fixed__left--social">
            <img src={Phone} alt="" />
            <img src={Email} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Github} alt="" />
        </div>
    )
}

export default Social
